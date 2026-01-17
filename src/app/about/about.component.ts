import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  skills = [
    { name: 'Python', icon: '', useImage: true, imagePath: 'assets/python.png' },
    { name: 'Django', icon: '', useImage: true, imagePath: 'assets/django.png' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'TypeScript', icon: '', useImage: true, imagePath: 'assets/ts-icon.png' },
    { name: 'PostgreSQL', icon: '', useImage: true, imagePath: 'assets/postgres.png' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Tailwind CSS', icon: '', useImage: true, imagePath: 'assets/Tailwind CSS.png' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'MySQL', icon: '', useImage: true, imagePath: 'assets/mysql.png' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Figma', icon: '', useImage: true, imagePath: 'assets/figma.png' },
  ];
}
