import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import "../styles/Link.css"; // Adjust the path if necessary

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <div className="link-container">
                <p className="register-link">
                    não tens conta?{" "}
                    <Link to="/register">clica neste link</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
