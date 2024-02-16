
import './App.css';
import ProductTab from './productTab.jsx';

let styles = {
  backgroundColor : "RGB(175, 238, 238)",
  color : "black",
  borderRadius : "20px",
  padding : "1rem 1.5rem 1rem 1.5rem"
}
function App() {
  return(
    <div style={styles}>
    <h2>Blockbustor Deals! Shop now</h2>
     <ProductTab />
    </div>
  )
  }
export default App
