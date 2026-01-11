import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Travidux Technologies Pvt Ltd',
      date: 'Nov 2023 - Present',
      description: [
        'Architected and deployed scalable ERP solutions governing procurement, inventory, and sales workflows for retail giants.',
        'Engineered high-performance RESTful APIs and integrated secure payment gateways, boosting transaction reliability.',
        'Developed a cruise booking portal with complex state management, ensuring a seamless user booking experience.',
        'Optimized database queries and backend logic in Python/Django, reducing API response times significantly.'
      ]
    },
    {
      title: 'Front-End Developer Intern',
      company: 'NTH INDEX SOFTWARE SOLUTIONS LLP',
      date: 'Jan 2023 - Aug 2023',
      description: [
        'Transformed high-fidelity Figma designs into pixel-perfect React.js components with 100% responsiveness.',
        'Collaborated with backend teams to integrate APIs and resolve cross-origin issues.',
        'Implemented modern UI/UX principles, enhancing user engagement and accessibility standards.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'RIGHT SOFT OPTIONS',
      date: 'Jan 2022 - Aug 2022',
      description: [
        'Developed robust Python scripts for data processing and backend automation.',
        'Gained hands-on proficiency in Flask and Django frameworks for rapid web application development.',
        'Contributed to the development of reusable code libraries used across multiple projects.'
      ]
    }
  ];
}
