import React from 'react'
import "./Profile.css"
import RecentItem from './RecentItem'

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/e25e61c0-f507-4f02-aa7c-fc457c4c7f2a-profile_image-70x70.png" alt="profile" />
                <div className="profile__topLeftDetails">
                    <h1>MLH</h1>
                    <h3>5.4k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg" ></i>
                <i className="fas fa-bell graybg" ></i>
                <i className="fas fa-ellipsis-v" ></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2> <i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem 
                        url={"https://www.youtube.com/embed/1M2DC04e_Ss"}
                        title={"Prehackstoric Opening"}
                    />
                    <RecentItem 
                        url={"https://www.youtube.com/embed/bepwz4lKN1A"}
                        title={"TeachersHack - Closing Ceremony"}
                    />
                    <RecentItem 
                        url={"https://www.youtube.com/embed/ZUs-uCaIDbY"}
                        title={"Teachers Hack - Opening Ceremony"}
                    />
                    <RecentItem 
                        url={"https://www.youtube.com/embed/cz50Jg1xspk"}
                        title={"MLH Fellowship: Batch 3 Graduation Ceremony"}
                    />
                    <RecentItem 
                        url={"https://www.youtube.com/embed/4uxCP61gYnQ"}
                        title={"Introduction to Cloud Native Chaos Engineering"}
                    />
                    <RecentItem 
                        url={"https://www.youtube.com/embed/V1ZDI__F-mw"}
                        title={"MLH Pre Fellowship: Project Showcase!"}
                    />
                </div>

                <div className="profile__categories">
                    <h2>MLH's recently streamed Categories</h2>
                    <img src="http://news.mlh.io/wp-content/uploads/2021/04/image1-1.jpg" alt="category" />
                    <h3>Level Up with MLH</h3>
                </div>

            </div>
        </div>
    )
}
