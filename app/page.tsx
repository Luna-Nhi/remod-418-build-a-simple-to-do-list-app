"use client";

// app/page.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import './globals.css';
import { ThemeProvider } from './context/theme-context';
import { ThemeSwitch } from './context/theme-switch';

const Page: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="main-layout">
        <div className="content">
          <div className="theme-container al">
            <label htmlFor="theme-switch" className="theme-label">
              Toggle Theme:
            </label>
            <ThemeSwitch />
          </div>
          {/* Other content can go here */}
        </div>
        <Sidebar />
      </div>
    </ThemeProvider>
  );
};

export default Page;