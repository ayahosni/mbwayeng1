import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://yourdomain.com/contact.php'; // ضع رابط سكربت PHP هنا

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.apiUrl, formData, { headers, responseType: 'text' });
  }
}
