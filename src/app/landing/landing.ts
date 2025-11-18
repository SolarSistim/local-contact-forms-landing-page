import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent {
  currentYear = new Date().getFullYear();
  mobileMenuOpen = false;

  features = [
    {
      title: 'Works everywhere',
      description: 'Mobile, tablet, and desktop responsive design.',
      icon: 'devices'
    },
    {
      title: 'Spam-resistant',
      description: 'Built-in bot and spam resistance for cleaner inboxes.',
      icon: 'shield'
    },
    {
      title: 'Share from anywhere',
      description: 'Link from your social media page, existing website, or anywhere you can paste a link.',
      icon: 'share'
    },
    {
      title: 'Doubles as a landing page',
      description: 'Use your contact form as a simple landing page for your business.',
      icon: 'web'
    },
    {
      title: 'Show your business info',
      description: 'Display physical address, email address, and social media links & icons.',
      icon: 'business'
    },
    {
      title: 'Delivered to your inbox',
      description: 'Receive new contacts directly at your email address.',
      icon: 'email'
    }
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openContactForm(): void {
    window.open('https://app.localcontactforms.com/?id=local-contact-forms', '_blank');
  }
}
