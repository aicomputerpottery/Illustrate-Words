import React from 'react';
import { MindMap } from '../src/components/visualizations/mindmap/MindMap';
import { parseTextToStructure } from '../src/lib/textToStructure';

// Storybook-style demo with short, medium, and long inputs for visual validation.
export const DemoShort = () => {
  const input = `Core Value:\n- Speed\n- Quality`;
  const data = parseTextToStructure(input, 'mindmap');
  return (
    <div style={{ padding: '20px', background: '#F9F9FB', borderRadius: '8px' }}>
      <h4>Short Input (3 Nodes)</h4>
      <div style={{ border: '1px solid #E0E0E6', borderRadius: '8px', overflow: 'hidden' }}>
        <MindMap data={data} variant="central-node-map" theme="light" />
      </div>
    </div>
  );
};

export const DemoMedium = () => {
  const input = `Product Launch:\n- Engineering Tasks\n  - Bug fixing\n  - Build releases\n- Marketing Tasks\n  - Press release\n  - Social post\n- Operations\n  - Staging test`;
  const data = parseTextToStructure(input, 'mindmap');
  return (
    <div style={{ padding: '20px', background: '#F9F9FB', borderRadius: '8px', marginTop: '20px' }}>
      <h4>Medium Input (8 Nodes)</h4>
      <div style={{ border: '1px solid #E0E0E6', borderRadius: '8px', overflow: 'hidden' }}>
        <MindMap data={data} variant="central-node-map" theme="light" />
      </div>
    </div>
  );
};

export const DemoLong = () => {
  const input = `illustratewords.com upgrade:\n- Core Features\n  - Parser module\n  - React components\n  - Central registry\n- Page Integrations\n  - Generator wizard\n  - Homepage marquee\n  - Interactive gallery\n- Quality Assurance\n  - Static verification\n  - Live browser tests\n  - Edge case limits`;
  const data = parseTextToStructure(input, 'mindmap');
  return (
    <div style={{ padding: '20px', background: '#F9F9FB', borderRadius: '8px', marginTop: '20px' }}>
      <h4>Long Input (13 Nodes)</h4>
      <div style={{ border: '1px solid #E0E0E6', borderRadius: '8px', overflow: 'hidden' }}>
        <MindMap data={data} variant="central-node-map" theme="light" />
      </div>
    </div>
  );
};
