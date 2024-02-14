import React, { useContext } from 'react';
import { Store } from '../Context/ContextData';
import "./Compo.css"
import { NavLink } from 'react-router-dom';


const IndiaTrsm = () => {
    const [received] = useContext(Store);
    return (
        <>
            <div className='fx'>
                <h1>Tourism of India</h1>
                <p>

                    India Tourism, <b className='clr'>Himachal Pradesh, Kerala, Goa, Madhya Pradesh, Gujarat, Maharashtra</b> along with a few others are some of the best <b className='clr'>places to visit</b> in India. With a variety of attractions, these places urge you to travel to your heart's content. And, whatever you are going to explore, will surely leave a long-lasting impression on you.
                    <b className='clr'>Beaches, backwaters</b>, vast stretches of <b className='clr'>deserts</b>, snow-laden peaks and Indian <b className='clr'>wildlife sanctuaries</b> make the country one of the best winter destinations. Tourism India during the winter season are perfect ways of bidding farewell to the previous year and welcoming the new one excitingly.
                    When the sun starts shining brightly, people throng the picturesque hill stations with snow-laden peaks. A perfect escape from the scorching heat and soaring temperature can be found only in India.

                </p>

                <div className='container1'>


                    {received.filter((item) => item.category === "tourism")
                        .map((item, index) => {
                            return (
                                <div className="container" key={index}>
                                    <img
                                        src={item.photo}
                                        alt="not found"
                                    />
                                    {/* <div id="Description2">

                                <NavLink to={`/trsmdynamic/${item.id}`}>

                                <h3>{item.title}</h3>
                                </NavLink>
                            </div> */}

                                    <div id="Description2">
                                        <NavLink to={`/trsmdynamic/${item.id}`} style={{ textDecoration: 'none' }}>

                                            <h3 className='dec'>{item.title}</h3>
                                        </NavLink>
                                    </div>
                                </div>
                            );
                        })}

                </div>








            </div>

        </>
    )
}


export default IndiaTrsm;






// import React from 'react';

// const items = [
//     {title: "Apple", category: "Fruit", data: "Data related to apples"},
//     {title: "Banana", category: "Fruit", data: "Data related to bananas"},
//     {title: "Carrot", category: "Vegetable", data: "Data related to carrots"},
//     // Add more items as needed
// ];

// class App extends React.Component {
//     render() {
//         const title = "Apple"; // Example title, you can change it as needed

//         // Find the item with the matching title
//         const matchingItem = items.find(item => item.title === title);

//         if (matchingItem) {
//             return (
//                 <div>
//                     <h2>Title: {matchingItem.title}</h2>
//                     <p>Category: {matchingItem.category}</p>
//                     <p>Data: {matchingItem.data}</p>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <p>No item found with the title {title}</p>
//                 </div>
//             );
//         }
//     }
// }

// export default App;
