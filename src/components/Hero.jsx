import React from 'react';
import resume from '../resume.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CodeIcon from '@mui/icons-material/Code';

function Hero(props) {
    return (
        <div className='hero-content'>
            <img src="https://cdn.midjourney.com/efb6a332-89b2-4c32-b0db-ef08c62db05b/grid_0.png" alt="developer logo" className='logo-hero align-items-center ' />
            <div className='hero-desc align-items-center' data-aos="zoom-in">
                <h2>Jonathan Plaisted</h2>
                <p>Hi, I'm Jonathan Plaisted, a highly motivated and passionate web developer with a knack for learning new technologies quickly. My expertise lies in JavaScript and React development, and I take pride in every line of code I write. I'm excited to take on new challenges and make a positive impact in the world of technology. Let's work together to create amazing web experiences!</p>
                <div className='icon-container'>
                    <a href="https://github.com/JAPlaisted" target="/"><GitHubIcon className='icon' style={{fontSize: "x-large"}}/></a>
                    <a href="https://www.linkedin.com/in/jonathan-plaisted/" target="/"><LinkedInIcon className='icon' style={{fontSize: "x-large"}}/></a>
                    <a href="https://twitter.com/cssslinger" target="/"><TwitterIcon className='icon' style={{fontSize: "x-large"}}/></a>
                    <a href="https://codepen.io/japlaisted" target="/"><CodeIcon className='icon' style={{fontSize: "x-large"}}/></a>
                </div>
                <div className='hero-links'><a href="mailto: jonathan.plaisted@outlook.com">Email</a><a href={resume} target="_blank" rel="noreferrer">Resume</a></div>
            </div>
        </div>
    );
}

export default Hero;