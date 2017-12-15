import React, { Component } from "react";
import axios from "axios";
import { saveToken, readToken } from "../token";
import { Layout } from "./Layout";

import { Form } from "../components/Form";
import { Input } from "../components/Input";

export class Register extends Component {
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
        console.log(this.props);
    }

    handleRegister() {
        axios.get("http://www.reddit.com/r/reactjs.json")
        .then(res => {
            console.log(res);
            saveToken("this is the user token");
            console.log(readToken());
            // this.props.history.push("/");
        });
    }

    render() {
        return (
            <Layout>
                <h1>Register</h1>
                <Form handleSubmit={this.handleRegister}>
                    <label htmlFor="username">awdawd</label>
                    <Input name="username" type="text" placeholder="Username" />
                    <Input name="email" type="email" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Password" />
                    <button type="submit">Create account</button>
                </Form>
                <button onClick={() => { this.props.history.push("/") }}>To home</button>
                <button onClick={() => { this.props.history.push("/login") }}>Sign in</button>
            </Layout>
        );
    }
}
