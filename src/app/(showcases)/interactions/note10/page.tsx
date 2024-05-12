/* eslint-disable @next/next/no-img-element */

import "./styles.scss"

const Note10 = () => {
  return (
    <div className="container">
      <div className="note10-wrapper">
        <div className="note10">
          <div className="volume"></div>
          <div className="power"></div>

          <div className="header">
            <div className="left">
              <div id="date-time" className="time">
                15:06
              </div>
            </div>
            <div className="camera"></div>
            <div className="right">
              <img
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-wifi-512.png"
                alt=""
                className="wifi"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/charge_battery-512.png"
                alt=""
                className="battery"
              />
            </div>
          </div>

          <div className="main">
            <div className="google-search">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2259/512/search-512.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png"
                alt=""
              />
            </div>
            <div className="app-note">
              <img
                src="https://store-images.s-microsoft.com/image/apps.195.9007199266246697.6fcd487f-e4a3-4698-8bd8-df27fe7f373e.362fbae0-477e-4966-a0e1-57719ee7a5f8"
                alt=""
              />
              <img
                src="https://icon-library.com/images/facebook-app-icon-transparent/facebook-app-icon-transparent-19.jpg"
                alt=""
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/chrome-36-569244.png"
                alt=""
              />
              <img
                width="42"
                src="https://seeklogo.com/images/T/telegram-logo-AD3D08A014-seeklogo.com.png"
                alt=""
              />
            </div>
          </div>

          <div className="toolbar">
            <div className="bar-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="home-icon"></div>
            <div className="back-icon"></div>
          </div>
        </div>
      </div>
      <div className="note10-pen">
        <div></div>
      </div>
    </div>
  );
};

export default Note10;
