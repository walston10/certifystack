import React from 'react';
import { FileText, Download } from 'lucide-react';
import './ResourcesLibrary.css';

const RESOURCES = [
  { id: 1, title: 'Port Numbers Cheat Sheet', category: 'Reference', size: '2 MB', filename: 'port-numbers-cheat-sheet.pdf' },
  { id: 2, title: 'Subnet Mask Reference', category: 'Reference', size: '1 MB', filename: 'subnet-mask-reference.pdf' },
  { id: 3, title: 'VLSM Quick Guide', category: 'Guide', size: '3 MB', filename: 'vlsm-quick-guide.pdf' },
  { id: 4, title: 'OSI Model Poster', category: 'Visual', size: '5 MB', filename: 'osi-model-poster.pdf' },
  { id: 5, title: 'Cable Types & Speeds', category: 'Reference', size: '2 MB', filename: 'cable-types-speeds.pdf' },
  { id: 6, title: 'Troubleshooting Flowchart', category: 'Guide', size: '4 MB', filename: 'troubleshooting-flowchart.pdf' }
];

function ResourcesLibrary() {
  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/resources/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resources-library">
      <div className="resources-header">
        <FileText size={48} className="header-icon" />
        <div>
          <h1>Resource Library</h1>
          <p>Quick reference guides and study materials</p>
        </div>
      </div>

      <div className="resources-grid">
        {RESOURCES.map(resource => (
          <div key={resource.id} className="resource-card">
            <div className="resource-icon">
              <FileText size={32} />
            </div>
            <h3>{resource.title}</h3>
            <div className="resource-meta">
              <span className="resource-category">{resource.category}</span>
              <span className="resource-size">{resource.size}</span>
            </div>
            <button
              className="resource-download-btn"
              onClick={() => handleDownload(resource.filename)}
            >
              <Download size={16} />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>

      <div className="download-all-section">
        <button className="btn-download-all">
          <Download size={20} />
          <span>Download All as PDF Bundle</span>
        </button>
      </div>
    </div>
  );
}

export default ResourcesLibrary;
