import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  imports: [],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent implements OnInit {
  colors = ['#ff00b3', '#00ffcc', '#ffcc00', '#ff0066', '#cc00ff'];

  ngOnInit() {
    this.applyGlowingTextEffect();
  }

  applyGlowingTextEffect(): void {
    const glowingText = document.getElementById('glowing-text');
    const text = glowingText?.innerText || '';
    glowingText!.innerHTML = '';
    text.split('').forEach(letter => {
      const span = document.createElement('span');
      span.innerText = letter;
      glowingText!.appendChild(span);
    });
    const spans = glowingText!.querySelectorAll('span');
    const changeLetterColors = () => {
      spans.forEach(span => {
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        span.style.color = randomColor;
      });
    };
    changeLetterColors();
    setInterval(changeLetterColors, 500);
  }


  openResume(): void {
    window.open('assets/PrabhuTejaPamula.pdf', '_blank');
  }
  
}
