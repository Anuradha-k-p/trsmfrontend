
import React, { useContext } from 'react';
import { Store } from '../Context/ContextData';
import "./Compo.css";
import { useNavigate } from 'react-router-dom';


const Packages = () => {
    const [received] = useContext(Store);
   const navigate = useNavigate();
  
    const token = localStorage.getItem('token');

    if (!token) {
       
        alert('Access denied. Please login to access this page.');
       
        navigate('/login');
        
    }
    //const [showBlur, setShowBlur] = useState(false);
    
   
   

    return (
      token?  <>
        
        <div className="fx">
           
                <h1>India Tours Packages By Themes</h1>
                <p>India Tours is one of the most beautiful countries in the world, and to explore it fully holiday packages in India such as these can be availed. To better understand and experience India's geographical and cultural diversity, there is a wide range of India tour packages for travelers to pick from. Varying from destination to destination, these domestic tour packages in India take you for a relaxing vacation to beautiful hill-stations, quaint towns, cosmopolitan metros, and amazing beach cities. Choose to relax for a few days, or enjoy adventure packed tours of India, the choice is yours. Exploring India is an easy task if you can choose the right tour packages in India. You can choose a tour according to the different themes, destinations, durations or interests. You will get some incredible variations and it will be an amazing vacation for you, without a doubt! Be it a relaxed holiday in one of the hill stations, an adventurous one in a beach destination, a calming one in the backwaters or a thrilling one in a wildlife sanctuary, you will find it all. You can behold the best of ethnic history in the havelis of Rajasthan or get the best of your spiritual inclination at the various temples in the Southern India. The snow-capped mountains in the Himalayan range is sure to give you the chills and the huge coastline of numerous, picturesque beaches will simply take your breath away! Browse through our specially-crafted list of India holiday packages below to find your preferred trip. Think of India and we cater to your interests or we can help you customize your trip.</p>
                <div className='container1'>
                    {received.filter((item) => item.category === "package")
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
          
        </>:<div className='access'><img src='https://media.istockphoto.com/id/1877502857/vector/secure-personal-data-using-password-protection-cyber-security-network-data-security.jpg?s=2048x2048&w=is&k=20&c=XWf4BcAQ4_UQ9uoo-NLzq2VLnpAk5ppteLlXNa6gOus=' alt='denied'/></div>
    );
};

export default Packages;

