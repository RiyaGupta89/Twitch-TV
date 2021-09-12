import React from "react";
import "./RecentItem.css";

function RecentItem({ url, title }) {
  return (
    <div className="item">
      <iframe
        width="400"
        height="235"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
     <div className="item__details">
         <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/e25e61c0-f507-4f02-aa7c-fc457c4c7f2a-profile_image-70x70.png" alt="image" />
         <div className="item__DetailsText">
             <h4>{title}</h4>
             <p>MLH</p>
             <p>Science & Technology</p>
         </div>
     </div>
    </div>
  );
}

export default RecentItem;
