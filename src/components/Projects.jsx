import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { HashLink } from 'react-router-hash-link';


function Projects(props) {
    return (
        <div id='projects' className='section-dark'>
            <h2>Projects</h2>
            <HashLink className="nav-link" to="/more-projects">View All</HashLink>
            <div className='projects d-flex align-items-center justify-content-evenly'>
                <div className='project-row align-items-center justify-content-center'>
                    <a href="https://fastidious-sundae-5a2784.netlify.app/" target="/">
                        <div className='project' data-aos="fade-right">
                            <div>
                            <img src="https://cdn.midjourney.com/7a93ed44-13d1-4799-a47b-a07ae228dc2f/grid_0.png" alt="developer logo" className='logo-project align-items-center ' />
                                <a href="https://github.com/JAPlaisted/sommet">
                                        <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                    </a>
                            </div>
                            <div>
                                <h4>Sommet Technologies</h4>
                                <p>Sommet Technologies is a software automation service that streamlines business processes. The React site has reusable components, browser router, and custom CSS.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://fastidious-sundae-5a2784.netlify.app/#products" target="/">
                        <div className='project' data-aos="fade-right">
                            <div>
                            <img src="https://cdn.midjourney.com/e3598eff-c7f1-4d9e-8908-a7fd1cffa010/grid_0.png" alt="developer logo" className='logo-project align-items-center ' />
                                <a href="https://github.com/JAPlaisted/bionic-font-plugin">
                                        <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                    </a>
                            </div>
                            <div>
                                <h4>Bionic Font Plugin</h4>
                                <p>The Bionic Font Plugin is a Chrome extension that converts browser fonts to Bionic Font, improving reading speed.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='project-row align-items-center justify-content-center'>
                    <a href="https://superchat-7b816.web.app/" target="/">
                        <div className='project' data-aos="fade-right">
                            <div>
                            <img src="https://cdn.midjourney.com/8165c4c2-e967-439b-ba55-35b85077a2e3/grid_0.png" alt="developer logo" className='logo-project align-items-center ' />
                                <a href="https://github.com/JAPlaisted/init-chat">
                                    <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                </a>
                            </div>
                            <div>
                                <h4>Init Chat</h4>
                                <p>InitChat is a chat app with fullstack capabilities using React.js and Firebase, featuring Google authentication and a banned users list.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://famous-brioche-becb52.netlify.app/" target="/">
                        <div className='project' data-aos="fade-right">
                            <div>
                            <img src="https://cdn.midjourney.com/e2bacdf6-7f7d-4e66-8bcc-f608429570fe/grid_0.png" alt="developer logo" className='logo-project align-items-center ' />
                                <a href="https://github.com/JAPlaisted/weather-tile">
                                            <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                        </a>
                            </div>
                            <div>
                                <h4>Weather Tile</h4>
                                <p>Weather Tile is a React-based weather UI that uses nivo to create visually appealing visualizations for weather data.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='project-row align-items-center justify-content-center'>
                    <a href="https://calm-figolla-4ac6c5.netlify.app/" target="/">
                        <div className='project' data-aos="fade-right">
                            <div>
                            <img src="https://cdn.midjourney.com/70f9af2d-ff77-4662-a53e-ec7adc4ed6d6/grid_0.png" alt="developer logo" className='logo-project align-items-center ' />
                                <a href="https://github.com/JAPlaisted/rainy-data">
                                            <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                        </a>
                            </div>
                            <div>
                                <h4>Rainy Data</h4>
                                <p>Rainy Data is a React and Express web resource for downloading mock JS databases for front-end application development, using Axios.</p>
                            </div>
                        </div>
                    </a>
                    <a href="/py-tracking-demo">
                        <div className='project' data-aos="fade-right">
                            <div>
                            <img src="https://cdn.midjourney.com/7e2718c9-54bd-40e5-996f-221dc1e47ef0/grid_0.png" alt="developer logo" className='logo-project align-items-center ' />
                                <a href="https://github.com/JAPlaisted/facial-recognition">
                                            <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                        </a>
                            </div>
                            <div>
                                <h4>Python Tracking</h4>
                                <p>This is my experimental space for working with Python object tracking scripts. I aim to use these scripts to develop more interactive web applications in the future.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;