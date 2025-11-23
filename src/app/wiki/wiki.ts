import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

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
export class WikiComponent implements OnInit {
  selectedArticleId = 'getting-started';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check for tab parameter in URL
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.selectedArticleId = params['tab'];
      }
    });
  }

  selectArticle(articleId: string): void {
    this.selectedArticleId = articleId;
    // Update URL with tab parameter
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: articleId },
      queryParamsHandling: 'merge'
    });
  }

  scrollTo(anchor: string): void {
    const el = document.getElementById(anchor);
    if (!el) {
      return;
    }

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  openLocalContactForms(): void {
    window.open('https://app.localcontactforms.com/?id=local-contact-forms', '_blank', 'noopener');
  }

}
