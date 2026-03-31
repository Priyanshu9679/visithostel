import { useEffect } from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountedUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    const onScroll = () => {
      const width = window.innerWidth;
    let offset = 0;
    // console.log(width);
    
    if (width <= 319) {
      offset = 350;
    } else if (width <= 576) {
      offset = 430;
    } else if (width <= 766) {
      offset = 350;
    } else if (width <= 990) {
      offset = 320;
    } else if (width <= 1199) {
      offset = 260;
    } else {
      offset = 260;
    }

      document.documentElement.style.setProperty(
        "--y",
        `${window.scrollY * 0.1 - offset}px`,
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

//    useEffect(() => {
//   const onScroll = () => {
//     const width = window.innerWidth;
//     let offset = 0;
//     // console.log(width);
    
//     if (width <= 319) {
//       offset = 2400;
//     } else if (width <= 479) {
//       offset = 2700;
//     } else if (width <= 520) {
//       offset = 2600;
//     } else if (width <= 576) {
//       offset = 2850;
//     // } else if (width <= 576) {
//     //   offset = 2700;
//       } else if (width <= 639) {
//         offset = 2200;
//     } else if (width <= 648) {
//       offset = 2100;
//     // } else if (width <= 649) {
//     //   offset = 2200;
//     } else if (width <= 766) {
//       offset = 2105;
//     } else if (width <= 990) {
//       offset = 1627;
//     } else if (width <= 1199) {
//       offset = 1425;
//     } else {
//       offset = 1240;
//     }

//     document.documentElement.style.setProperty(
//       "--y",
//       `${window.scrollY * 0.2 - offset}px`
//     );
//   };

//   window.addEventListener("scroll", onScroll);

//   return () => window.removeEventListener("scroll", onScroll);
// }, []);

  return (
    <>
      <div className="count-up-a-outer">
        <div className="count-up-a-inner">
          <div className="count-up-a-item">
            <div className="count-up-a-image">
              <div className="count-up-a-image-inner">
                <div className="count-up-a-image-item">
                  <div className="count-up-a-image-image">
                    <img src="assets/image/countedup2.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="count-up-a-info">
              <div className="container">
                <div className="count-up-a-info-inner">
                  <div className="count-up-a-info-item" ref={ref}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={650}
                        duration={2.75}
                        className="count-up-a-info-first"
                      />
                    )}
                    <p>Happy Guests</p>
                  </div>
                  <div className="count-up-a-info-item" ref={ref}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={348}
                        duration={2.75}
                        className="count-up-a-info-first"
                      />
                    )}
                    <p>Recommendations</p>
                  </div>
                  <div className="count-up-a-info-item" ref={ref}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={1}
                        duration={2.75}
                        delay={0.3}
                        className="count-up-a-info-first"
                      />
                    )}
                    <span className="font-s">K</span>
                    <p>cups of coffee</p>
                  </div>
                  <div className="count-up-a-info-item" ref={ref}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={12}
                        duration={2.75}
                        delay={0.3}
                        className="count-up-a-info-first"
                      />
                    )}
                    <p>awards</p>
                  </div>
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
