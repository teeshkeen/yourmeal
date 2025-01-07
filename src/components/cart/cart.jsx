const Cart = ({ cart, cartRef, openCartModal }) => {
    return (
      <div className="cart" ref={cartRef} onClick={openCartModal}>
        <div className="cart__inner">
          <div className="cart__header">
            <div className="cart__header-title">Корзина</div>
            <div className="cart__header-count">{cart.reduce((total, item) => total + item.quantity, 0)}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;