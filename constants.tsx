
import { Project, Skill, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NexGen E-Commerce",
    description: "A high-performance storefront with real-time inventory and Stripe integration.",
    image: "https://picsum.photos/seed/nexgen/800/600",
    tags: ["React", "Node.js", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking with interactive charts and alerts.",
    image: "https://picsum.photos/seed/crypto/800/600",
    tags: ["React", "Recharts", "CoinGecko API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "AI Image Studio",
    description: "DALL-E powered image generation platform with community sharing.",
    image: "https://picsum.photos/seed/ai/800/600",
    tags: ["Next.js", "OpenAI", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "TaskFlow Manager",
    description: "A Kanban-style project management tool with drag-and-drop features.",
    image: "https://picsum.photos/seed/task/800/600",
    tags: ["React", "Firebase", "DnD"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at InnovateX",
    content: "Alex is an exceptional developer. His attention to detail and ability to solve complex problems is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    content: "The best experience I've had working with a frontend engineer. The site is fast, responsive, and beautiful.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  }
];
