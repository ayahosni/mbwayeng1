import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,  // Makes the component standalone without the need for NgModule
  imports: [CommonModule, ReactiveFormsModule], // Import required modules directly
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  messageStatus: string = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value)
        .then(response => {
          this.messageStatus = 'Message sent successfully!';
          this.contactForm.reset(); // Reset the form after submission
        })
        .catch(error => {
          console.error('Error sending email:', error);
          this.messageStatus = 'An error occurred while sending the message. Please try again!';
        });
    } else {
      this.messageStatus = 'Please fill in all required fields!';
    }
  }
}
