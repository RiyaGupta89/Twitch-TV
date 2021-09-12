import "./Header.css";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
          alt="twitch-logo"
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className="header__center">
        <input type="text" placeholder="What do you want to watch?" />
        <div className="header__centerLogoContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="header__right">
          <div className="header__rightContainer">
              <i className="fas fa-inbox"></i>
              <i className="fas fa-comment-alt"></i>


              <div className="header__rightBits">
                  <i className="fas fa-gem"></i>
                  <h4>Get Bits</h4>
              </div>

                <Avatar />
          </div>
      </div>
    </div>
  );
};

export default Header;
