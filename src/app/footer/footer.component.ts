import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public contactService: ContactService) {}

  openContactModal(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.contactService.open();
  }
}
