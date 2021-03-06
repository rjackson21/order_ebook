import { define } from 'remount'  
import Logo from './components/Logo'
import ImageA from "./components/ImageA"    
import ImageB from "./components/ImageB"
import ImageC from "./components/ImageC"
import Ipad from "./components/Ipad"
import Buy from "./components/Buy"
import Blurb from "./components/Blurb"
import SalesPage from './components/SalesPage'

define({ 'logo-component': Logo }) 
define({ 'imagea-component': ImageA })      
define({ 'imageb-component': ImageB })      
define({ 'imagec-component': ImageC })                           
define({ 'ipad-component' : Ipad }) 
define({ 'buy-component': Buy }) 
define({ 'blurb-component': Blurb }) 
define({ 'sales-page'     : SalesPage })
