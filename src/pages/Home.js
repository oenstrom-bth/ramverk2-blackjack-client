import React from "react";
import { removeToken, readToken } from "../token";
import { Layout } from "./Layout";

const hej = () => {
    console.log(readToken());
};

export const Home = () => (
    <Layout>
        <h1>HOME</h1>
        <button onClick={() => { removeToken() }}>Remove token</button>
        <button onClick={hej}>Read token</button>
    </Layout>
);
