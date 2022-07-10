import { define } from 'remount'      
import Hello from "./components/Hello"
import Poop from "./components/Poop"
import SalesPage from './components/SalesPage'
                                      
define({ 'hello-component': Hello })                                    
define({ 'poop-component' : Poop }) 
define({ 'sales-page'     : SalesPage })
