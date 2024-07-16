/* eslint-disable @next/next/no-img-element */
import "./styles.scss";

const MacBook = () => {
  return (
    <div id="macbook-container" className="container">
      <div className="box">
        <div className="macbook">
          <div className="screen">
            <div className="back">Apple M1</div>
            <div className="front">
              <div className="main-screen">
                <div className="lock">
                  <div className="avatar">
                    {/* <img
                        src="https://avatars.githubusercontent.com/u/39333905?s=400&u=60d3d4a145aeea742dac2bccd2a8060b2c06e3ea&v=4"
                        width="100%"
                        height="100%"
                        alt=""
                      /> */}
                  </div>
                  <h2 className="name">My account</h2>
                  <input
                    type="password"
                    placeholder="Please typing your password here"
                    value="1234"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="floor">
            <div className="on-sole">
              <div className="interactive">
                <div className="loudspeaker"></div>
                <div className="main-keys">
                  <div className="keyboards">
                    <div className="row">
                      <div className="key low-key">Esc</div>
                      <div className="touchbar"></div>
                      <div className="key low-key"></div>
                    </div>
                    <div className="row">
                      <div className="key">~</div>
                      <div className="key">1</div>
                      <div className="key">2</div>
                      <div className="key">3</div>
                      <div className="key">4</div>
                      <div className="key">5</div>
                      <div className="key">6</div>
                      <div className="key">7</div>
                      <div className="key">8</div>
                      <div className="key">9</div>
                      <div className="key">0</div>
                      <div className="key">-</div>
                      <div className="key">+</div>
                      <div className="key x1/5">Del</div>
                    </div>
                    <div className="row">
                      <div className="key x1/5">Tab</div>
                      <div className="key">Q</div>
                      <div className="key">W</div>
                      <div className="key">E</div>
                      <div className="key">R</div>
                      <div className="key">T</div>
                      <div className="key">Y</div>
                      <div className="key">U</div>
                      <div className="key">I</div>
                      <div className="key">O</div>
                      <div className="key">P</div>
                      <div className="key">{"}"}</div>
                      <div className="key">\</div>
                    </div>
                    <div className="row">
                      <div className="key x2">Caps lock</div>
                      <div className="key">A</div>
                      <div className="key">S</div>
                      <div className="key">D</div>
                      <div className="key">F</div>
                      <div className="key">G</div>
                      <div className="key">H</div>
                      <div className="key">J</div>
                      <div className="key">K</div>
                      <div className="key">L</div>
                      <div className="key">;</div>
                      <div className="key">{"'"}</div>
                      <div className="key x2">Return</div>
                    </div>
                    <div className="row">
                      <div className="key x2/5">Shift</div>
                      <div className="key">Z</div>
                      <div className="key">X</div>
                      <div className="key">C</div>
                      <div className="key">V</div>
                      <div className="key">B</div>
                      <div className="key">N</div>
                      <div className="key">M</div>
                      <div className="key">,</div>
                      <div className="key">.</div>
                      <div className="key">/</div>
                      <div className="key x2/5">Shift</div>
                    </div>
                    <div className="row">
                      <div className="key">FN</div>
                      <div className="key">Cmd</div>
                      <div className="key">Opt</div>
                      <div className="key x6"></div>
                      <div className="key">Cmd</div>
                      <div className="key">Opt</div>
                      <div className="key">&lt;</div>
                      <div className="key">&gt;</div>
                    </div>
                  </div>
                </div>
                <div className="loudspeaker"></div>
              </div>
            </div>
            <div className="trackpad"></div>
          </div>
          <div className="sole"></div>
        </div>
      </div>
    </div>
  );
};

export default MacBook;
