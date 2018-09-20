import React from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css';

const SideBar = ({selectedId, }) => {
  return (
    <div className="sidebar flex-col jc-space-around">
      <div className={`menu-item ${selectedId === 0 && 'selected'}`}>Experiments</div>
      <div className={`menu-item ${selectedId === 1 && 'selected'}`}>Tracking Experiments</div>
      <div className={`menu-item ${selectedId === 2 && 'selected'}`}>Datasets</div>
      <div className={`menu-item ${selectedId === 3 && 'selected'}`}>Environment Setup</div>
    </div>
  )
};

export default SideBar;