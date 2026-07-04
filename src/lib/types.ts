export type IWStructure = {
  kind:
    | "hierarchy"
    | "sequence"
    | "cycle"
    | "comparison"
    | "causal"
    | "partition"
    | "unstructured"
    | "problem_solution"
    | "timeline";
  title: string;               // the diagram's overall title
  subtitle?: string;            // optional secondary line
  nodes: IWNode[];
  edges: IWEdge[];
  meta: {
    detectedLanguage: string;    // ISO code, for future i18n
    confidence: number;          // 0..1
    sourceCharCount: number;
    notice?: string;
    overflow?: IWNode[];
  };
};

export type IWNode = {
  id: string;                    // stable, hashed from label if not otherwise given
  label: string;                 // the user's text, unchanged
  role?: "primary" | "positive" | "negative" | "warning" | "neutral";
  icon?: string;                 // lucide name, e.g., "Lightbulb"
  weight?: 1 | 2 | 3 | 4 | 5;    // for sizing when a viz uses weights
  group?: string;                // for partitions / clusters
  depth?: number;                // for hierarchies (root = 0)
  order?: number;                // for sequences
  meta?: Record<string, string>; // for viz-specific extras (e.g., date, phase)
};

export type IWEdge = {
  from: string;                  // node id
  to: string;                    // node id
  type: "parent-child" | "sequence" | "cycle-next" | "causes" | "contradicts" | "supports" | "related";
  label?: string;
  role?: "primary" | "positive" | "negative" | "warning" | "neutral";
};

export type VisualizationMeta = {
  id: string;
  category: string;
  subtype: string;
  displayName: string;
  description: string;
  bestFor: string;
  minNodes: number;
  maxNodes: number;
  supports: string[];
  aspect: { w: number; h: number };
  exampleInput: string;
};

export type CategoryMeta = {
  id: string;
  name: string;
  icon?: string;
  iconSvg?: string;
  description: string;
};
