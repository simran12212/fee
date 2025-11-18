import React from 'react'
import { Link } from 'react-router-dom'
import events from '../data/events'

export default function EventList({ events: dynamicEvents }) {
  const displayEvents = dynamicEvents || events;

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-white">Upcoming Events</h2>
            <p className="mt-2 text-gray-200">Browse events and click to view details.</p>
          </div>
          <Link
            to="/create"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Create Event
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayEvents.map((e) => (
            <article key={e.id} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-1 text-white">{e.title}</h3>
              <div className="text-sm text-gray-300 mb-3">{e.date} • {e.time} • {e.location}</div>
              <p className="text-gray-200 mb-4">{e.description}</p>
              <div className="flex items-center justify-between">
                <Link to={`/event/${e.id}`} className="text-sm text-indigo-300 hover:text-indigo-100 font-semibold">View Details</Link>
                <button className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded transition-all">Interested</button>
              </div>
            </article>
          ))}
        </div>

        {displayEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300">No events found. <Link to="/create" className="text-purple-300 hover:text-purple-100 font-semibold">Create one</Link>!</p>
          </div>
        )}
      </div>
    </div>
  )
}

