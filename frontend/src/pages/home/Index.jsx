import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HQImage from "../../components/Image.jsx";
import RoomPage from './RoomPage.jsx'
import WelcomeAnimation from "../../components/Welcome.jsx";
const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${username}/${roomCode}`);
  };
  return (
    <div className="home-page flex flex-col justify-center items-center h-screen text-white">
      <div className="w-full max-w-md p-8 rounded-lg bg-slate-400 bg-opacity-50 backdrop-blur-xl border border-teal-500/20 shadow-2xl">
      <HQImage />
      <div className="mb-3">
        <h1 className="text-3xl font-bold mb-9 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1E6E89] to-black">
          Enter Headquarters
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="roomCode"
              className="text-sm font-medium text-gray-300"
            >
              Room Code
            </label>
            <input
              type="text"
              id="roomCode"
              value={roomCode}
              required
              placeholder="Enter Code"
              onChange={(e) => {
                setRoomCode(e.target.value);
              }}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent"
            />
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-300"
            >
              username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              required
              placeholder="Enter Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-[#1E6E89] to-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300"
          >
            Enter the Room
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
