import React, { useState, useEffect, useRef } from 'react';
import { parseTextToStructure } from '../../lib/textToStructure';
import { VISUALIZATION_REGISTRY } from '../../lib/visualizationRegistry';
import { VizEmpty } from './primitives/VizEmpty';

export const PreviewPane: React.FC = () => {
  const [wizardState, setWizardState] = useState<any>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen to custom state change events from the Astro client script
    const handleStateChange = (e: any) => {
      setWizardState(e.detail);
    };

    window.addEventListener('viz-state-change', handleStateChange);
    
    // Trigger initial state read if available in local storage
    try {
      const saved = localStorage.getItem('illustratewords-wizard-v1');
      if (saved) {
        setWizardState(JSON.parse(saved));
      }
    } catch {}

    return () => {
      window.removeEventListener('viz-state-change', handleStateChange);
    };
  }, []);

  if (!wizardState || !wizardState.selectedTypeId) {
    return <VizEmpty message="No template selected." subMessage="Go back to Step 1 to choose a diagram type." />;
  }

  const { selectedTypeId, userContent } = wizardState;

  // Find metadata for the selected type
  const vizMeta = VISUALIZATION_REGISTRY.find(v => v.id === selectedTypeId);
  if (!vizMeta) {
    return <VizEmpty message="Template not found in registry." />;
  }

  // Parse user content or fallback to example input
  const contentToParse = userContent ? userContent.trim() : vizMeta.exampleInput;
  const parsedData = parseTextToStructure(contentToParse, vizMeta.category as any);

  // Load the matching React visualizer component
  const VisualizerComponent = vizMeta.Component;

  // Trigger SVG file download
  const handleDownloadSVG = () => {
    if (!svgContainerRef.current) return;
    const svgEl = svgContainerRef.current.querySelector('svg');
    if (!svgEl) return;

    const svgString = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `illustrate-words-${vizMeta.id}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Trigger PNG download using canvas serialization
  const handleDownloadPNG = () => {
    if (!svgContainerRef.current) return;
    const svgEl = svgContainerRef.current.querySelector('svg');
    if (!svgEl) return;

    const svgString = new XMLSerializer().serializeToString(svgEl);
    const canvas = document.createElement('canvas');
    canvas.width = vizMeta.aspect.w;
    canvas.height = vizMeta.aspect.h;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `illustrate-words-${vizMeta.id}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = url;
  };

  return (
    <div className="flex flex-col gap-6 bg-white p-6 rounded-card border-1.5 border-ink-primary shadow-hard">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-medium leading-none mb-1">Interactive Diagram Preview</h3>
          <p className="text-xs text-ink-secondary">Live rendering of your content as a crisp, scalable vector.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDownloadSVG}
            type="button"
            className="px-3 py-1.5 rounded-btn bg-cream-darker text-xs font-semibold hover:-translate-y-0.5 transition-transform"
          >
            SVG
          </button>
          <button
            onClick={handleDownloadPNG}
            type="button"
            className="px-3 py-1.5 rounded-btn bg-accent-lime text-xs font-semibold hover:-translate-y-0.5 transition-transform"
          >
            PNG
          </button>
        </div>
      </div>

      {/* Visualizer output */}
      <div ref={svgContainerRef} className="rounded-card border border-cream-darker overflow-hidden shadow-sm" style={{ aspectRatio: `${vizMeta.aspect.w}/${vizMeta.aspect.h}` }}>
        {VisualizerComponent ? (
          <VisualizerComponent data={parsedData} variant={vizMeta.id} />
        ) : (
          <VizEmpty message="Visualizer rendering template not loaded yet." />
        )}
      </div>

      {parsedData.meta.notice && (
        <div className="p-3 bg-accent-warning-soft text-accent-warning text-xs font-medium rounded-card-sm border border-accent-warning/20">
          ⚠️ {parsedData.meta.notice}
        </div>
      )}
    </div>
  );
};
