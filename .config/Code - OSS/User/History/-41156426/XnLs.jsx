import React from 'react';

const StarRating = ({ count }) => {
  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {[...Array(5).keys()].map((idx) => (
        <svg
          key={idx}
          className={`w-4 h-4 ${idx < count ? 'fill-current' : 'stroke-current text-yellow-300'}`}
          fill={idx < count ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default function Applications({ windowsApps, pcGames }) {
  if(!windowsApps){
    return (<h1>Loading...</h1>)
  }
  return (
    <div className="flex max-w-7xl mx-auto mt-6 gap-6 px-6">
      {/* Left: Windows Apps */}
      <div className="flex-1 bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="font-semibold text-lg text-gray-800 border-l-4 border-teal-600 pl-2">Windows</h2>
          <button className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gray-100">View All</button>
        </div>
        {windowsApps.map((app, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-3 rounded-md bg-gray-50 shadow-sm relative ${
              app.featured ? 'border-2 border-yellow-400' : ''
            }`}
          >
            {app.featured && (
              <div className="absolute top-0 left-0 bg-yellow-400 text-white text-xs font-bold px-1 rounded-br-md">
                Featured
              </div>
            )}
            <div className="flex items-center space-x-3">
              <img
                src={app.icon}
                alt={app.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800 text-md truncate w-96">{app.title}</h3>
                <p className="text-sm text-gray-500 truncate w-96">{app.description}</p>
                <p className="text-teal-700 font-semibold text-sm mt-1">{app.category}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex flex-col items-center text-gray-600">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-5 h-5"
                    fill="#0078d7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 3v18h10V3H2zm12 0v10h8v-10h-8z" />
                  </svg>
                  <span>{app.os}</span>
                </div>
                <small className="text-gray-500">{app.downloads.toLocaleString()}</small>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-gray-700">Reputation</span>
                <StarRating count={app.reputation} />
              </div>
              <div className="text-lg font-semibold text-gray-900">{app.size}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Pc Games Sidebar */}
      <aside className="w-80 bg-gray-50 rounded-lg p-5 shadow">
        <h2 className="font-semibold text-lg mb-4 border-b border-gray-300 pb-2">Pc Games</h2>
        <ul className="space-y-4">
          {pcGames.map((game, idx) => (
            <li key={idx} className="flex space-x-3 items-center">
              <img
                src={game.img}
                alt={game.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold text-sm">{game.title}</h4>
                <p className="text-teal-700 text-xs">{game.category}</p>
                <p className="text-sm font-semibold text-gray-700">{game.size}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
