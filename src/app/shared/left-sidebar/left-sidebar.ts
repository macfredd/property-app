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
  animationDuration = 500;

  expand() {
    this.isExpanded = true;
    setTimeout(() => {
      this.contentVisible = true;
    }, this.animationDuration);
  }

  collapse() {
    this.isExpanded = false;
    this.contentVisible = false;
  }
}
