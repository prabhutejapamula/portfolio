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
  resumeImage: string = "assets/cv.png";
  linkedImage: string = "assets/linkedin.png";
  leetcodeImage: string = "assets/LeetCode.png";
  instagramImage: string = "assets/instagram.png";
  photographyImage: string = "assets/photographer.png";
  inspirationImage: string = "assets/inspiration.png";
  youtubeImage: string = "assets/youtube.png";
  emailImage: string = "assets/email.png";

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

  openLinkedIn(): void {
    window.open("https://www.linkedin.com/in/prabhu-teja-pamula/", '_blank');
  }

  openLeetcode(): void {
    window.open("https://leetcode.com/u/prabhutejapamula/", '_blank');
  }

  openInstagram(): void {
    window.open("https://www.instagram.com/prabhu.tejaa/", '_blank');
  }

  openPhotography(): void {
    window.open("https://www.instagram.com/eye.37._/", '_blank');
  }

  openArtExploration(): void {
    window.open("https://www.instagram.com/xplore______/", '_blank');
  }

  openYoutube(): void {
    window.open("https://www.youtube.com/@anotherhuman137/", '_blank');
  }

  sendEmail() {
    const recipient = "prabhutejapamula@yahoo.com";
    const subject = "From Portfolio: Let's Connect!";
    const body = "Hello Prabhu Teja Pamula,";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  openCredits(){
    
  }
  
}
