import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  messageStatus: string = '';

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
        response => {
          if (response === 'OK') {
            this.messageStatus = 'تم إرسال الرسالة بنجاح!';
            this.contactForm.reset();
          } else {
            this.messageStatus = 'حدث خطأ، حاول مرة أخرى.';
          }
        },
        error => {
          this.messageStatus = 'حدث خطأ، تأكد من الاتصال بالخادم.';
        }
      );
    }
  }
}
