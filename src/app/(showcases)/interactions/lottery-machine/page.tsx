import "./styles.scss"

const LotteryMachine = () => {
  return (
    <>
      <div className="machine">
        <div className="glass-cage">
          <div className="dot"></div>

          <div className="balloons"></div>
        </div>
        <div className="cover-base"></div>
        <div className="base-top">
          <div className="crank">
            <div className="crank-top"></div>
            <div className="crank-bottom"></div>
          </div>

          <div className="balloon"></div>
        </div>
        <div className="base-bottom"></div>
      </div>
      <div className="balloon"></div>
    </>
  );
};

export default LotteryMachine;
