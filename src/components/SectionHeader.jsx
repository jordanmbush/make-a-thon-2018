import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({title}) => (
  <div className="flex jc-center ai-center section-header">
    {title}
  </div>
);

export default SectionHeader;
