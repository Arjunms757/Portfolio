import { Component, HostListener } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;

  constructor(public contactService: ContactService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  openContactModal(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (this.menuOpen) {
      this.menuOpen = false;
    }
    this.contactService.open();
  }
}
