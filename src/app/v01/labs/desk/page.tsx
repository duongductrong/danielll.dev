import "./styles.scss";

const Desk = () => {
  return (
    <div className="desk-3d">
      <div className="screens">
        <div className="windows">
          <div className="glass">
            <div className="surface"></div>
            <div className="surface"></div>
            <div className="surface"></div>
          </div>
        </div>

        <div className="table">
          <div className="on-table">
            <div className="lamp">
              <div className="light-bulb"></div>
              <div className="line"></div>
              <div className="sole"></div>
            </div>
            <div className="laptop">
              <div className="screen"></div>
              <div className="sole"></div>
            </div>
            <div className="glass-of-water"></div>
          </div>
          <div className="stand-table"></div>
          <div className="bottom-table"></div>
        </div>
      </div>
    </div>
  );
};

export default Desk;
