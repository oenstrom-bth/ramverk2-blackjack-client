import React from "react";

export const Layout = ({ children }) => (
    <div className="app">
        <main>
            <div className="container">{children}</div>
        </main>
    </div>
);
