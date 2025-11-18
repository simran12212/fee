const events = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    date: '2024-12-15',
    time: '09:00 AM',
    location: 'Rockfeller Block',
    venue: 'Rockfeller Block - Main Auditorium',
    host: 'Tech Club',
    description: 'A comprehensive conference covering latest trends in technology and innovation.'
  },
  {
    id: '2',
    title: 'Cultural Fest',
    date: '2024-12-20',
    time: '05:00 PM',
    location: 'Edison Block',
    venue: 'Edison Block - Ground Floor',
    host: 'Cultural Committee',
    description: 'Celebrate diverse cultures through music, dance, and food.'
  },
  {
    id: '3',
    title: 'Sports Day',
    date: '2024-12-22',
    time: '07:00 AM',
    location: 'Turing Block',
    venue: 'Turing Block - Sports Ground',
    host: 'Sports Department',
    description: 'Annual sports competition featuring various athletic events.'
  },
  {
    id: '4',
    title: 'Hackathon Challenge',
    date: '2024-12-25',
    time: '10:00 AM',
    location: 'Martin Luther Block',
    venue: 'Martin Luther Block - Computer Lab',
    host: 'Developer Society',
    description: '24-hour coding marathon with exciting prizes and networking opportunities.'
  },
  {
    id: '5',
    title: 'Design Workshop',
    date: '2024-12-28',
    time: '02:00 PM',
    location: 'Martin Luther Block',
    venue: 'Martin Luther Block - Design Studio',
    host: 'Design Club',
    description: 'Learn UI/UX design principles from industry experts.'
  },
  {
    id: '6',
    title: 'Startup Pitch Event',
    date: '2025-01-05',
    time: '03:00 PM',
    location: 'Le Corbusier Block',
    venue: 'Le Corbusier Block - Conference Hall',
    host: 'Entrepreneurship Club',
    description: 'Young entrepreneurs pitch their innovative business ideas to investors.'
  },
  {
    id: '7',
    title: 'Art Exhibition',
    date: '2025-01-10',
    time: '11:00 AM',
    location: 'Le Corbusier Block',
    venue: 'Le Corbusier Block - Gallery',
    host: 'Fine Arts Society',
    description: 'Showcase of contemporary and traditional art from student artists.'
  },
  {
    id: '8',
    title: 'Science Seminar',
    date: '2025-01-15',
    time: '01:00 PM',
    location: 'Picasso Block',
    venue: 'Picasso Block - Lecture Theater',
    host: 'Science Club',
    description: 'Interactive seminar on breakthrough scientific discoveries and research.'
  },
  {
    id: '9',
    title: 'Career Fair',
    date: '2025-01-20',
    time: '09:00 AM',
    location: 'Exploratorium',
    venue: 'Exploratorium - Main Hall',
    host: 'Career Services',
    description: 'Meet with top companies and explore exciting career opportunities.'
  },
  {
    id: '10',
    title: 'Debate Championship',
    date: '2025-01-25',
    time: '04:00 PM',
    location: 'Exploratorium',
    venue: 'Exploratorium - Auditorium',
    host: 'Debate Society',
    description: 'Inter-college debate competition on contemporary social issues.'
  }
];

// In-memory storage for registrations and users
let registrations = [];
let users = [];

const resolvers = {
  Query: {
    events: () => events,
    event: (parent, args) => events.find(e => e.id === args.id),
    getUser: (parent, args) => users.find(u => u.email === args.email)
  },
  
  Mutation: {
    createEvent: (parent, args) => {
      const newEvent = {
        id: String(Date.now()),
        title: args.title,
        date: args.date,
        time: args.time,
        location: args.location,
        venue: args.venue,
        host: args.host,
        description: args.description
      };
      events.push(newEvent);
      return newEvent;
    },

    registerForEvent: (parent, args) => {
      const registration = {
        id: String(Date.now()),
        eventId: args.eventId,
        fullName: args.fullName,
        rollNumber: args.rollNumber,
        email: args.email,
        phone: args.phone,
        dietaryRestrictions: args.dietaryRestrictions || 'none',
        specialRequirements: args.specialRequirements || '',
        registeredAt: new Date().toISOString()
      };
      
      registrations.push(registration);
      
      // Store user if new
      const existingUser = users.find(u => u.email === args.email);
      if (!existingUser) {
        users.push({
          id: String(Date.now()),
          name: args.fullName,
          email: args.email,
          rollno: args.rollNumber
        });
      }
      
      return {
        success: true,
        message: `Successfully registered for event! Registration ID: ${registration.id}`,
        registrationId: registration.id
      };
    }
  }
};

export default resolvers;
