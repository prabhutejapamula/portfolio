import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  imports: [CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent implements OnInit {
  colors = [
    '#ff00b3', '#00ffcc', '#ffcc00', '#ff0066', '#cc00ff',
    '#ff0033', '#ccff00', '#66ccff', '#ff6600', '#00ccff',
    '#ffcc99', '#ff3333', '#33ff66', '#9966cc', '#ff3399',
    '#6699cc', '#ff6666', '#66ff33', '#3399ff', '#ff99cc',
    '#ff0033', '#cc33ff', '#ff6600', '#33ccff', '#66ffcc',
    '#996699', '#ffcc33', '#00ff33', '#ff3300', '#ff0099',
    '#0099cc', '#ff3333', '#00cc33', '#33cc99', '#ff9933',
    '#cc99cc', '#66ff99', '#ff3399', '#cc0066', '#ff66cc',
    '#cc66cc', '#6600ff', '#33cc33', '#ff6600', '#ff0000',
    '#3399cc', '#00ccff', '#ccff66', '#ff66ff', '#ff0033',
  ];
  resumeImage: string = "assets/cv.png";
  linkedImage: string = "assets/linkedin.png";
  leetcodeImage: string = "assets/LeetCode.png";
  instagramImage: string = "assets/instagram.png";
  photographyImage: string = "assets/photographer.png";
  inspirationImage: string = "assets/inspiration.png";
  youtubeImage: string = "assets/youtube.png";
  emailImage: string = "assets/email.png";
  isModalOpen: boolean = false;

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

  openCredits() {
    this.isModalOpen = true;
  }
  
  closeCredits() {
    this.isModalOpen = false;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isModalOpen) {
      this.closeCredits();
    }
  }
  
}
