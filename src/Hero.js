import React from 'react'
import Stream from "./Stream";
import Profile from "./Profile.js"
import "./Hero.css";

export default function Hero() {
    return (
        <div className="body">
            <div className="body--left">
        <Stream />
                <Profile />
            </div>
            <div className="body_rightPlaceholder"></div>
        </div>
    )
}
