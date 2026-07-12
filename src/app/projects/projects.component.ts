import { Component } from '@angular/core';

interface Project {
  title: string;
  type: string;
  description: string[];
  techStack: string[];
  icon: string;
  colorClass: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Distributed ERP Infrastructure Design',
      type: 'Enterprise ERP System',
      description: [
        'Conceptualized multi-tier access rule protocols and engineered back-office transactional API endpoints.',
        'Streamlined inventory and analytical ledger tracking for corporate data pipelines, minimizing operational data round-trip lags while maintaining auditable user access paths.'
      ],
      techStack: ['Python', 'Django Framework', 'DRF', 'PostgreSQL', 'Redis', 'Angular', 'GitLab'],
      icon: 'fas fa-sitemap',
      colorClass: 'erp-project'
    },
    {
      title: 'Cloud-Native Resource Scheduler',
      type: 'Cloud-Native & Booking Portal',
      description: [
        'Developed responsive booking management visual modules connected to asynchronous transaction handlers.',
        'Engineered logic routines to prevent data scheduling overlapping and organize complex task distribution parameters.'
      ],
      techStack: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Angular', 'Bootstrap Layouts'],
      icon: 'fas fa-calendar-check',
      colorClass: 'scheduler-project'
    },
    {
      title: 'React.js Development Portfolio',
      type: 'Frontend Engineering',
      description: [
        'Developed 10+ dynamic web applications using React.js following clean coding standards and component-based architecture.',
        'Built reusable, scalable UI components, managed application state/routing, and implemented responsive, mobile-friendly designs.',
        'Integrated REST APIs for dynamic data rendering while focusing on performance optimization and user experience.'
      ],
      techStack: ['React.js', 'Redux', 'React Router', 'REST APIs', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap'],
      icon: 'fab fa-react',
      colorClass: 'react-project'
    }
  ];
}
