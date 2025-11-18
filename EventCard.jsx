import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      academic: 'bg-blue-500',
      social: 'bg-green-500',
      sports: 'bg-red-500',
      workshops: 'bg-yellow-500',
      arts: 'bg-pink-500',
      career: 'bg-indigo-500',
      volunteering: 'bg-teal-500',
      festival: 'bg-orange-500',
      debate: 'bg-purple-500',
      tech: 'bg-cyan-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const getCategoryName = (category) => {
    const names = {
      academic: 'Academic',
      social: 'Social',
      sports: 'Sports',
      workshops: 'Workshops',
      arts: 'Arts & Culture',
      career: 'Career',
      volunteering: 'Volunteering',
      festival: 'Festival',
      debate: 'Debate',
      tech: 'Tech'
    };
    return names[category] || category;
  };

  return (
    <div className="event-card">
      <div className="text-sm text-white bg-gray-700 px-3 py-1 absolute top-2 right-2 rounded-full">
        {formatDate(event.date)}
      </div>
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className={`${getCategoryColor(event.category)} text-white text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block`}>
          {getCategoryName(event.category)}
        </span>
        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
        <div className="flex flex-col space-y-2 mb-4">
          <span className="text-gray-400 text-sm flex items-center">
            <i className="fas fa-clock mr-2"></i>
            {event.time}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            {event.location}
          </span>
        </div>
        <Link to="/event/1" className="btn-primary text-sm inline-block text-center w-full">
          View More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;