
import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import EventList from './components/EventList'
import EventDetailView from './components/EventDetailView'
import CreateEventForm from './components/CreateEventForm'
import RegistrationForm from './components/RegistrationForm'
import initialEvents from './data/events'

const UserContext = createContext(null);

// Simple placeholder components
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="EventBuddy Logo" className="h-10 w-10 rounded-full object-cover" />
          <h1 className="text-xl font-bold">EventBuddy</h1>
        </Link>
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="text-sm text-gray-200 hover:text-white">Home</Link>
          <Link to="/create" className="text-sm text-gray-200 hover:text-white">Create</Link>
          <Link to="/profile" className="text-sm text-gray-200 hover:text-white">Profile</Link>
          {!user ? (
            <Link to="/login" className="text-sm text-gray-200 hover:text-white">Login</Link>
          ) : (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-200">Hello, {user.name}</span>
              <button onClick={handleLogout} className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">Logout</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

const Home = () => (
  <EventList />
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.jpg" alt="EventBuddy" className="h-8 w-8 rounded-full object-cover" />
              <h3 className="text-lg font-bold text-white">EventBuddy</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover and join amazing events in your community. Connect with people and create unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition">Browse Events</Link></li>
              <li><Link to="/create" className="text-gray-400 hover:text-purple-400 transition">Create Event</Link></li>
              <li><Link to="/profile" className="text-gray-400 hover:text-purple-400 transition">My Profile</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-purple-400 transition">Sign In</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Report Issue</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* University Section */}
          <div className="mb-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="text-white font-semibold mb-3">🎓 Chitkara University</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              EventBuddy is proudly developed for Chitkara University to enhance student engagement and foster community building through organized events.
            </p>
            <p className="text-xs text-gray-500">
              <strong>Location:</strong> Punjab & Himachal Pradesh, India | 
              <strong className="ml-2">Founded:</strong> 1997 | 
              <strong className="ml-2">Website:</strong> <a href="#" className="text-purple-400 hover:text-purple-300">www.chitkara.edu.in</a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm font-semibold">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm font-semibold">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm font-semibold">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm font-semibold">LinkedIn</a>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 EventBuddy. All rights reserved.</p>
            <p>Built for <span className="text-purple-400 font-semibold">Chitkara University</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CreateEvent = () => (
  <EventList is-create={true} />
);

const EventDetail = () => (
  <EventDetailView />
);

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Profile Not Found</h2>
          <p className="text-gray-300 mb-8">You need to sign in to view your profile.</p>
          <Link to="/login" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
            Sign In
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Card */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          {/* Banner Image */}
          <div className="relative h-48 overflow-hidden">
            <img src="/welcome.jpg" alt="Welcome" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
          </div>

          {/* Profile Content */}
          <div className="px-8 pb-8">
            {/* Header Section */}
            <div className="relative -mt-16 mb-8 flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full border-4 border-gray-800 flex items-center justify-center shadow-lg">
                <span className="text-5xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold text-white text-center">{user.name}</h1>
              <p className="text-purple-400 text-sm font-semibold mt-1">Active Member</p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-xl border border-gray-600 hover:border-purple-500 transition-all">
                <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Email Address</p>
                <p className="text-white text-lg break-all">{user.email}</p>
              </div>

              {/* Roll Number Card */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-xl border border-gray-600 hover:border-indigo-500 transition-all">
                <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Roll Number</p>
                <p className="text-white text-lg font-mono">{user.rollno}</p>
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div className="mb-8 p-6 bg-gray-900 rounded-xl border border-gray-700">
              <h3 className="text-gray-300 text-sm uppercase tracking-wider font-semibold mb-4">Member Status</h3>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">Active • Verified Member</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Link to="/" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all duration-200">
                Browse Events
              </Link>
              <button 
                onClick={() => { setUser(null); navigate('/'); }} 
                className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>EventBuddy © 2024 • Your Profile</p>
        </div>
      </div>
    </main>
  );
};

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollno] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!name.trim() || !email.trim() || !rollno.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setUser({ name: name.trim(), email: email.trim(), rollno: rollno.trim() });
    navigate('/profile');
  };

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-4 relative"
      style={{ backgroundImage: 'url(/login.jpg)' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-300">Sign in to your EventBuddy account</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Roll Number</label>
              <input
                type="text"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition"
                placeholder="e.g., 2024BT001"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 mt-6 shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-center text-gray-300 text-sm">
              Don't have an account?{' '}
              <Link to="/" className="text-purple-300 hover:text-purple-200 font-semibold">
                Browse Events
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [allEvents, setAllEvents] = useState(initialEvents);

  const handleEventCreate = (newEvent) => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App bg-gray-900 min-h-screen text-white flex flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<CreateEventForm onEventCreate={handleEventCreate} />} />
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/register/:id" element={<RegistrationForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<EventList events={allEvents} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;