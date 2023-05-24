export interface ProjectInt {
  name: string;
  url: string;
  githubUrl: string | null;
  thumbnail: string;
  features: string[];
}

export const projects: ProjectInt[] = [
  {name: 'Scales Buddy',
  url: 'https://scalesbuddy.com',
  githubUrl: 'https://github.com/cguidog/scalesbuddy',
  thumbnail: '',
  features: ['Learn the scales and notes on the fretboard.', 'Built with TypeScript, ReactJS, NextJS and Tailwinds CSS.', 'Hosted on Vercel.', 'Uses S3 and Cloudfront from AWS.'],
  },
  {name: 'Apply to Vet School',
  url: 'https://applytovetschool.org',
  githubUrl: null,
  thumbnail: '',
  features: ['Online Vet Schools directory.', 'Headless Wordpress site built with ReactJS, NextJS, GraphQL and Apollo.', 'To explore the site, choose "AAVMC Member" and enter "Demo" as the institution name.'],
  },
  {name: 'Ara History Untold',
  url: 'https://arahistoryuntold.com',
  githubUrl: null,
  thumbnail: '',
  features: ['Official website for the Ara: History Untold game from Oxide and Xbox Game Studios', 'Built with Wordpress using Sage starter theme.'],
  },
  {name: 'Grants Intelligence Service',
  url: 'https://grantsintelligenceservice.com',
  githubUrl: null,
  thumbnail: '',
  features: ['Subscription-based catalog of documents related to grants for higher education institutions.', 'Built with Wordpress.', 'E-commerce integration.', 'Secured user-based document viewer.'],
  },
];