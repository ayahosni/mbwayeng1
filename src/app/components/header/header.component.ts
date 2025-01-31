import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[RouterModule],

  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}