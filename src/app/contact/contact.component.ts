import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    email: 'arjunaju757@gmail.com',
    phone: '+91 9539395402',
    location: 'Thrissur, Kerala, India',
    linkedin: 'https://linkedin.com/in/arjun-m-s-87ab70227',
    github: 'https://github.com/Arjunms757',
    website: 'https://arjunms.in'
  };

  formSubmitted = false;
  submitting = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitting = true;

    // Simulate submission
    setTimeout(() => {
      this.submitting = false;
      this.formSubmitted = true;
      
      // Reset form after a delay
      setTimeout(() => {
        this.formSubmitted = false;
        (event.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  }
}
