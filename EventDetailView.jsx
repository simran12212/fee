import React from 'react'
import { useParams, Link } from 'react-router-dom'
import events from '../data/events'

export default function EventDetailView() {
  const { id } = useParams()
  const event = events.find(e => e.id === id)

  if (!event) {
    return (
      <main className="p-8">
        <h2 className="text-2xl font-semibold">Event Not Found</h2>
        <Link to="/" className="mt-4 text-indigo-300">← Back to Events</Link>
      </main>
    )
  }

  return (
    <main className="p-8">
      <Link to="/" className="text-indigo-300 mb-4 block">← Back to Events</Link>
      
      <div className="max-w-2xl bg-gray-800 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase">Date</h3>
            <p className="text-xl text-white mt-1">{event.date}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase">Time</h3>
            <p className="text-xl text-white mt-1">{event.time}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase">Venue</h3>
            <p className="text-xl text-white mt-1">{event.venue}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase">Host</h3>
            <p className="text-xl text-white mt-1">{event.host}</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 uppercase">About</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">{event.description}</p>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            to={`/register/${id}`}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Join Event
          </Link>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold">
            Share
          </button>
        </div>
      </div>
    </main>
  )
}