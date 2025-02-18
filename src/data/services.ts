import server from '../assets/cloud.webp';
import cybersecurity from '../assets/cybersecurity.webp';
import network from '../assets/network.webp';
import cloud from '../assets/server.webp';
import software from '../assets/software_development.webp';

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const services = [
  {
    id: 1,
    title: 'Enterprise Server Installation & Optimization',
    description:
      'We install and configure high-performance servers for businesses, ensuring optimal performance, security, and scalability. Includes setup for Windows/Linux servers, virtualization, and routine maintenance.',
    price: '₦150,000',
    image: server,
  },
  {
    id: 2,
    title: 'Advanced Cybersecurity Audit & Penetration Testing',
    description:
      'Protect your business with a full-scale security assessment, including vulnerability scanning, penetration testing, and real-time threat mitigation strategies.',
    price: '₦250,000',
    image: cybersecurity,
  },
  {
    id: 3,
    title: 'Corporate Network Setup & Troubleshooting',
    description:
      'Comprehensive network solutions including structured cabling, router and firewall configurations, bandwidth optimization, and real-time monitoring for uninterrupted business operations.',
    price: '₦200,000',
    image: network,
  },
  {
    id: 4,
    title: 'Cloud Infrastructure Migration & Deployment',
    description:
      'Seamless transition to cloud services with AWS, Azure, or Google Cloud. Includes data migration, server setup, security configurations, and user training.',
    price: '₦500,000',
    image: cloud,
  },
  {
    id: 5,
    title: 'Custom Business Software Development',
    description:
      'Tailored software solutions for inventory management, CRM, accounting automation, and business intelligence. We develop scalable applications with web and mobile integration.',
    price: '₦1,000,000',
    image: software,
  },
  //   {
  //     id: 6,
  //     title: 'IT Strategy & Digital Transformation Consulting',
  //     description:
  //       'Expert consulting to help your business adopt emerging technologies, optimize IT costs, and implement cutting-edge digital solutions for growth and efficiency.',
  //     price: '₦100,000 - ₦300,000',
  //     image: lean,
  //   },
];

// export const books = [
//   {
//     id: 1,
//     title:
//       "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
//     author: 'Eric Ries',
//     genre: 'Business/Entrepreneurship',
//     img: lean,
//     price: '₦6,599.99',
//     summary:
//       'This book presents a methodology for developing businesses and products based on the concept of validated learning, experimentation, and iterative product releases.',
//   },
//   {
//     id: 2,
//     title: 'Influence: The Psychology of Persuasion',
//     author: 'Robert B. Cialdini',
//     genre: 'Psychology/Sales',
//     img: influence,

//     price: '₦7,499.99',
//     summary:
//       "This book explores the psychology behind why people say 'yes' and how to apply these understandings in marketing, sales, and everyday life.",
//   },
//   {
//     id: 3,
//     title: 'Hooked: How to Build Habit-Forming Products',
//     author: 'Nir Eyal',
//     genre: 'Business/Marketing',
//     img: hooked,

//     price: '₦13,999.99',
//     summary:
//       "This book provides insights into the psychology of habit-forming products and offers practical advice for creating products that users can't put down.",
//   },
//   {
//     id: 4,
//     title:
//       'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
//     author: 'Gene Kim, Kevin Behr, George Spafford',
//     genre: 'Business/Technology',
//     img: phoenix,

//     price: '₦9,725.00',
//     summary:
//       "This novel tells the story of an IT manager's journey to save his company's failing IT infrastructure by applying principles of DevOps.",
//   },
//   {
//     id: 5,
//     title: 'Digital Marketing for Dummies',
//     author: 'Ryan Deiss, Russ Henneberry',
//     genre: 'Marketing/Technology',
//     img: digital,

//     price: '₦8,499.99',
//     summary:
//       'This book offers comprehensive guidance on digital marketing strategies, including SEO, content marketing, social media, email marketing, and more.',
//   },
// ];
