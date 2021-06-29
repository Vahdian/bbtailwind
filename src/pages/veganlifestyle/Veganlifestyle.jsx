import React from 'react';
import {Link} from "react-router-dom";

function Veganlifestyle(props) {
    return (
        <div className="absolute sm:relative top-28 text-center p-6">
            <h1 className="text-4xl  sm:text-8xl font-bold text-gray-600 sm:mt-40">CONTENT IS COMING SOON!</h1>
            <p className="mt-10 text-3xl">Stay tuned by subscribing to our newsletter<Link to="/"><span className="text-yellow-500"> here </span></Link>!</p>
        </div>
    );
}

export default Veganlifestyle;
