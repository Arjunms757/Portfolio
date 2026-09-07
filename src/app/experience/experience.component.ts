import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      title: 'Project Delivery Engineer (PDE)',
      company: 'Travidux Technologies Pvt. Ltd.',
      date: 'Jan 2026 - Present',
      description: [
        'Spearheaded the deployment of 7 complex enterprise systems, supervising end-to-end product life cycles from initial resource scope to final cloud execution.',
        'Collaborated directly with corporate clients to analyze target technical requirements, translating operational problem statements into structured backend designs.',
        'Oversaw software delivery lifecycles by structuring feature timelines, managing sprint workload allocation, and tracking milestones using Agile metrics.',
        'Enforced high-quality code metrics by leading weekly quality audits, verifying software build stability and cross-layer data encryption rules.',
        'Provided clear technical leadership to a cross-functional squad of developers, removing infrastructure roadblocks and optimizing weekly velocity parameters.'
      ],
      tags: ['AWS EC2', 'System Deployment', 'Agile/Scrum', 'Team Leadership', 'Security Rules']
    },
    {
      title: 'Software Developer',
      company: 'Travidux Technologies Pvt. Ltd.',
      date: 'Nov 2023 - Dec 2025',
      description: [
        'Architected full-stack enterprise portals scaled for 50+ discrete operational branches, optimizing process automated routines to trim system latency metrics by 30%.',
        'Engineered, validated, and documented 75+ internal RESTful web services using Python, securely processing 5,000+ monthly financial network payloads.',
        'Optimized relational PostgreSQL data models using optimized index strategies and managed an independent memory layer via Redis to boost query speeds by 40%.',
        'Provisioned web servers on AWS cloud infrastructure, defining scalable environment parameters and reducing runtime post-launch configuration friction by 15%.'
      ],
      tags: ['Python', 'Django', 'Angular', 'PostgreSQL', 'Redis Caching', 'AWS Cloud', 'REST APIs']
    },
    {
      title: 'Front-End Developer',
      company: 'NTH Index Software Solutions LLP',
      date: 'Jan 2023 - Aug 2023',
      description: [
        'Programmed interactive client-facing screens utilizing React.js, producing a 20% elevation in baseline page loading presentation speed metrics.',
        'Transformed 40 layout wireframes into reusable, modular code blocks, guaranteeing cross-browser layout presentation uniformity.',
        'Isolated and debugged 50 layout parsing flaws, ensuring layout render accuracy across mobile and desktop interfaces.'
      ],
      tags: ['React.js', 'Bootstrap', 'Responsive UI', 'Figma Prototyping', 'Debugging']
    },
    {
      title: 'Software Developer Intern',
      company: 'Right Soft Options',
      date: 'Jan 2022 - Aug 2022',
      description: [
        'Built 3 standalone evaluation sandboxes utilizing Flask frameworks, coordinating feedback loops with a target group of 50 active beta testers.',
        'Constructed modular web components to wrap application logic, decreasing redundant functional segments by 25%.'
      ],
      tags: ['Python', 'Flask', 'Django', 'Sandbox Testing', 'Web Components']
    }
  ];
}
