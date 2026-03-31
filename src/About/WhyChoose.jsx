import { Progress, Tabs, Slider } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("1");

  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: "Experience",
      children: (
        <>
          <p className="why-choose-pera">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <div className="why-choose-first">
            <div className="why-choose-headding">professionalism</div>
            <Slider defaultValue={79} tooltip={{ open: activeTab === "1" }} />
          </div>

          <div className="why-choose-sec">
            <div className="why-choose-headding">Commitment</div>
            <Slider defaultValue={72} tooltip={{ open: activeTab === "1" }} />
          </div>

          <div className="why-choose-third">
            <div className="why-choose-headding">Architecture</div>
            <Slider defaultValue={88} tooltip={{ open: activeTab === "1" }} />
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "Skills",
      children: (
        <>
          <div className="progres">
            <Progress
              type="circle"
              percent={87}
              strokeColor="#ec7575"
              size={150}
              strokeWidth={8}
              strokeLinecap="butt"
              className="anticlockwise-progress"
            />
            <p className="progres-text">professionalism</p>
          </div>
          <div className="progres">
            <Progress
              type="circle"
              percent={74}
              strokeColor="#e7a855"
              size={150}
              strokeWidth={8}
              strokeLinecap="butt"
              className="anticlockwise-progress"
            />
            <p className="progres-text">Commitment</p>
          </div>
          <div className="progres">
            <Progress
              type="circle"
              percent={99}
              strokeColor="#50ba87"
              size={150}
              strokeWidth={8} 
              strokeLinecap="butt"
              className="anticlockwise-progress"
            />
            <p className="progres-text">Teamwork</p>
          </div>

          <div className="prograes-btn">
            <Link to="/" className="tab-link-first">
              Get in touch
            </Link>
            <Link to="/" className="tab-link-sec">
              View our team
            </Link>
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: "Mission",
      children: (
        <>
          <div className="why-choose-pera">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </div>
          <ul className="mission-un-list">
            <li>Experience</li>
            <li>Customer Service</li>
            <li>Personal Approach</li>
            <li>Dedication</li>
            <li>Enthusiasm</li>
            <li>Knowledge</li>
          </ul>

          <div className="prograes-btn">
            <Link to="/" className="tab-link-first">
              Get in touch
            </Link>
            <Link to="/" className="tab-link-sec">
              View our team
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="why-choose-outer">
      <div className="container">
        <div className="why-choose-inner">
          <div className="why-choose-item why-choose-item-l">
            <img src="assets/image/why-choose1.jpg" alt="one" />
          </div>

          <div className="why-choose-item why-choose-item-r">
            <h2>Why choose us</h2>
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              destroyInactiveTabPane
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
