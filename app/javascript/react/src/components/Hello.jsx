import * as React from 'react'                          
import * as ReactDOM from 'react-dom'  
                                                        
const Hello = () => {                                   
    return (
    <div class="flex-col">
        <img src="../images/dress.jpg" width='400' height='500' />
        <img src="../images/skirt.jpg" width='400' height='500'/>
        <img src="../images/skirt.jpg" width='400' height='500'/>
    </div>)                  
  }  

                                                     
    

                                        
// Use it if you don't plan to use "remount"                
// document.addEventListener('DOMContentLoaded', () => {     
  // ReactDOM.render(<Hello />, document.getElementById('hello'))                  
// })                                                    
                                                        
export default Hello