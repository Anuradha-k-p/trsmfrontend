import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Compo.css"

export default function Crousal(){
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:2828/api/tour")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err, "error"));
    }, []);

    return(
        <div className="carousel-container" style={{ width: '100%', height: '60vh' }}>
            <Carousel
                key={data.length} 
                autoPlay
                className="slider"
                infiniteLoop={true}
                useKeyboardArrows
                stopOnHover={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                {data.filter((item)=>item.category==="crousal").map((images, index) => (
                    <div key={index} className="cr">
                        <img src={images.photo} alt="not found" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
