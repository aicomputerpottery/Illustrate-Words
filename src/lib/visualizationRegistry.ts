import { CATEGORIES as RAW_CATEGORIES } from '../data/visualizations.js';
import type { CategoryMeta, VisualizationMeta } from './types';

// Central mapping of all 76 IDs to their respective React rendering component loaders.
// We will lazy-load or import components dynamically to optimize code-splitting.
export const COMPONENT_MAP: Record<string, any> = {};

// Register visualizer component helper
export function registerComponent(id: string, Component: any) {
  COMPONENT_MAP[id] = Component;
}

// Map the raw categories to our CategoryMeta type
export const CATEGORIES: CategoryMeta[] = RAW_CATEGORIES.map(cat => ({
  id: cat.id,
  name: cat.name,
  icon: cat.icon,
  iconSvg: cat.iconSvg,
  description: cat.description
}));

// Build the VISUALIZATION_REGISTRY dynamically by merging the raw JSON data
// with default metadata details (e.g. aspect ratio, maxNodes).
export const VISUALIZATION_REGISTRY: (VisualizationMeta & { Component?: any })[] = RAW_CATEGORIES.flatMap(cat =>
  cat.types.map(t => {
    let aspect = { w: 1200, h: 750 };
    if (t.id.includes('timeline') || t.id.includes('gantt') || t.id.includes('roadmap') || t.id.includes('journey')) {
      aspect = { w: 1600, h: 600 };
    } else if (t.id.includes('cycle') || t.id.includes('quadrant') || t.id.includes('radar') || t.id.includes('venn') || t.id.includes('bullseye')) {
      aspect = { w: 1000, h: 1000 };
    }
    
    // Default example inputs based on category
    let exampleInput = `SWOT analysis of coffee shop:\n- Strengths: Great foot traffic, premium beans.\n- Weaknesses: High rent, tight seating space.\n- Opportunities: Delivery apps expansion, merchandise sales.\n- Threats: Coffee chain opening nearby, rising beans cost.`;
    if (cat.id === 'mindmap') {
      exampleInput = `How to grow a business:\n- Product Quality\n  - Clean Code\n  - UI Polish\n- Marketing\n  - SEO Content\n  - Social Media\n- Customer Support\n  - Fast Responses\n  - Clear Docs`;
    } else if (cat.id === 'process' || cat.id === 'timeline') {
      exampleInput = `1. Idea Generation (validate with audience)\n2. Wireframing Layouts (Figma mocks)\n3. Frontend Coding (React + Astro)\n4. Deploy to Cloudflare (wrangler deploy)\n5. Launch on ProductHunt (engage community)`;
    } else if (cat.id === 'data') {
      exampleInput = `Quarterly Product Growth:\n- Q1: 15% increase in user retention\n- Q2: 25% increase via social campaign\n- Q3: 40% major increase via product launch\n- Q4: 10% slight decline due to seasonality`;
    } else if (cat.id === 'comparison') {
      exampleInput = `React vs Vue comparison:\n- React: High flexibility, massive ecosystem, steeper learning curve.\n- Vue: Clean template syntax, easier onboarding, slightly smaller ecosystem.`;
    }

    return {
      id: t.id,
      category: cat.id,
      subtype: t.id.split('-').pop() || 'default',
      displayName: t.name,
      description: t.description,
      bestFor: t.description,
      minNodes: 2,
      maxNodes: 60,
      supports: ['light', 'dark', 'export'],
      aspect,
      exampleInput,
      get Component() {
        return COMPONENT_MAP[t.id];
      }
    };
  })
);

export function vizByCategory(catId: string) {
  return VISUALIZATION_REGISTRY.filter(v => v.category === catId);
}

// Standard Flagship list from PART 8.1 spec
export const FLAGSHIP_VISUALIZATIONS = [
  "central-node-map",
  "linear-flowchart",
  "circular-process",
  "pros-cons-list",
  "swot-analysis",
  "iceberg-model",
  "pyramid-diagram",
  "bridge-diagram",
  "root-cause-analysis",
  "sitemap",
  "venn-diagram",
  "quadrant-chart",
  "bar-chart",
  "line-chart",
  "user-journey-map"
];
