import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // استيراد RouterModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
