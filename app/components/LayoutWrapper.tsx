// app/layout-wrapper.tsx
import React from 'react';
import Page from '../page'; // Adjust import based on your structure

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Page>
      {children} {/* Pass children to the Page component */}
    </Page>
  );
};

export default LayoutWrapper;