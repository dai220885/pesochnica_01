import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src={logo}></img>
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Message
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
            <div className='content'>
                Main content
                <div>
                    <img src="https://i1.mybook.io/p/x480/bookset/0e/4e/0e4e921f-8dd7-4ba2-834d-7b1161992f83.png"></img>
                </div>
                <div>
                    avatar
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>

            </div>

        </div>
    );
}

export default App;
