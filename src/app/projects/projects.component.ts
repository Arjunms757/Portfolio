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
      title: 'ERP / POS Management System',
      type: 'Enterprise ERP & POS',
      description: [
        'Architected comprehensive inventory tracking, sales processing, purchase management, and accounting workflows with multi-tier access control.',
        'Engineered high-throughput RESTful backend APIs in Django and DRF, backed by PostgreSQL database schemas optimized for high-volume transactions.'
      ],
      techStack: ['Python', 'Django', 'DRF', 'Angular', 'PostgreSQL'],
      icon: 'fas fa-boxes-stacked',
      colorClass: 'erp-project'
    },
    {
      title: 'ERP Mobile Application / CRM',
      type: 'Mobile ERP & CRM',
      description: [
        'Developed mobile ERP/CRM workflows handling sales lead enquiries, customer relationship management, and multi-level approval hierarchies.',
        'Connected cross-platform Ionic mobile interfaces to performant Django REST API endpoints with robust role-based access control (RBAC).'
      ],
      techStack: ['Ionic', 'Django REST APIs', 'PostgreSQL', 'Python', 'RBAC'],
      icon: 'fas fa-mobile-screen-button',
      colorClass: 'crm-project'
    },
    {
      title: 'Booking Portal System',
      type: 'Booking & Administration',
      description: [
        'Built a streamlined customer-facing booking platform accompanied by a dedicated back-office administrative management dashboard.',
        'Implemented conflict-free scheduling logic, automated booking confirmation pipelines, and operational reporting interfaces.'
      ],
      techStack: ['Django', 'DRF', 'Angular', 'PostgreSQL', 'RESTful APIs'],
      icon: 'fas fa-calendar-check',
      colorClass: 'scheduler-project'
    },
    {
      title: 'Government CMS Platform',
      type: 'Government & Public Sector CMS',
      description: [
        'Architected a secure Content Management System (CMS) for government operations, enabling multi-tier editorial workflows, citizen information delivery, and document publication.',
        'Engineered high-security RESTful backend APIs in Django with PostgreSQL, integrated with an intuitive, accessible Angular and TypeScript administrative portal.'
      ],
      techStack: ['Python', 'Django', 'Angular', 'TypeScript', 'PostgreSQL', 'RESTful APIs'],
      icon: 'fas fa-landmark',
      colorClass: 'gov-project'
    },
    {
      title: 'HRMS System',
      type: 'Human Resource Management',
      description: [
        'Delivered end-to-end human resource management solutions covering employee lifecycle records, automated payroll calculation, and company policies.',
        'Implemented candidate recruitment pipelines and an internal job portal workflow with automated document and status tracking.'
      ],
      techStack: ['Django', 'DRF', 'Angular', 'PostgreSQL', 'Payroll Processing'],
      icon: 'fas fa-users-gear',
      colorClass: 'hrms-project'
    },
    {
      title: 'Dynamic Websites',
      type: 'Frontend Engineering & Lead Gen',
      description: [
        'Engineered responsive, high-converting business websites focused on business development, customer engagement, and lead generation.',
        'Built modular, reusable UI components using ReactJS with mobile-first styling, cross-browser uniformity, and optimized presentation speeds.'
      ],
      techStack: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive UI'],
      icon: 'fab fa-react',
      colorClass: 'react-project'
    }
  ];
}
