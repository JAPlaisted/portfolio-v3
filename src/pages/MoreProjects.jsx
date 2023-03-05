import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavBar from '../components/NavBar';
import MapIcon from '@mui/icons-material/Map';


function MoreProjects(props) {
    return (
        <div id="more-projects" className='section-dark'>
            <NavBar />
            <h2>Projects</h2>
            <div className='container'>
                <div className='more-projects d-flex align-items-center justify-content-evenly'>
                    <div className='project-row align-items-center justify-content-center'>
                        <a href="https://fastidious-sundae-5a2784.netlify.app/" target="/">
                            <div className='project' data-aos="fade-right">
                                <div>
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
                <div className='more-projects d-flex align-items-center justify-content-evenly'>
                    <div className='project-row align-items-center justify-content-center'>
                        <a href="https://cosmic-sunburst-b998ed.netlify.app/" target="/">
                            <div className='project' data-aos="fade-right">
                                <div>
                                    <a href="https://github.com/JAPlaisted/find-jon">
                                            <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                        </a>
                                </div>
                                <div>
                                    <h4>Find Jon</h4>
                                    <p> The React application presented here serves as a solution to the constraint posed by certain websites, such as Instagram, which only allow for a singular link. 
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="/ars-demo" target="/">
                            <div className='project' data-aos="fade-right">
                                <div>
                                <MapIcon className='project-icon' style={{fontSize: "xx-large"}}/>
                                </div>
                                <div>
                                    <h4>Advantage Route Systems</h4>
                                    <p> As a front-end developer utilizing Vue.js, Amazon Web Services, Knex.js, Quasar, and Swagger, I contributed to Advantage Route Systems' route optimization services for various delivery companies.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='project-row align-items-center justify-content-center'>
                        <a href="https://magnificent-torte-aec714.netlify.app/" target="/">
                            <div className='project' data-aos="fade-right">
                                <div>
                                    <a href="https://github.com/JAPlaisted/react-pizza">
                                        <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                    </a>
                                </div>
                                <div>
                                    <h4>Pacifica Pizza</h4>
                                    <p>Pacifica Pizza is a pizzeria chain situated in Fresno, California, that serves both specialty and traditional pies. The website was developed using React.js.</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://stately-tarsier-fd5ad6.netlify.app/" target="/">
                            <div className='project' data-aos="fade-right">
                                <div>
                                    <a href="https://github.com/JAPlaisted/bourne-music">
                                                <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                            </a>
                                </div>
                                <div>
                                    <h4>Mike Bourne Music</h4>
                                    <p>The official website of rapper Mike Bourne from Arkansas was developed using React.js, React Router, Email.js, and custom CSS.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='project-row align-items-center justify-content-center'>
                        <a href="https://admirable-lebkuchen-db46f7.netlify.app/" target="/">
                            <div className='project' data-aos="fade-right">
                                <div>
                                    <a href="https://github.com/JAPlaisted/ZoaEnergyLandingPage">
                                                <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                            </a>
                                </div>
                                <div>
                                    <h4>Zoa Energy</h4>
                                    <p>ZOA promotes a healthful and uplifting energy that enhances focus, productivity, and teamwork. Utilizing React, the ZOA landing page showcases the product and offers a purchasing option.</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://elegant-austin-e61aa0.netlify.app/" target="/">
                            <div className='project' data-aos="fade-right">
                                <div>
                                    <a href="https://github.com/JAPlaisted/RPSLP">
                                                <GitHubIcon className='project-icon' style={{fontSize: "x-large"}} />
                                            </a>
                                </div>
                                <div>
                                    <h4>Rock, Paper, Scissors, Lizard, Spock.</h4>
                                    <p>"Rock, Paper, Scissors, Lizard, Spock" is an amusing spin-off to the traditional game that was implemented using Javascript.</p>
                                </div>
                            </div>
                        </a>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default MoreProjects;