import * as React from 'react'                          
import axios from "axios"
                                                        
const Buy = () => {                                   
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/stripe_checkouts/index', {
    })
    .then(function (response) {
      console.log("successful response", response);
      window.location = response.data.session_url
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <button className="bg-black text-white p-4 shadow-lg rounded w-full" onClick={(event) => handleSubmit(event)}> 
      Buy Now 
    </button>
  )                   
}                                        
// Use it if you don't plan to use "remount"                
// document.addEventListener('DOMContentLoaded', () => {     
  // ReactDOM.render(<Hello />, document.getElementById('hello'))                  
// })                                                    
                                                        
export default Buy