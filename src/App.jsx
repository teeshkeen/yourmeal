import { useState, useRef } from 'react';
import { products } from './utils/data.js';

import Header from './components/header/header';
import Categories from './components/categories/categories';
import Cart from './components/cart/cart.jsx';
import CartModal from './components/cart/cartModal.jsx';
import CartDesktop from './components/cart/cartDesktop.jsx';
import Products from './components/products/products';
import ProductModal from './components/productModal/productModal';
import Footer from './components/footer/footer';

function App() {
    const [cart, setCart] = useState([]);
    const [selectedSlide, setSelectedSlide] = useState(products[0]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const cartRef = useRef(null);

    const handleSelectSlide = (prod) => {
        setSelectedSlide(prod);
    };

    const openCartModal = () => {
        if (cartRef.current) {
            const rect = cartRef.current.getBoundingClientRect();
            setModalPosition({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
            });
            setIsCartModalOpen(true);
        }
    };

    const openProductModal = (product) => {
        if (window.innerWidth < 475) {
            const scrollY = document.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `${scrollY}px`;
            document.body.style.width = '100%';
        }

        isCartModalOpen ? setIsCartModalOpen(false) : null;
        setSelectedProduct(product);
        setIsProductModalOpen(true);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    const closeProductModal = () => {
        if (window.innerWidth < 475) {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        setIsProductModalOpen(false);
        setSelectedProduct(null);
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, delta) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
        }).filter(item => item !== null));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };


    return (
        <div className="app">
            <Header />
            <Categories products={products} selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide} handleSelectSlide={handleSelectSlide} />
            <Cart cart={cart} cartRef={cartRef} openCartModal={openCartModal} />
            <div className="block">
                <CartDesktop cart={cart} calculateTotal={calculateTotal} calculateTotalQuantity={calculateTotalQuantity} updateQuantity={updateQuantity} />
                <Products selectedSlide={selectedSlide} openProductModal={openProductModal} addToCart={addToCart} />
            </div>
            <Footer />
            {isCartModalOpen && (
                <CartModal
                    cart={cart}
                    closeCartModal={closeCartModal}
                    calculateTotal={calculateTotal}
                    calculateTotalQuantity={calculateTotalQuantity}
                    modalPosition={modalPosition}
                    updateQuantity={updateQuantity}
                />
            )}
            {isProductModalOpen && selectedProduct && (
                <ProductModal
                    selectedProduct={selectedProduct}
                    closeProductModal={closeProductModal}
                    addToCart={addToCart}
                />
            )}
        </div>
    );
}

export default App;