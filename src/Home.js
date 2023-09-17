import { useAuthenticator } from "@aws-amplify/ui-react";
import React from 'react';
import './App.css';
import "@aws-amplify/ui-react/styles.css";

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.username}</h1>
    <div className="Btn-signout">
      <button onClick={signOut}>Sign out</button>
    </div>
      <div className="App">
      <header className="App-header">
      <main>
        <h1>Welcome to Hospital Management</h1>
        <p>Book appointments and emergencies with ease.</p>
      </main>
        <navbar className="Nav-bar">
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </navbar>
      </header>
    </div>
    </main>
  );
}
