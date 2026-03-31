import React from "react";
import { Tabs } from 'antd';
import { Link } from "react-router-dom";

const onChange = key => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'About us',
    children: (
      <p>
        Our hostel was founded in 2008 to provide travelers on a budget from all over the world with affordable yet highly comfortable accommodation that they could enjoy.
        <br />
        <Link to="/" className="tab-link-first">Get in touch</Link>
        <Link to="/" className="tab-link-sec">Read more about us</Link>
      </p>
    ),
  },
  {
    key: '2',
    label: 'Why choose us',
    children: (
      <p>
        We are one of the most popular hostels for the guests of our city. Our hostel was awarded the “Best US Hostel” in 2023 for the unique approach to our clients and visitors.
        <br />
        <Link to="/" className="tab-link-first">Get in touch</Link>
        <Link to="/" className="tab-link-sec">Read more about us</Link>
      </p>
    ),
  },
  {
    key: '3',
    label: 'Our mission',
    children: (
      <p>
        Our mission is to promote a dynamic community of global citizens who have the wisdom and humanity to actively make the world a better place for everyone.
        <br />
        <Link to="/" className="tab-link-first">Get in touch</Link>
        <Link to="/" className="tab-link-sec">Read more about us</Link>
      </p>
    ),
  },
];


const City = () => {
    return(

        <>
            <div className="city-outer">
                <div className="container">
                    <div className="city-inner">
                        <div className="city-item-left">
                            <div className="city-item-image">
                                <img src="assets/image/city1.jpg" alt="city Images" />
                            </div>
                        </div>
                        <div className="city-item-right">
                            <div className="city-item-info">
                                <h2>best city hostel</h2>
                                <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="city-tabs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default City
