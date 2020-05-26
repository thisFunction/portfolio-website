import React from 'react';
import Navigation from '../Navigation/Navigation';
import image from '../../images/record.jpg';
import './Error.scss';

const DojoPage = () => {
    return (
        <div className="error">
        <aside>
            <h1>Oops!</h1>
        </aside>
        <main>
        <p>It looks like you got a scratched up record. Click one of the links below to find a better one.</p>
            <img className="img" alt="my photograph" src={image}/>
        </main>
        <Navigation />
    </div>
    )
};

export default DojoPage;