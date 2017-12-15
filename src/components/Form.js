import React, { Component } from "react";
import Jov from "jov";
import { saveToken } from "../token";
import { Input } from "./Input";
import path from "path";

const schema = {
    username: new Jov.string().required().alphanum().min(3).max(20),
    password: new Jov.string().required().min(6)
};

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { input: {}, error: null };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const error = Jov.validate(this.state.input, schema);
        this.setState({ error }, () => {
            console.log(this.state);
        });
        //console.log(path.join(process.env.REACT_APP_API_URL, this.props.submitPath))
        if (error) {
            console.log(error.error.message);
        } else {
            this.props.handleSubmit();
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        const input = this.state.input;
        
        input[name] = value;
        this.setState({ input });
        
        // console.log(event.target.name);
        // console.log(this.state);
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, child.type.name === "Input" ? { handleChange: this.handleInputChange } : {})
        );

        return (
            <form onSubmit={this.handleSubmit}>
                {childrenWithProps}
                {this.state.error ? "error" : null}
            </form>
        );
    }
}
