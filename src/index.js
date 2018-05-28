import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Result from './components/result.js';
import Footer from './components/footer.js';

class SearchManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        fetch(`http://veganrealm.net:8080/recipes/tofu`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    results: json
                });
            });
    }

    render() {
        return (
            <div id="results">
                {this.state.results.map(result =>
                    <Result key={result.id} result={result}/>
                )}
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