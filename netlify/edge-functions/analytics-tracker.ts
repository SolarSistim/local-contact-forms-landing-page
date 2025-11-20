import type { Context } from "@netlify/edge-functions";

const SPREADSHEET_ID = '1-j1qhdR0ERzDkJlgy1klls5ztJdbJMpHbLDfH6BXVQk';
const SHEET_NAME = 'hit_counter';

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  
  // Only track HTML page visits (not assets, API calls, etc.)
  const isAsset = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|xml)$/i.test(url.pathname);
  const isInternalRequest = url.pathname.startsWith('/.netlify/');
  const userAgent = request.headers.get('user-agent') || '';
  const isDeno = userAgent.includes('Deno/');
  
  // Fire off analytics tracking only for real HTML page visits
  if (!isAsset && !isInternalRequest && !isDeno) {
    logAnalytics(request, context).catch(err => {
      console.error('Analytics tracking error (non-blocking):', err);
    });
  }

  // Continue to the actual page
  return context.next();
};

// Async function to log analytics
async function logAnalytics(request: Request, context: Context) {
  try {
    const url = new URL(request.url);
    
    // Get current date/time in CST format
    const date = new Date();
    const cstDate = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);

    // Extract tenant ID if present, otherwise use 'website'
    let tenantId = 'website';
    if (url.searchParams.has('id')) {
      tenantId = url.searchParams.get('id') || 'website';
    } else {
      const pathParts = url.pathname.split('/').filter(part => part.length > 0);
      if (pathParts.length >= 2 && pathParts[0] === 'contact') {
        tenantId = pathParts[1];
      }
    }

    // Get domain
    const domain = url.hostname;

    // Get referrer
    const referrer = request.headers.get('referer') || 'Direct';

    // Get geographic location from Netlify context
    const geo = context.geo;
    const geoLocation = geo ? `${geo.city || 'Unknown'}, ${geo.subdivision?.name || geo.country?.name || 'Unknown'}` : 'Unknown';

    // Get IP address
    const ip = context.ip || request.headers.get('x-forwarded-for') || 'Unknown';

    // Get page URL/path
    const pageUrl = url.pathname + url.search;

    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Parse User Agent for device type and platform
    const deviceType = getDeviceType(userAgent);
    const platform = getPlatform(userAgent);

    // Generate session ID (simple hash of IP + UA + date)
    const sessionId = await generateSessionId(ip, userAgent, date.toDateString());

    // Prepare analytics data
    const analyticsData = {
      tenantId,
      date: cstDate,
      domain,
      referrer,
      geoLocation,
      ip,
      pageUrl,
      deviceType,
      sessionId,
      platform,
      userAgent
    };

    // Send to Google Sheets via serverless function
    const analyticsUrl = `${url.origin}/.netlify/functions/log-analytics`;
    
    // Fire and forget - don't await
    await fetch(analyticsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analyticsData)
    });

  } catch (error) {
    console.error('Error in logAnalytics (non-blocking):', error);
  }
}

// Helper function to determine device type
function getDeviceType(userAgent: string): string {
  if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    return 'Mobile';
  } else if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
    return 'Tablet';
  }
  return 'Desktop';
}

// Helper function to determine platform
function getPlatform(userAgent: string): string {
  if (/windows/i.test(userAgent)) return 'Windows';
  if (/macintosh|mac os x/i.test(userAgent)) return 'Mac';
  if (/linux/i.test(userAgent)) return 'Linux';
  if (/android/i.test(userAgent)) return 'Android';
  if (/iphone|ipad|ipod/i.test(userAgent)) return 'iOS';
  return 'Unknown';
}

// Helper function to generate a session ID
async function generateSessionId(ip: string, userAgent: string, date: string): Promise<string> {
  const data = `${ip}-${userAgent}-${date}`;
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex.substring(0, 16); // Use first 16 chars
}