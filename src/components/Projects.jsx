import React from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ExtensionIcon from '@mui/icons-material/Extension';
import ChatIcon from '@mui/icons-material/Chat';
import CloudIcon from '@mui/icons-material/Cloud';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';

function Projects(props) {
    return (
        <div id='projects' className='section-dark'>
            <h2>Projects</h2>
            <div className='projects d-flex align-items-center justify-content-evenly'>
                <div className='project-row align-items-center justify-content-center'>
                    <a href="https://fastidious-sundae-5a2784.netlify.app/" target="/">
                        <div className='project'>
                            <PersonAddAlt1Icon className='project-icon' style={{fontSize: "xx-large"}}/>
                            <div>
                                <h4>Sommet Technologies</h4>
                                <p>Sommet Technologies is a software automation service that streamlines business processes. The React site has reusable components, browser router, and custom CSS.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://fastidious-sundae-5a2784.netlify.app/blog/5b21ca3eeb7f6fbccd471815" target="/">
                        <div className='project'>
                            <ExtensionIcon className='project-icon' style={{fontSize: "xx-large"}}/>
                            <div>
                                <h4>Bionic Font Plugin</h4>
                                <p>The Bionic Font Plugin is a Chrome extension that converts browser fonts to Bionic Font, improving reading speed.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='project-row align-items-center justify-content-center'>
                    <a href="https://superchat-7b816.web.app/" target="/">
                        <div className='project'>
                            <ChatIcon className='project-icon' style={{fontSize: "xx-large"}}/>
                            <div>
                                <h4>Init Chat</h4>
                                <p>InitChat is a chat app with fullstack capabilities using React.js and Firebase, featuring Google authentication and a banned users list.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://famous-brioche-becb52.netlify.app/" target="/">
                        <div className='project'>
                            <CloudIcon className='project-icon' style={{fontSize: "xx-large"}}/>
                            <div>
                                <h4>Weather Tile</h4>
                                <p>Weather Tile is a React-based weather UI that uses nivo to create visually appealing visualizations for weather data.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='project-row align-items-center justify-content-center'>
                    <a href="https://calm-figolla-4ac6c5.netlify.app/" target="/">
                        <div className='project'>
                            <DataObjectIcon className='project-icon' style={{fontSize: "xx-large"}}/>
                            <div>
                                <h4>Rainy Data</h4>
                                <p>Rainy Data is a React and Express web resource for downloading mock JS databases for front-end application development, using Axios.</p>
                            </div>
                        </div>
                    </a>
                    <a href="/py-tracking-demo" target="/">
                        <div className='project'>
                            <SpatialTrackingIcon className='project-icon' style={{fontSize: "xx-large"}}/>
                            <div>
                                <h4>Python Tracking</h4>
                                <p>This is where I experiment with Python object tracking scripts for making the web more interactive in the future.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;