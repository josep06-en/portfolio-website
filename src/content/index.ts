// Projects
import { salesDashboard } from './projects/sales-dashboard';
import { apiDashboard } from './projects/api-dashboard';
import { aiQaTool } from './projects/ai-qa-tool';
import { internalTool } from './projects/internal-tool';

// Writing
import { whypythonisstillthebestchoicefordataanaly } from './writing/why-python-is-still-the-best-choice-for-data-analy';
import { thehiddencostofeasysolutions } from './writing/the-hidden-cost-of-easy-solutions';
import { firstNote } from './writing/first-note';

// Helper functions
export const getAllProjects = () => [
  salesDashboard,
  apiDashboard,
  aiQaTool,
  internalTool,
];

export const getFeaturedProjects = () => 
  getAllProjects().filter(project => project.featured);

export const getProjectBySlug = (slug: string) =>
  getAllProjects().find(project => project.slug === slug);

export const getAllWriting = () => [firstNote];

export const getWritingBySlug = (slug: string) =>
  getAllWriting().find(writing => writing.slug === slug);
