import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

function Home(props) {
    return (
        <div>
            <NavBar />
            <Hero />
            <Projects />
            <Skills />
        </div>
    );
}

export default Home;