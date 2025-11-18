import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

interface WikiArticle {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './wiki.html',
  styleUrl: './wiki.css'
})
export class WikiComponent {
  selectedArticleId = 'getting-started';

  articles: WikiArticle[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: `
        <h2>Getting Started with Local Contact Forms</h2>
        <p>Welcome to Local Contact Forms! Follow these simple steps to get your contact form up and running:</p>

        <ol>
          <li><strong>Request a subscription</strong> - Visit our <a href="https://app.localcontactforms.com/?id=local-contact-forms" target="_blank">subscription form</a> and tell us about your business.</li>
          <li><strong>Receive your unique form link</strong> - Once we've set up your account, you'll receive a unique URL for your contact form (e.g., https://app.localcontactforms.com/?id=your-business-name).</li>
          <li><strong>Customize your form</strong> - We'll work with you to customize your form theme, add your business information, and configure email notifications.</li>
          <li><strong>Share your form</strong> - Add the link to your social media profiles, website, or anywhere else you want customers to reach you.</li>
          <li><strong>Start receiving contacts</strong> - When customers submit the form, you'll receive their information directly in your email inbox.</li>
        </ol>

        <p>That's it! Your contact form is now live and ready to receive submissions from customers across all devices.</p>

        <h3>What You'll Need</h3>
        <ul>
          <li>Your business name</li>
          <li>An email address where you want to receive contacts</li>
          <li>Business information you want to display (address, phone, social media links)</li>
          <li>Your preferred color theme (optional)</li>
        </ul>

        <h3>Next Steps</h3>
        <p>Once your form is set up, check out our other guides:</p>
        <ul>
          <li>How to share your form from social media</li>
          <li>Customizing your form theme</li>
          <li>Managing your submissions</li>
        </ul>
      `
    },
    {
      id: 'share-social-media',
      title: 'How to Share Your Form from Social Media',
      content: `
        <h2>Sharing Your Contact Form on Social Media</h2>
        <p>Your Local Contact Form is designed to work seamlessly on all social media platforms. Here's how to share it effectively:</p>

        <h3>Instagram</h3>
        <p>Instagram allows one clickable link in your bio. Make it count!</p>
        <ol>
          <li>Go to your Instagram profile</li>
          <li>Click "Edit Profile"</li>
          <li>In the "Website" field, paste your Local Contact Form URL</li>
          <li>Click "Done"</li>
        </ol>
        <p><strong>Pro tip:</strong> Update your bio to say something like "📧 Contact us using the link below" to encourage clicks.</p>

        <h3>Facebook</h3>
        <p>Facebook Pages have multiple places to add your contact form:</p>
        <ul>
          <li><strong>About section:</strong> Add your form URL to your website field</li>
          <li><strong>Posts:</strong> Share your form URL in regular posts</li>
          <li><strong>Pinned post:</strong> Create a post with your form link and pin it to the top of your page</li>
          <li><strong>Call-to-action button:</strong> Some business pages can add a custom CTA button that links to your form</li>
        </ul>

        <h3>Twitter/X</h3>
        <ol>
          <li>Go to your profile</li>
          <li>Click "Edit Profile"</li>
          <li>Add your form URL to the "Website" field</li>
          <li>Update your bio to mention the contact form</li>
        </ol>
        <p>You can also tweet your form link regularly to remind followers how to contact you.</p>

        <h3>LinkedIn</h3>
        <p>For LinkedIn business pages:</p>
        <ol>
          <li>Navigate to your company page</li>
          <li>Click "Edit Page Info"</li>
          <li>Add your contact form URL to the "Website" field</li>
        </ol>

        <h3>TikTok</h3>
        <p>TikTok allows a link in your bio for business accounts:</p>
        <ol>
          <li>Go to your profile</li>
          <li>Click "Edit Profile"</li>
          <li>Add your form URL to the "Website" field</li>
        </ol>

        <h3>Best Practices</h3>
        <ul>
          <li>Use a clear call-to-action in your bio (e.g., "Get in touch ↓")</li>
          <li>Test your link on mobile devices to ensure it works smoothly</li>
          <li>Update your link if we ever change your form URL</li>
          <li>Consider using link tracking to see how many people visit your form from each platform</li>
        </ul>
      `
    },
    {
      id: 'customize-theme',
      title: 'Customizing Your Form Theme',
      content: `
        <h2>Customizing Your Form Theme</h2>
        <p>Local Contact Forms offers several theme options to match your brand and style preferences.</p>

        <h3>Available Themes</h3>
        <p>We offer a variety of professionally designed themes, each optimized for readability and conversion:</p>
        <ul>
          <li><strong>Light Theme:</strong> Clean white background with subtle accents</li>
          <li><strong>Dark Theme:</strong> Modern dark background, easy on the eyes</li>
          <li><strong>Brand Colors:</strong> Custom theme using your brand's primary colors</li>
          <li><strong>Minimalist:</strong> Ultra-clean design with maximum white space</li>
          <li><strong>Professional:</strong> Traditional business look with neutral tones</li>
          <li><strong>Vibrant:</strong> Bold colors that stand out</li>
        </ul>

        <h3>How to Change Your Theme</h3>
        <p>To request a theme change:</p>
        <ol>
          <li>Contact us through our <a href="https://app.localcontactforms.com/?id=local-contact-forms" target="_blank">contact form</a></li>
          <li>Let us know which theme you'd like to switch to</li>
          <li>If you want a custom brand color theme, provide your brand color hex codes</li>
          <li>We'll update your form within 24 hours</li>
        </ol>

        <h3>Custom Branding Options</h3>
        <p>Beyond themes, you can customize:</p>
        <ul>
          <li><strong>Logo:</strong> Add your business logo at the top of the form</li>
          <li><strong>Colors:</strong> Match your exact brand colors</li>
          <li><strong>Background image:</strong> Add a subtle background image (optional)</li>
          <li><strong>Font:</strong> Choose from several professional font pairings</li>
          <li><strong>Button text:</strong> Customize the submit button text</li>
        </ul>

        <h3>Mobile Optimization</h3>
        <p>All themes are automatically optimized for mobile devices. Your theme will look great on:</p>
        <ul>
          <li>Smartphones (all sizes)</li>
          <li>Tablets</li>
          <li>Desktop computers</li>
          <li>Large displays</li>
        </ul>

        <h3>Testing Your Theme</h3>
        <p>After we update your theme:</p>
        <ol>
          <li>Visit your form URL on different devices</li>
          <li>Check that text is readable</li>
          <li>Ensure buttons are easy to click on mobile</li>
          <li>Verify all your information displays correctly</li>
        </ol>
        <p>If anything doesn't look right, let us know and we'll adjust it immediately.</p>

        <h3>Theme Preview</h3>
        <p>Want to see what different themes look like before choosing? Contact us and we can send you preview screenshots of your form in different themes.</p>
      `
    },
    {
      id: 'managing-submissions',
      title: 'Managing Submissions',
      content: `
        <h2>Managing Your Form Submissions</h2>
        <p>Learn how to handle, organize, and respond to contacts you receive through your Local Contact Form.</p>

        <h3>How Submissions Work</h3>
        <p>When someone fills out your contact form:</p>
        <ol>
          <li>They enter their information and click submit</li>
          <li>Our system validates the submission and checks for spam</li>
          <li>If valid, you immediately receive an email with their contact details</li>
          <li>The customer sees a confirmation message</li>
        </ol>

        <h3>Email Notifications</h3>
        <p>Every form submission sends you an email containing:</p>
        <ul>
          <li>Customer's name</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>Their message</li>
          <li>Date and time of submission</li>
          <li>Any custom fields you've added</li>
        </ul>

        <h3>Organizing Your Contacts</h3>
        <p>To keep track of submissions:</p>
        <ul>
          <li><strong>Email filters:</strong> Set up a filter in your email to automatically label or folder Local Contact Form submissions</li>
          <li><strong>Quick response:</strong> Create email templates for common inquiries</li>
          <li><strong>Follow-up system:</strong> Use your email's task/reminder features to follow up with leads</li>
          <li><strong>CRM integration:</strong> Forward submission emails to your CRM system automatically</li>
        </ul>

        <h3>Response Time Best Practices</h3>
        <p>For the best customer experience:</p>
        <ul>
          <li>Try to respond within 24 hours</li>
          <li>Send an initial acknowledgment even if you need more time for a full response</li>
          <li>Set up an auto-responder if you'll be away</li>
          <li>Be professional and friendly in all communications</li>
        </ul>

        <h3>Spam Protection</h3>
        <p>Our built-in spam protection helps ensure you only receive legitimate contacts:</p>
        <ul>
          <li><strong>Bot detection:</strong> Advanced algorithms identify and block automated submissions</li>
          <li><strong>Rate limiting:</strong> Prevents spam attacks from the same IP address</li>
          <li><strong>Email validation:</strong> Ensures email addresses are valid format</li>
          <li><strong>Honeypot fields:</strong> Hidden fields that trap spam bots</li>
        </ul>

        <h3>What to Do About Spam</h3>
        <p>If you receive spam submissions despite our protection:</p>
        <ol>
          <li>Forward the spam email to us</li>
          <li>We'll investigate and strengthen filters</li>
          <li>Consider adding a custom question that only real customers would know</li>
        </ol>

        <h3>Tracking Performance</h3>
        <p>To understand how well your form is performing:</p>
        <ul>
          <li>Track the number of submissions per week/month</li>
          <li>Note which marketing channels drive the most contacts</li>
          <li>Monitor response times and conversion rates</li>
          <li>Ask customers how they found you</li>
        </ul>

        <h3>Privacy and Data</h3>
        <p>Important notes about submission data:</p>
        <ul>
          <li>We do not store customer submissions after they're emailed to you</li>
          <li>All data transmission is encrypted</li>
          <li>You're responsible for handling customer data according to applicable privacy laws</li>
          <li>We recommend deleting old submissions you no longer need</li>
        </ul>

        <h3>Need Help?</h3>
        <p>If you're not receiving submissions or have questions about managing contacts, reach out to us through our <a href="https://app.localcontactforms.com/?id=local-contact-forms" target="_blank">contact form</a> and we'll help troubleshoot.</p>
      `
    }
  ];

  get selectedArticle(): WikiArticle | undefined {
    return this.articles.find(article => article.id === this.selectedArticleId);
  }

  selectArticle(articleId: string): void {
    this.selectedArticleId = articleId;
  }
}
