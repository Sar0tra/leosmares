import React from 'react';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Events from './components/Events';
import AudioHub from './components/AudioHub';
import BookingForm from './components/BookingForm';
import InstagramFeed from './components/InstagramFeed';
import AboutMe from './components/AboutMe';
// import Nav from './components/Nav';
// import Services from './components/Services';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black font-sans antialiased overflow-x-hidden">
        {/* <Nav/> */}
        <Hero/>
        <Quote/>
        <AboutMe/>
        <Events/>
        <AudioHub/>
        <InstagramFeed/>
        <BookingForm/>
        {/* <Services/> */}
        {/* <Contact/> */}
        <Footer/>
      </main>
  );
};

export default App;