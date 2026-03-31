import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountedUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <>
      <div className="count-up-outer">
        <div className="container">
          <h2>more than 10 years of Following the dream</h2>
          <div className="count-up-inner">
            <div className="count-up-item">
              <div className="count-up-content">
                <div className="count-up-info">
                  <div className="count-up-first" ref={ref}>
                    {inView && (
                      <CountUp start={0} end={12} duration={2.75} delay={0.3} />
                    )}
                  </div>
                  <div className="count-up-decor"></div>
                  <div className="count-up-sec">awards</div>
                </div>
              </div>
            </div>

            <div className="count-up-item">
              <div className="count-up-content">
                <div className="count-up-info">
                  <div className="count-up-first" ref={ref}>
                    {inView && <CountUp start={0} end={650} duration={2.75} />}
                  </div>
                  <div className="count-up-decor"></div>
                  <div className="count-up-sec">guests</div>
                </div>
              </div>
            </div>

            <div className="count-up-item">
              <div className="count-up-content">
                <div className="count-up-info">
                  <div className="count-up-first" ref={ref}>
                    {inView && (
                      <CountUp start={0} end={1} duration={2.75} delay={1} />
                    )}
                    K
                  </div>
                  <div className="count-up-decor"></div>
                  <div className="count-up-sec width">cups of coffee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountedUp;
