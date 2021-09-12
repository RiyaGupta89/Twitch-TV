import React from 'react'
import "./Stream.css";

function Stream() {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">
                                {/* {indicator} */}
                                Offline
                            </div>
                            <h2>Check out the below streams from MLH</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className="fas fa-bell"></i><p>You will be notified when MLH is live</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                    <iframe width="500px" height="295"
                    src="https://www.youtube.com/embed/3fGL6KNmOfQ"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream
