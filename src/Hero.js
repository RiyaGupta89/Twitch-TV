import React from 'react'
import Profile from "./Profile.js"
import "./Hero.css";

export default function Hero() {
    return (
        <div className="body">
            <div className="body--left">
                <Profile />
            </div>
            <div className="body_rightPlaceholder"></div>
        </div>
    )
}
