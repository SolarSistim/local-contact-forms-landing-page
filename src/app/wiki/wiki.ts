import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
export class WikiComponent {
  selectedArticleId = 'getting-started';

  selectArticle(articleId: string): void {
    this.selectedArticleId = articleId;
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


}
