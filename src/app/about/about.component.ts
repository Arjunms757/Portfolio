import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
  useImage?: boolean;
  imagePath?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Systems',
      icon: 'fas fa-terminal',
      skills: [
        { name: 'Python', useImage: true, imagePath: 'assets/python.png' },
        { name: 'TypeScript', useImage: true, imagePath: 'assets/ts-icon.png' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'Linux/Unix', icon: 'fab fa-linux' }
      ]
    },
    {
      title: 'Backend Architecture',
      icon: 'fas fa-server',
      skills: [
        { name: 'Django', useImage: true, imagePath: 'assets/django.png' },
        { name: 'Django REST Framework', icon: 'fas fa-cogs' },
        { name: 'Flask', icon: 'fas fa-flask' },
        { name: 'Celery Task Queues', icon: 'fas fa-tasks' },
        { name: 'RESTful API Design', icon: 'fas fa-network-wired' }
      ]
    },
    {
      title: 'Frontend Engineering',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Tailwind CSS', useImage: true, imagePath: 'assets/Tailwind CSS.png' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
        { name: 'Figma', useImage: true, imagePath: 'assets/figma.png' }
      ]
    },
    {
      title: 'Data Management',
      icon: 'fas fa-hdd',
      skills: [
        { name: 'PostgreSQL', useImage: true, imagePath: 'assets/postgres.png' },
        { name: 'Redis Caching', icon: 'fas fa-bolt' },
        { name: 'MySQL', useImage: true, imagePath: 'assets/mysql.png' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'AWS Cloud (EC2)', icon: 'fab fa-aws' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'CI/CD (GitLab)', icon: 'fab fa-gitlab' }
      ]
    },
    {
      title: 'Methodologies & Security',
      icon: 'fas fa-shield-alt',
      skills: [
        { name: 'Agile/Scrum', icon: 'fas fa-users' },
        { name: 'Sprint Planning', icon: 'fas fa-calendar-alt' },
        { name: 'Code Reviews', icon: 'fas fa-clipboard-check' },
        { name: 'RBAC Security', icon: 'fas fa-user-shield' }
      ]
    }
  ];
}
