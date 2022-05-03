// import { ProductContextProvider } from './context/ProductContext';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';

// For some reason, React is not rendering when I use Context Provider
// and it doesn't show any errors on the console which is really confusing.
// So I have to use global state manually by passing it down level by level,
// but I will come back to refactor the code to useContext API when I figure out the problem
function App() {
	const [productQuantity, setProductQuantity] = useState(0);
	const [cartProductQuantity, setCartProductQuantity] = useState(0);
	return (
		<>
			<Navbar
				cartProductQuantity={cartProductQuantity}
				setCartProductQuantity={setCartProductQuantity}
			/>
			<Product
				productQuantity={productQuantity}
				setProductQuantity={setProductQuantity}
				setCartProductQuantity={setCartProductQuantity}
			/>
		</>
	);
}

export default App;
