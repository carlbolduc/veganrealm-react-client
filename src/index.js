import React from 'react';
import ReactDOM from 'react-dom';
import { debounce } from 'lodash';
import './index.css';
import Result from './components/result.js';
import Footer from './components/footer.js';

class SearchManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
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

    getInfo = debounce(
        () => {
            fetch(`http://veganrealm.net:8080/recipes/${this.state.query}`)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        results: json
                    });
                });
        },
        300);

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    };

    render() {
        return (
            <div id="container">
                <form>
                    <input
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                </form>
                <div id="results">
                    {this.state.results.map(result =>
                        <Result key={result.id} result={result}/>
                    )}
                    <div>Yo</div>
                    <Footer recipesCount='22'/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <SearchManager/>,
    document.getElementById('root')
);