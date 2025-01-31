import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // استيراد RouterModule
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,ContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
