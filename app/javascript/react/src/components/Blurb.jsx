import * as React from 'react'                          
import * as ReactDOM from 'react-dom'                   
                                                        
const Blurb= () => {                                   
  return (
    <p> A modest collection of 19 recipes that will make going vegan much easier. 
        The easiest way to stick to a new vegan diet is to get in the kitchen and cook! 
        The goal of this book is to get you to do so.
    </p>
    )                   
}                                        
// Use it if you don't plan to use "remount"                
// document.addEventListener('DOMContentLoaded', () => {     
  // ReactDOM.render(<Hello />, document.getElementById('hello'))                  
// })                                                    
                                                        
export default Blurb