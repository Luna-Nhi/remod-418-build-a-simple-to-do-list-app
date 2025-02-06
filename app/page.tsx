// filepath: /c:/Users/TUYET NHI/Documents/GitHub/remod-418-build-a-simple-to-do-list-app/app/page.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './context/theme-context';
import { ThemeSwitch } from './context/theme-switch';

type PageProps = {
  children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex">
        {/* Set a fixed width for the sidebar */}
        <div className="w-64"> {/* Adjust width as needed */}
          <Sidebar />
        </div>
        {/* Content area takes the remaining space */}
        <div className="flex-1 p-4">
          <div className="theme-container">
            <label htmlFor="theme-switch" className="theme-label">
              Toggle Theme:
            </label>
            <ThemeSwitch />
          </div>
          {children} {/* Render children here */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;