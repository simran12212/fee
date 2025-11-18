import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function CreateEventForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [venue, setVenue] = useState('')
  const [host, setHost] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !date || !time || !location.trim()) {
      alert('Please fill in all required fields')
      return
    }

    // New event object
    const newEvent = {
      id: Date.now().toString(),
      title: title.trim(),
      date,
      time,
      location: location.trim(),
      venue: venue.trim() || location.trim(),
      host: host.trim() || 'Anonymous',
      description: description.trim(),
    }

    // Get current events from localStorage
    const existingEvents = JSON.parse(localStorage.getItem('events')) || []

    // Add new event
    const updatedEvents = [newEvent, ...existingEvents]

    // Save back to localStorage
    localStorage.setItem('events', JSON.stringify(updatedEvents))

    alert("Event saved successfully in Local Storage!")

    // Navigate back to home
    navigate('/')
  }

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed relative py-12 px-4"
      style={{ backgroundImage: 'url(/create.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-2xl mx-auto bg-gray-800/95 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-2xl">
        <h2 className="text-4xl font-bold mb-2 text-white">Create New Event</h2>
        <p className="text-gray-300 mb-6">Share your event with the community</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* TITLE */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Event Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
              placeholder="e.g., Summer Music Festival"
            />
          </div>

          {/* DATE & TIME */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Date *</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Time *</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
              />
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Location *</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
              placeholder="e.g., Central Park"
            />
          </div>

          {/* VENUE */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Venue Details</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
              placeholder="e.g., Main Hall"
            />
          </div>

          {/* HOST */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Host Name</label>
            <input
              type="text"
              value={host}
              onChange={(e) => setHost(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
              placeholder="Your name (optional)"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Event Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white h-32"
              placeholder="Describe your event..."
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Create Event
            </button>

            <Link
              to="/"
              className="flex-1 text-center bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
