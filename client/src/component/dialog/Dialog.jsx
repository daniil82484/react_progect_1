import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import styles from "./Dialog.module.css"

const Dialog = (props) => {
    return (
        <div>
            <Router>
                <ul className={styles.link}>
                    <li><Link className={styles.link} to="/">Home</Link></li>
                    <li><Link className={styles.link} to="/about">About</Link></li>
                    <li><Link className={styles.link} to="/contact">Contacts</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<h2>Home</h2>} />
                    <Route path="/about" element={<h2>About</h2>} />
                    <Route path="/contact" element={<h2>Contacts</h2>} />
                    <Route path="*" element={<h2>123</h2>} />
                </Routes>
            </Router>
        </div>
    );
}

export default Dialog;