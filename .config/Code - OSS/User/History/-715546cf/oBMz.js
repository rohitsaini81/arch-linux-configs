import React from 'react';

const categories = [
  { name: 'Windows', icon: 'windows' },
  { name: 'Mac', icon: 'apple' },
  { name: 'Android Apps', icon: 'android' },
  { name: 'Android Games', icon: 'android' },
  { name: 'PC Games', icon: 'gamepad' },
  { name: 'Ebooks', icon: 'book' },
  { name: 'Video Courses', icon: 'video-camera' },
];

const Icon = ({ name }) => {
  switch (name) {
    case 'windows':
      return <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 3v7.5h10.5v-7.5h-10.5zm0 10.5v7.5h10.5v-7.5h-10.5zm12 0v7.5h9v-7.5h-9zm0-13.5v7.5h9v-7.5h-9z"/></svg>;
    case 'apple':
      return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 0c-1.1.1-2.4.8-3 1.6-1 1.3-1.9 3.5-1.1 5.5 1 2.5 3.3 3.7 5.4 3.2 0-3-1.2-5.7-1.3-5.7zM11 6c-4.5 0-8 3.8-8 8.6 0 5.9 4.5 9.9 9 9.9 5.5 0 8-3.8 8-8.6 0-5.9-4.5-9.9-9-9.9z"/></svg>;
    case 'android':
      return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.6 8.2l1.3-2.2-1.6-.9-1.3 2.1-3.3-3.3-3.2 3.3-1.3-2.1-1.6.9 1.3 2.2c-2.3.9-3.9 3.2-3.9 6v3h18v-3c.1-2.9-1.5-5.1-3.8-6z"/></svg>;
    case 'gamepad':
      return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 17.7c-3 0-5-3.3-5-7.2v-3.3h18v3.3c0 3.9-2 7.2-5 7.2-1.5 0-3-2.3-4-2.3-1 0-2 2.3-3 2.3z"/></svg>;
    case 'book':
      return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 2h-14a2 2 0 00-2 2v16a1 1 0 001 1h15a1 1 0 001-1v-16a2 2 0 00-2-2z"/></svg>;
    case 'video-camera':
      return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 7v10l4-5-4-5zM1 5h14a2 2 0 012 2v10a2 2 0 01-2 2h-14a1 1 0 01-1-1v-12a1 1 0 011-1z"/></svg>;
    default:
      return null;
  }
};

export default function Hero({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="bg-white p-4 border-b border-gray-200">
      <div className="flex space-x-1 overflow-x-auto">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border ${
              selectedCategory === cat.name
                ? 'bg-white shadow-inner font-semibold'
                : 'bg-gray-50 hover:bg-gray-100'
            } rounded-md border-gray-300`}
          >
            <Icon name={cat.icon} />
            <span>{cat.name}</span>
            {(cat.name === 'Ebooks' || cat.name === 'Video Courses') && (
              <span className="ml-1 text-yellow-500 text-xs font-bold">👑</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
