import { Component, DOCUMENT, inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
  private readonly document = inject(DOCUMENT);

  protected isSidebarVisible = false;

  protected sidebarToggle(): void {
    const body = this.document.getElementsByTagName('body')[0];
    const sidebar = this.document.getElementsByTagName('app-sidebar')[0];

    if (!this.isSidebarVisible) {
      body.classList.add('nav-open');
      sidebar.setAttribute('aria-expanded', 'true');
      this.isSidebarVisible = true;
    } else {
      body.classList.remove('nav-open');
      sidebar.setAttribute('aria-expanded', 'false');
      this.isSidebarVisible = false;
    }
  }
}
