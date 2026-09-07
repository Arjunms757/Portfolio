import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loading = true;
  isFadingOut = false;
  progress = 0;
  statusText = 'Booting environment...';

  skills = [
    { name: 'Python', icon: 'assets/python.svg', threshold: 16, color: '#ffd43b', glow: 'rgba(255, 212, 59, 0.35)' },
    { name: 'Angular', icon: 'assets/angular.svg', threshold: 32, color: '#dd0031', glow: 'rgba(221, 0, 49, 0.35)' },
    { name: 'React', icon: 'assets/react.svg', threshold: 48, color: '#61dafb', glow: 'rgba(97, 218, 251, 0.35)' },
    { name: 'PostgreSQL', icon: 'assets/postgresql.svg', threshold: 64, color: '#336791', glow: 'rgba(51, 103, 145, 0.45)' },
    { name: 'Git', icon: 'assets/git.svg', threshold: 80, color: '#f05032', glow: 'rgba(240, 80, 50, 0.35)' },
    { name: 'AWS', icon: 'assets/aws.svg', threshold: 92, color: '#ff9900', glow: 'rgba(255, 153, 0, 0.35)' }
  ];

  private progressInterval: any;

  ngOnInit(): void {
    const totalDuration = 2500; // 3.0 seconds
    const intervalTime = 40;
    const increment = 100 / (totalDuration / intervalTime);

    this.progressInterval = setInterval(() => {
      this.progress = Math.min(100, Math.round(this.progress + increment));

      if (this.progress < 16) {
        this.statusText = 'Initializing developer runtime...';
      } else if (this.progress < 32) {
        this.statusText = 'Loading Python runtime...';
      } else if (this.progress < 48) {
        this.statusText = 'Loading Angular framework...';
      } else if (this.progress < 64) {
        this.statusText = 'Loading React ecosystem...';
      } else if (this.progress < 80) {
        this.statusText = 'Connecting PostgreSQL database...';
      } else if (this.progress < 92) {
        this.statusText = 'Configuring Git version control...';
      } else if (this.progress < 100) {
        this.statusText = 'Mounting AWS cloud infrastructure...';
      } else {
        this.statusText = 'Full stack ecosystem ready!';
        clearInterval(this.progressInterval);

        // Smooth transition out
        setTimeout(() => {
          this.isFadingOut = true;
          setTimeout(() => {
            this.loading = false;
            window.scrollTo(0, 0);
          }, 450);
        }, 200);
      }
    }, intervalTime);
  }

  ngOnDestroy(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }
}

