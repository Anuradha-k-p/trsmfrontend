import React, { useContext } from 'react';
import { Store } from '../Context/ContextData';
import "./Compo.css"


const PlaceVisit = () => {
    const [received] = useContext(Store);
    console.log(received)


    return(
        <>
        <div className='fx'>
        <h1>Top Tourist Destination India</h1>
        <p>

<b className='clr'>Top Tourist Destination India</b> is the home to numerous attractions, amenities, activities and beauties. It is not hard to believe that a land as diverse as India has a long list of travel destinations within its border. Starting from the valleys of <b>Kashmir</b> to the tri-colored sea of <b>Kanchipuram</b>, you will find numerous tourist attractions, which would suit your taste. If you were visiting India in winter, <b>Rajasthan</b>, <b>Agra</b>, <b>Maharashtra</b>, <b>Tamil Nadu</b>, <b>Kerala</b>, <b>Chandigarh</b>, <b>Karnataka</b>, Goa and other places would be in the top choice. If you choose to visit India in the monsoon, <b>Uttarakhand</b>, <b>Munnar</b>, <b>Mussorie</b>, <b>Cherrapunji</b> and Coorg are some of the places to choose. 

  </p>



  <div className='placelist'>

  {received.filter((item) => item.category === "visit")
    .map((item, index) => {
        return (

            <div className="card" key={index}>
                <div className="title">
                    <h3>{item.title}</h3>
                </div> 

                <img
                    src={item.photo} 
                    alt="not found"
                />
                <p>{item.location1}</p>
                <p>{item.location2}</p>
                <p>{item.location3}</p>
                <p>{item.location4}</p>
                <p>{item.location5}</p>
                
            </div>
        );
    })}



  </div>





        </div>
        
        </>
    )
}


export default PlaceVisit;