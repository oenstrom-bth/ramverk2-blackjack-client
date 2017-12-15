import React, { Component } from "react";
import "./Input.css";

export class Input extends Component {
    constructor(props) {
        super(props);

        this.type       = props.type || "text";
        this.className  = props.className || `input ${this.type}`;
    }

    render() {
        return (
            <input
                className={this.className}
                id={this.props.id || this.props.name}
                name={this.props.name}
                type={this.type}
                placeholder={this.props.placeholder || ""}
                onChange={event => this.props.handleChange(event)}
            />
        );
    }
}
