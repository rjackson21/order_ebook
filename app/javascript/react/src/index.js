import { define } from 'remount'      
import Images from "./components/Images"
import Poop from "./components/Poop"
import SalesPage from './components/SalesPage'
                                      
define({ 'images-component': Images })                                    
define({ 'poop-component' : Poop }) 
define({ 'sales-page'     : SalesPage })
