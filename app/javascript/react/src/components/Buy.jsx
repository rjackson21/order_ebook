import * as React from 'react'                          
import * as ReactDOM from 'react-dom'                   
                                                        
const Buy = () => {                                   
  return (
    <a href="https://react.school" target="_blank">
      <button class="bg-black text-white p-4 shadow-lg rounded w-full"> Buy Now </button>
    </a>
    )                   
}                                        
// Use it if you don't plan to use "remount"                
// document.addEventListener('DOMContentLoaded', () => {     
  // ReactDOM.render(<Hello />, document.getElementById('hello'))                  
// })                                                    
                                                        
export default Buy