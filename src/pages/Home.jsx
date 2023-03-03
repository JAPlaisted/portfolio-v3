import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

function Home(props) {
    return (
        <div>
            <NavBar />
            <Hero />
            <Projects />
        </div>
    );
}

export default Home;