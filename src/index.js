import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/footer.js';

class SearchManager extends React.Component {
    render() {
        return (
            <div>
                <div>Yo</div>
                <Footer recipesCount='22'/>
            </div>
        );
    }
}

ReactDOM.render(
    <SearchManager/>,
    document.getElementById('root')
);