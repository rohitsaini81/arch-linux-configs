import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-3">
        <button className="bg-teal-700 text-white p-2 rounded-md">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h3l.918 2.398a1 1 0 00.839.602l4.36.654a1 1 0 01.781.555l1.815 3.63a1 1 0 01-.049 1.015L13 13a1 1 0 010 1.414l3.536 3.536a1 1 0 010 1.414l-1.414 1.414a2 2 0 01-2.828 0l-.586-.586" /></svg>
        </button>
        <input
          type="text"
          placeholder="Search products here..."
          className="border rounded-md p-2 w-80 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
      </div>
      <button className="flex items-center space-x-1 text-gray-800 hover:text-teal-700 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
        <span className="text-sm font-semibold ml-1">Categories</span>
      </button>
    </nav>
  );
}
