import Description from "./description.jsx";
import Price from './price.jsx';
import "./productTabb.css";

const description1 =["8,000 DPI","Intutive touch surface","Intutive touch surface","wireless mouse 2.4G HZ"];
const description2 =["5 Programmable buttons","Designed for I-pad pro","Designed for I-pad pro","Optimal orientation"];
const price1 =["12,456","11,765","1,650","599"];
const price2 =["11,423","9,430","999","520"];
function Tabs({title ,idx}){
    return(
        <div className='smalltab'>
        <h4>{title}</h4>
        <Description olddes={description1[idx]} newdes={description2[idx]}/>
        <div className="price">
        <Price oldprice={price1[idx]} newprice={price2[idx]}/>
        </div>
        </div>
    )
}
export default Tabs;