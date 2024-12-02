import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  let myName: string = "Ekaterina";
  let age : number = 34;
  let animalUrl : string = "https://www.happypet.care/_next/image?url=https%3A%2F%2Fhappypetproduction.s3.ap-south-1.amazonaws.com%2FbreedFiles%2Fdog%2F64d6461c7712a1493d6bc279%2FgalleryImages%2Flarge_file_1725051174014.webp&w=1080&q=75";
  let username : string = "Margol";
  let lastLogin : string = "16.09.24";
  return (
    <div className="App">
      <Navbar user={username} lastLogin={lastLogin} />
      <Home username={username} />
      <Details />
        <h1>{myName}</h1>
        <p>Hello from App component</p>
        <img src={animalUrl} alt="labrador" />
        <div>Animal age is {age + 10}</div>
        <p>{Math.floor(Math.random() * 100)}</p>
        <Footer developerName={myName} />
    </div>
  );
}

export default App;
