import React from "react";

import "./styles.scss";

const Bedroom3D = () => {
  return (
    <div className="bedroom-3d h-[800px]">
      <section className="container">
        <div className="room">
          <div className="surface bottom">
            <div className="carpet bottom-carpet"></div>
            <div className="small-table small-table-bottom"></div>
            <div className="bed bed-bottom">
              <div className="main">
                <div className="bed-sheets">
                  <div className="blanket">
                    <div className="blanket-side"></div>
                  </div>
                </div>
              </div>
              <div className="bottom"></div>
              <div className="side"></div>
            </div>
          </div>
          <div className="surface top">
            {/* <div className="televison">
            <div className="telesion-url"></div>
          </div> */}
            <div className="windows">
              <div className="windows-child">
                <div className="windows-child-nested"></div>
                <div className="windows-child-nested"></div>
              </div>
              <div className="windows-child"></div>
            </div>

            <div className="closet closet-short">
              <div className="door-left">
                <div className="dot"></div>
              </div>
              <div className="door-right reserve">
                <div className="dot"></div>
              </div>
            </div>
            <div className="closet">
              <div className="door-left">
                <div className="dot"></div>
              </div>
              <div className="door-right reserve">
                <div className="dot"></div>
              </div>
            </div>
          </div>
          <div className="surface right">
            <div className="picture-monochrome picture-right-1 red">
              <div className="picture"></div>
            </div>
            <div className="picture-monochrome picture-right-2 yellow">
              <div className="picture"></div>
            </div>
            <div className="picture-monochrome picture-right-3 blue">
              <div className="picture"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bedroom3D;
