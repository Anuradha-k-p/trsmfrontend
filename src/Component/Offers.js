import React, { useContext } from 'react';
import { Store } from '../Context/ContextData';
import "./Compo.css"
import { useNavigate } from 'react-router-dom';


const Offers = () => {
    const [received] = useContext(Store);
    console.log(received)
    const navigate = useNavigate();
  
    const token = localStorage.getItem('token');

    if (!token) {
       
        alert('Access denied. Please login to access this page.');
       
        navigate('/login');
        
    }

    return(
        token?  
        <>
        <div className='fx'>

        <h1>India Special Offer Tour Packages</h1>
        <p>


<b className='clr'>India Special Offer Tour</b> contains the particularly special experience of India. Such as <b className='clr'>Luxury Tours,</b> Pilgrimage tours for all the religion people, <b className='clr'>Festival tours</b> of India etc. <b className='clr'>Do Dham, char Dham,</b> Hemkund Saheb, Ponta Saheb, Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque &amp; Dargah tours under Piligrimage tour. Festivals of North East, <b className='clr'>Ladakh,</b> Rajasthan etc are very popular among the tourist. We also orgainise tour for some particular interest like short trekking in the Himalayan region, <b className='clr'>camel safari</b> in Rajasthan, <b className='clr'>Honeymoon tours,</b> trout fishing in the still lakes of Himalayan valleys, house boat holidays in <b className='clr'>Kerala</b> or <b className='clr'>Kashmir,</b> White water rafting on Ganges and other rivers and so on. Create memoirs that last a lifetime by exploring the much admired places of India. We tender affordable and attractive <b className='clr'>India Tour Packages</b> to suit the needs of every tourist. Choosing any of these <b className='clr'>holiday packages</b> will provide you with wholesome experiences that you will love to treasure with your friends in joyful time.


  </p> <br/>
        <div className='container1'>

     
{received.filter((item) => item.category === "offer")
    .map((item, index) => {
        return (
            <div className="container" key={index}>
                <img
                    src={item.photo} 
                    alt="not found"
                />
                <div id="Description2">
                    <h3>{item.title}</h3>
                </div>
            </div>
        );
    })}

</div>



        </div>
        
        </>
        :<div className='access'><img src='https://media.istockphoto.com/id/1877502857/vector/secure-personal-data-using-password-protection-cyber-security-network-data-security.jpg?s=2048x2048&w=is&k=20&c=XWf4BcAQ4_UQ9uoo-NLzq2VLnpAk5ppteLlXNa6gOus=' alt='denied'/></div>
    )
}


export default Offers;