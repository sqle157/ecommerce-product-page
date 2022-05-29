// import { useState, createContext } from 'react';

// const ProductContext = createContext();

// export const ProductProvider = ({ chidlren }) => {
// 	const [productQuantity, setProductQuantity] = useState(0);
// 	const [cartProductQuantity, setCartProductQuantity] = useState(0);

// 	// Handle action add items to cart
// 	const handleAddToCart = () => {
// 		setCartProductQuantity((prevState) => prevState + productQuantity);
// 		setProductQuantity(0);
// 	};

// 	return (
// 		<ProductContext.Provider
// 			value={{ productQuantity, cartProductQuantity, setProductQuantity, handleAddToCart }}>
// 			{chidlren}
// 		</ProductContext.Provider>
// 	);
// };

// export default ProductContext;
