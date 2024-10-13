import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#profile" className="text-gray-700 hover:text-blue-500">Profile</a>
            </li>
            <li className="mb-2">
              <a href="#settings" className="text-gray-700 hover:text-blue-500">Settings</a>
            </li>
            <li className="mb-2">
              <a href="#logout" className="text-gray-700 hover:text-blue-500">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">User Name</span>
            <Image width={40} height={40} src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>
        <section>
          <p>Main content goes here...</p>
        </section>
      </main>
    </div>
    );
};

export default page;