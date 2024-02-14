import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../Context/ContextData';
import { BsTrainLightrailFrontFill } from "react-icons/bs";
import { IoAirplane } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";


const TrsmDynamic = () => {
    const{id} =useParams();
    const [received] = useContext(Store);
    // const {category} =useParams()

    // const matchingItem = received.find(item => item.title === category)
    // console.log(matchingItem)
   

    return(
        <>
        <div className='fx'>

            { received.filter((item)=>item.id===id).map((item,index)=>{
                return(
                    <>
                    <h1>{item.title}</h1>
                    <p>{item.des}</p>
                    <b className='clr'>History</b><br/>
                    <p>{item.history}</p>
                    <b className='clr'>Fairs & Festivals</b><br/>
                    <p>{item.fair}</p>
                    <b className='clr'>Best Time to Visit</b><br/>
                    <p>{item.time}</p>
                    <b className='clr'>How to Reach :-</b><br/><br/>
                    <b className='clr'> <IoAirplane />   BY AIR - </b><p>{item.air}</p>
                    <b className='clr'> <BsTrainLightrailFrontFill />   BY RAIL - </b><p>{item.rail}</p>
                    <b className='clr'> <FaBusAlt />   BY ROAD - </b><p>{item.road}</p>
                    <br/>
                    <b className='clr'>Tourist Attractions</b>
                    <p>{item.attraction}</p>






                    
                    


                    </>

                     )})
            }

            

         <h1>duration</h1>
            <div>
                
            </div>

        </div>
        
        </>
    )
}



export default TrsmDynamic;
