import React, { Component } from "react";
import axios from "axios";
import { saveToken, readToken } from "../token";
import { Layout } from "./Layout";

import { Form } from "../components/Form";
import { Input } from "../components/Input";

console.log(process.env.REACT_APP_API_URL);

export class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        console.log(this.props);
    }

    handleLogin() {
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
                <h1>LOGIN</h1>
                <Form handleSubmit={this.handleLogin}>
                    <label htmlFor="username">awdawd</label>
                    <Input name="username" type="text" placeholder="Username" />
                    <Input name="password" type="password" placeholder="Password" />
                    <button type="submit">Sign in</button>
                </Form>
                <button onClick={() => { this.props.history.push("/") }}>To home</button>
                <button onClick={() => { this.props.history.push("/register") }}>New account</button>
            </Layout>
        );
    }
}
