import { define } from 'remount'  
import ImageA from "./components/ImageA"    
import ImageB from "./components/ImageB"
import ImageC from "./components/ImageC"
import Ipad from "./components/Ipad"
import Buy from "./components/Buy"
import SalesPage from './components/SalesPage'

define({ 'imagea-component': ImageA })      
define({ 'imageb-component': ImageB })      
define({ 'imagec-component': ImageC })                           
define({ 'ipad-component' : Ipad }) 
define({ 'buy-component': Buy }) 
define({ 'sales-page'     : SalesPage })
