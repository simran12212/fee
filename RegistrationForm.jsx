import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { saveRegistration } from "../utils/registrationStorage";

export default function RegistrationForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !rollno.trim() || !email.trim()) {
      setError("All fields are required");
      return;
    }

    // SAVE REGISTRATION PERMANENTLY
    saveRegistration({
      eventId: id,
      name,
      rollno,
      email,
      timestamp: new Date().toISOString(),
    });

    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <main className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Register for Event</h2>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Roll Number"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
