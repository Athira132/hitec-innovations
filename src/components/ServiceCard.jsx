import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Cpu, Shield, Settings, ArrowRight, Sparkles } from 'lucide-react';

const iconMap = {
  Cloud: Cloud,
  Cpu: Cpu,
  Shield: Shield,
  Settings: Settings
};

export default function ServiceCard({ id, title, shortDesc, icon }) {
  const IconComponent = iconMap[icon] || Sparkles;

  return (
    <div className="premium-card">
      <div className="card-icon-wrapper">
        <IconComponent size={24} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{shortDesc}</p>
      <Link to={`/services/${id}`} className="btn-text" style={{ marginTop: 'auto' }}>
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
