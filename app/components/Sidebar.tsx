// app/components/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Shadcn Admin</h2>
        <p>Vite + ShadcnUI</p>
      </div>
      <ul className="sidebar-menu">
        <li><a href="todo">Todo List</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">Apps</a></li>
        <li><a href="#">Chats <span className="badge">3</span></a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Auth</a></li>
        <li><a href="#">Errors</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Help Center</a></li>
      </ul>
      <div className="sidebar-footer">
        <p>satnaing</p>
        <p>satnaingdev@gmail.com</p>
      </div>
    </div>
  );
};

export default Sidebar;