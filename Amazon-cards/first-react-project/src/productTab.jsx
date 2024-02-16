import Tabs from './tabs.jsx';
import "./productTabb.css";

function ProductTab(){
  return(
    <div className='bigtab'>
    <Tabs title="Logitech MX Master 3X" idx={0}/>
    <Tabs title="Apple Pencil 2nd Gen" idx={1}/>
    <Tabs title="Zebronics Zeb transformer" idx={2}/>
    <Tabs title="Portonics toad 23 wireless mouse" idx={3}/>
    </div>
  )
}
export default ProductTab;