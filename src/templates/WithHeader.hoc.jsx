import React, { Component } from 'react';
import logo from '../assets/logo.png';
import './WithHeader.hoc.css';

const withHeader = (hasLoginInfo) => (ComposedComponent) => (
  class WithHeader extends Component {

    render() {
      return (
        <div className="header">
          <div className="relative flex jc-flex-end">
            {hasLoginInfo && (
              <div className="login-info">
                <span>Login User:</span>
                <span>Test User</span>
              </div>
            )}
            <img className="absolute site-logo" src={logo} alt="logo" />
          </div>
          <ComposedComponent />
        </div>
      );
    }
  }
);

export default withHeader;
