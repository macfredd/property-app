import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-left-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css'
})
export class LeftSidebar {

  isExpanded = false;
  contentVisible = false;
  animationDuration = 300;
  private contentTimeout: any;

  expand() {
    this.isExpanded = true;
    if (this.contentTimeout) {
      clearTimeout(this.contentTimeout);
    }
    this.contentTimeout = setTimeout(() => {
      this.contentVisible = true;
    }, this.animationDuration);
  }

  collapse() {
    this.isExpanded = false;
    this.contentVisible = false;
    if (this.contentTimeout) {
      clearTimeout(this.contentTimeout);
      this.contentTimeout = null;
    }
  }
}
