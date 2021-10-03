import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Followbut from "./Followbut";

const TrendsKeyword = () => {
  const [follow, setFollow] = useState(false);

  const handleclick = (e) => {
    setFollow(!follow);
  };
  const [state, setState] = React.useState([
    {
      img: "https://static.toiimg.com/thumb/msid-81962007,width-1070,height-580,imgsize-47597,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      name: "Shreyas Iyer",
      location: "@mumbai",
      email: "@ShreyasIyer15",
      profession:
        "Professional Cricketer Flag of India l For enquiries, contact: shreyas.manager@riseworldwide.in",
      followers: "15m",
    },
    {
      img: "https://static.toiimg.com/thumb/msid-81962007,width-1070,height-580,imgsize-47597,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      name: "Shreyas Iyer",
      location: "@mumbai",
      email: "@ShreyasIyer15",
      profession:
        "Professional Cricketer Flag of India l For enquiries, contact: shreyas.manager@riseworldwide.in",
      followers: "15m",
    },
    {
      img: "https://static.toiimg.com/thumb/msid-81962007,width-1070,height-580,imgsize-47597,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      name: "Shreyas Iyer",
      location: "@mumbai",
      email: "@ShreyasIyer15",
      profession:
        "Professional Cricketer Flag of India l For enquiries, contact: shreyas.manager@riseworldwide.in",
      followers: "15m",
    },
    {
      img: "https://static.toiimg.com/thumb/msid-81962007,width-1070,height-580,imgsize-47597,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      name: "Shreyas Iyer",
      location: "@mumbai",
      email: "@ShreyasIyer15",
      profession:
        "Professional Cricketer Flag of India l For enquiries, contact: shreyas.manager@riseworldwide.in",
      followers: "15m",
    },
    {
      img: "https://static.toiimg.com/thumb/msid-81962007,width-1070,height-580,imgsize-47597,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      name: "Shreyas Iyer",
      location: "@mumbai",
      email: "@ShreyasIyer15",
      profession:
        "Professional Cricketer Flag of India l For enquiries, contact: shreyas.manager@riseworldwide.in",
      followers: "15m",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>You might like</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <span>
              <img
                src={keyword.img}
                height="30px"
                width="30px"
                style={{ borderRadius: "50%" }}
              />
              <div className="keyword__name">
                <strong>{keyword.name}</strong>
              </div>
            </span>
            <Followbut handleclick={handleclick} follow={follow} />

            <div className="country">{keyword.location}</div>

            <div className="keyword__tweets">{keyword.profession}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;
