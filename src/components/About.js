import React from 'react';
import { FirebaseContext } from './Firebase';

const About = () => {
    return (
        <FirebaseContext.Consumer>
            {firebase => {
                return <div>I've access to Firebase and render something.</div>;
            }}
        </FirebaseContext.Consumer>
    );
}

export default About;
