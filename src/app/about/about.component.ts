import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    { name: 'Python', icon: '', useImage: true, imagePath: 'assets/python.png' },
    { name: 'TypeScript', icon: '', useImage: true, imagePath: 'assets/ts-icon.png' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'Django', icon: '', useImage: true, imagePath: 'assets/django.png' },
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Figma', icon: '', useImage: true, imagePath: 'assets/figma.png' },
    { name: 'PostgreSQL', icon: '', useImage: true, imagePath: 'assets/postgres.png' },
    { name: 'MySQL', icon: '', useImage: true, imagePath: 'assets/mysql.png' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];
}
