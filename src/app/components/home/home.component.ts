import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { jarallax } from 'jarallax';
import 'owl.carousel';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // استيراد RouterModule
import{AboutComponent} from '../about/about.component';
import{ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule,RouterModule,AboutComponent,ContactComponent], // إضافة RouterModule هنا
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [
    {
      id: 1, // أضف id لكل منتج
      image: 'assets/images/prod1.avif',
      title: 'ATLAS COPCO ',
      description: 'A THREE-handed drilling one box machine',
      price: 496000.00
    },
    {
      id: 2, // أضف id لكل منتج
      image: 'assets/images/prod2.avif',
      title: 'ATLAS COPCO EPIROC ',
      description: '  Surface drill rig for quarrying and construction',

      price: 390000.00
    },
    {
      id: 3, // أضف id لكل منتج
      image: 'assets/images/prod3.avif',
      title: 'BSP ROBO SHOTCRETE ',
      description: 'BSP ROBO SHOTCRETE',
      price: 170000.00, // السعر
    },
    {
      id: 4, // أضف id لكل منتج
      image: 'assets/images/prod4.avif',
      title: 'ATLAS COPCO & 2010',
      description: 'Two-handed drilling',
      price: 325000.00, // السعر
    },
    {
      id: 5, // أضف id لكل منتج
      image: 'assets/images/prod5.avif',
      title: 'ATLAS COPCO & 2015',
      description: 'A THREE-handed drilling ',
      price: 490000.00, // السعر
    },
    {
      id: 6, // أضف id لكل منتج
      image: 'assets/images/prod8.avif',
      title: 'ATLAS COPCO & 2015',
      description: 'A THREE-handed drilling',
      price: 490000.00, // السعر
    },
    {
      id: 7, // أضف id لكل منتج
      image: 'assets/images/produ7.avif',
      title: 'ATLAS COPCO & 2016',
      description: 'A THREE-handed drilling',
      price: 500000.00, // السعر
    },
    {
      id: 8, // أضف id لكل منتج
      image: 'assets/images/prod9.avif',
      title: 'JUMBO 2 ARMS FURUKAWA',
      description: 'A THREE-handed drilling',
      price: 160000.00, // السعر
    }
  ];
  ngOnInit(): void {
    this.applyGSAPAnimations();
    this.initJarallax();
    this.initOwlCarousel();
    this.initAOS();
  }

  applyGSAPAnimations(): void {
    // أنيميشن للعناصر ذات الكلاس gsap-reveal-hero
    gsap.from('.gsap-reveal-hero', {
      duration: 1.5,
      y: 50,
      stagger: 0.3,
      ease: 'power2.out',
      rotation: 10, // دوران بسيط
      scale: 0.8, // تكبير وتصغير
    });

    gsap.from('.gsap-reveal', {
      duration: 1.5,
      y: 50,
      stagger: 0.3,
      ease: 'bounce.out', // تأثير ارتداد
      delay: 0.5, // تأخير بسيط
    });

    // أنيميشن للعناصر ذات الكلاس gsap-reveal-filter
    gsap.from('.gsap-reveal-filter', {
      duration: 1.5,
      y: 50,
      stagger: 0.3,
      ease: 'elastic.out(1, 0.5)', // تأثير مرن
      filter: 'blur(5px)',
    });


  }

  initJarallax(): void {
    // تهيئة Jarallax للعناصر ذات الكلاس jarallax
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }
  initOwlCarousel(): void {
    const owlCarousel = $('.owl-carousel'); 
    if (owlCarousel.length) { 
      owlCarousel.owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    } else {
      console.error('Owl Carousel element not found!');
    }
  }
  initAOS(): void {
    // تهيئة AOS
    AOS.init({
      offset: 200, 
      duration: 1000,
      easing: 'ease-in-out', 
      delay: 100, 
      once: false,
    });
  }
  
}