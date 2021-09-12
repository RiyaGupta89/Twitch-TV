import React from "react";
import "./Sidebar.css";
import Channel from "./Channel.js";

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar__top">
      <h5>FOLLOWED CHANNELS</h5>
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/e25e61c0-f507-4f02-aa7c-fc457c4c7f2a-profile_image-70x70.png"
        name="MLH"
        followers="5.9K"
      />
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/aef926fa-f3a6-49ea-9c04-0eb7b27ef67e-profile_image-70x70.jpg"
        name="codingnewb
"
        followers="1.4K"
      />
      <h5>RECOMMENDED CHANNELS</h5>
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/611cac54-34e0-4c2a-851b-66e5ea2b3f81-profile_image-150x150.png"
        name="CodingGarden
"
        followers="39.4K"
      />{" "}
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/71b82b04-637d-42b6-ace9-bfc283c4a01a-profile_image-70x70.png"
        name="Coding_byAnna
"
        followers="2.3K"
      />{" "}
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/1633d52d-e16a-4ef5-a605-1f63c6b00791-profile_image-150x150.png"
        name="CodingAfterWork
"
        followers="1.2K"
      />
      <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends"/>
        </div>
      </div>
    </div>
  );
}
