import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  isOpen = false;
  email = '';
  message = '';
  emailError = '';
  messageError = '';
  isSubmitting = false;
  isSuccess = false;
  errorMessage = '';

  private sub!: Subscription;
  private autoCloseTimer: any = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.sub = this.contactService.isOpen$.subscribe(open => {
      this.isOpen = open;
      if (open) {
        // Prevent background scrolling while modal is active
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
    }
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isOpen && !this.isSubmitting) {
      this.closeModal();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('contact-modal-backdrop') && !this.isSubmitting) {
      this.closeModal();
    }
  }

  closeModal(): void {
    if (this.isSubmitting) return;
    this.contactService.close();
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
      this.autoCloseTimer = null;
    }
    // Delay resetting state slightly for smooth fade-out
    setTimeout(() => {
      this.resetForm();
    }, 300);
  }

  onEmailInput(): void {
    if (this.emailError) {
      this.validateEmail();
    }
  }

  onMessageInput(): void {
    if (this.messageError) {
      this.validateMessage();
    }
  }

  validateEmail(): boolean {
    const trimmed = this.email ? this.email.trim() : '';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmed) {
      this.emailError = 'Email address is required.';
      return false;
    }
    if (!emailRegex.test(trimmed)) {
      this.emailError = 'Please enter a valid email address (e.g. name@example.com).';
      return false;
    }
    this.emailError = '';
    return true;
  }

  validateMessage(): boolean {
    const trimmed = this.message ? this.message.trim() : '';
    if (!trimmed) {
      this.messageError = 'Message cannot be empty.';
      return false;
    }
    if (trimmed.length < 5) {
      this.messageError = 'Please write at least 5 characters.';
      return false;
    }
    this.messageError = '';
    return true;
  }

  async onSubmit(): Promise<void> {
    const isEmailValid = this.validateEmail();
    const isMessageValid = this.validateMessage();

    if (!isEmailValid || !isMessageValid) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.isSuccess = false;

    const senderEmail = this.email.trim();
    const senderMessage = this.message.trim();

    const payload = {
      email: senderEmail,
      message: senderMessage,
      _subject: `New Portfolio Inquiry from ${senderEmail}`,
      _replyto: senderEmail,
      _template: 'table',
      _autoresponse: `Hi there,\n\nThank you for reaching out through my portfolio website! I have received your message and will review your inquiry and get back to you shortly.\n\nHere is a copy of your message:\n"${senderMessage}"\n\nBest regards,\nArjun M S\nFull Stack Software Developer\nThrissur, Kerala, India\nEmail: arjunaju757@gmail.com\nPhone: +91 9539093231\nLinkedIn: https://linkedin.com/in/arjun-m-s-87ab70227\nGitHub: https://github.com/Arjunms757`
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/arjunaju757@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        this.isSuccess = true;
        this.isSubmitting = false;
        this.autoCloseTimer = setTimeout(() => {
          this.closeModal();
        }, 5000);
      } else {
        throw new Error(result.message || 'Transmission error');
      }
    } catch (err: any) {
      console.warn('FormSubmit API notice:', err);
      this.isSubmitting = false;
      this.errorMessage = 'Automatic delivery encountered a network issue. You can click below to send directly through your email client.';
    }
  }

  sendFallbackEmail(): void {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${this.email || 'Visitor'}`);
    const body = encodeURIComponent(this.message || 'Hi Arjun,');
    window.open(`mailto:arjunaju757@gmail.com?subject=${subject}&body=${body}`, '_blank');
  }

  private resetForm(): void {
    this.email = '';
    this.message = '';
    this.emailError = '';
    this.messageError = '';
    this.isSubmitting = false;
    this.isSuccess = false;
    this.errorMessage = '';
  }
}
