import React from 'react';

function Footer(props) {
    return (
        <footer>
            <p>Your friendly vegan resources search engine, cruelty free and full of goodies. <a href="about.html">Learn
                More</a>.</p>
            <p>Currently serving {props.recipesCount} recipes.</p>
        </footer>
    )
}

export default Footer;