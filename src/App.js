import './App.css';
import Inventory from './Inventory'
import Cart from './Cart'
import { groceries } from './assets'
import { useState } from 'react'

function App() {
  const [ inventory, setInventory ] = useState(groceries)
  const [ cart, setCart ] = useState( [] )


  const handleInventory = item => {
    setInventory(
      (prev)=>(prev.filter(pick => pick.name !== item.name)))
    setCart([...cart, item])
  }

  const handleCart = item => {
    setCart(cart.filter(pick => pick.name !== item.name))
    setInventory([...inventory, item])
  }

  return (
    <div className="App">
      <Inventory inventory={inventory} handleInventory={handleInventory} />
      <Cart cart={cart} handleCart={handleCart} />
    </div>
  );
}

export default App;
