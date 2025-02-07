import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // توفير الخدمة على مستوى التطبيق
})
export class ContactService {
  private apiUrl = 'http://localhost:5000/send-email'; // عنوان الخادم

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData); // إرسال بيانات النموذج
  }
}