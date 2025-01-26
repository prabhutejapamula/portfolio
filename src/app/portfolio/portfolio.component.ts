import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    // Custom cursor
    const cursor = this.el.nativeElement.querySelector('.cursor');
    const follower = this.el.nativeElement.querySelector('.cursor-follower');

    this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      if (cursor) {
        this.renderer.setStyle(cursor, 'left', `${e.clientX}px`);
        this.renderer.setStyle(cursor, 'top', `${e.clientY}px`);
      }
      setTimeout(() => {
        if (follower) {
          this.renderer.setStyle(follower, 'left', `${e.clientX}px`);
          this.renderer.setStyle(follower, 'top', `${e.clientY}px`);
        }
      }, 100);
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element enters the viewport
          this.renderer.addClass(entry.target, 'in-view');
          if (entry.target.classList.contains('skill-bar')) {
            const percent = entry.target.getAttribute('data-percent');
            this.renderer.setStyle(entry.target, 'width', `${percent}%`);
          }
        } else {
          // When the element leaves the viewport
          this.renderer.removeClass(entry.target, 'in-view');
          if (entry.target.classList.contains('skill-bar')) {
            this.renderer.setStyle(entry.target, 'width', '0%');
          }
        }
      });
    }, observerOptions);
    

    const elementsToObserve = this.el.nativeElement.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .skill-bar');
    elementsToObserve.forEach((el: HTMLElement) => observer.observe(el));

    // Smooth scrolling
    const anchors = this.el.nativeElement.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor: HTMLElement) => {
      this.renderer.listen(anchor, 'click', (e: Event) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetElement = this.el.nativeElement.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Typing animation
    const text = 'Software Engineer';
    const typingText = this.el.nativeElement.querySelector('.typing-text');
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        if (typingText) {
          typingText.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 1000);

    // Particle animation
    const createParticle = () => {
      const particle = this.renderer.createElement('div');
      this.renderer.addClass(particle, 'particle');
    
      // Random position for both top and left
      this.renderer.setStyle(particle, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(particle, 'top', `${Math.random() * 100}vh`);
    
      // Random animation duration for each particle
      this.renderer.setStyle(particle, 'animationDuration', `${Math.random() * 3 + 2}s`);
    
      const particlesContainer = this.el.nativeElement.querySelector('.particles');
      if (particlesContainer) {
        this.renderer.appendChild(particlesContainer, particle);
    
        // Remove the particle after the animation completes (5 seconds)
        setTimeout(() => this.renderer.removeChild(particlesContainer, particle), 5000);
      }
    };
    
    // Call createParticle every 20 milliseconds
    setInterval(createParticle, 1);
    
  }
}
