// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { Store } from '../Context/ContextData';

// const Homedynamic = () => {
//     const{id } =useParams();
//     const [received] = useContext(Store);
//     console.log(received)

//     // const selecteditem  = received.filter(item => item.id=== parseInt(id,5));
//     // console.log(selecteditem)

//     // const categoryData = selecteditem.filter(item => item.category === category )
//     // console.log(categoryData)





   
    
//     return(
//         <>
//         <div className='fx'>

//         { received.filter((item)=>item.id===id).map((item,index)=>{
//                 return(
//                     <>
//                     <div key={index}>

                   
//                     <h1>{item.title}</h1>
//                     <p>{item.desc}</p>
//                     </div>
                    
                








                    
                    


//                     </>

//                      )})
//             }
// { received.gallary.map((item,index)=>{
//                 return(
//                     <>
//                     <div key={index}>

                   
//                     <h1>{item.image}</h1>
//                     <p>{item.decaptionsc}</p>
//                     </div>
                    
                








                    
                    


//                     </>

//                      )})
//             }



          




            




//         </div>
        
//         </>
//     )
// }


// export default Homedynamic;

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../Context/ContextData';

const Homedynamic = () => {
    const { id } = useParams();
    const [received] = useContext(Store);

    return (
        <div className='fx'>
            {received.filter(item => item.id === id).map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
            ))}

            {/* Rendering gallery */}
            {received.filter(item => item.id === id).map((item, index) => (
                <div key={index}>
                    <h2>Gallery</h2>
                    {item.data.gallery.map((imageItem, imageIndex) => (
                        <div key={imageIndex}>
                            <img src={imageItem.image} alt={imageItem.caption} />
                            <p>{imageItem.caption}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Homedynamic;
