import React from 'react';
import {uuidv4} from '../helpers.js';
import Ingredient from './ingredient.js';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.result,
            ingredients: [],
            authorLink: ''
        };
    }

    generateAutorLink() {
        const pathArray = this.state.result.link.split('/');
        const protocol = pathArray[0];
        const host = pathArray[2];
        return `${protocol}//${host}`;
    }

    componentWillMount() {
        let authorLink = this.generateAutorLink();
        let ingredients = this.state.result.ingredients.map(item => {
            return {uid: uuidv4(), value: item};
        });
        this.setState({authorLink: authorLink, ingredients: ingredients});
    }

    render() {
        return (
            <article className="result">
                <h2><a href={this.state.result.link}>{this.state.result.title}</a></h2>
                <h3>Published by <a
                    href={this.state.authorLink}><strong>{this.state.result.author}</strong></a> on Apr 22,
                    2018</h3>
                <div className="image"><img src={this.state.result.imageLink}/></div>
                <div className="ingredients">
                    {this.state.ingredients.map(ingredient =>
                        <Ingredient key={ingredient.uid} ingredient={ingredient.value}/>
                    )}
                </div>
            </article>
        );
    }
}

export default Result;