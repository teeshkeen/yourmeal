import React from 'react'
import deliveryIcon from '../../assets/icons/delivery.svg';

const CartDesktop = ({cart, calculateTotal, calculateTotalQuantity, updateQuantity}) => {
  return (
    <div className="cart-desktop">
      <div className="cart-modal">
          <div className="cart-modal__content">
            <div className="modal-cart">
              <div className="modal-cart__inner">
                <div className="cart__header">
                  <div className="cart__header-title">Корзина</div>
                  <div className="cart__header-count">{calculateTotalQuantity()}</div>
                </div>
                {calculateTotalQuantity() === 0 ? (
                  <div className="cart__empty">Тут пока пусто ;(</div>
                ) : (
                  <div className="cart__products">
                    {cart.map(item => (
                      <div className="cart__products-item" key={item.id}>
                        <div className='cart__products-item-info'>
                          <img className='cart__products-item-info-image' src={item.image} alt={item.name} />
                          <div className="cart__products-item-info-text">
                            <div className="cart__products-item-info-text-title">{item.name}</div>
                            <div className="cart__products-item-info-text-weight">{item.weight}</div>
                            <div className="cart__products-item-info-text-cost">{item.price}₽</div>
                          </div>
                        </div>
                        <div className="cart__products-item-counter">
                          <div className="cart__products-item-counter-element" onClick={() => updateQuantity(item.id, -1)}>-</div>
                          <div className='cart__products-item-counter-element'>{item.quantity}</div>
                          <div className="cart__products-item-counter-element" onClick={() => updateQuantity(item.id, 1)}>+</div>
                        </div>
                      </div>
                    ))}
                    <div className="modal-cart__total">
                      <span>Итого</span>
                      {calculateTotal() > 600 ? (
                        <span>{calculateTotal()}₽</span>
                      ) : (
                        <span>{calculateTotal() + (calculateTotal() * 30 / 100)}₽</span>
                      )}
                    </div>
                    <div className='modal-cart__submit'>Оформить заказ</div>
                    <div className="modal-cart__footer">
                      <div className="modal-cart__footer-delivery">
                        <img src={deliveryIcon} alt="Доставка" />
                        {calculateTotal() > 600 ? (
                          <span>Доставка бесплатно!</span>
                        ) : (
                          <span>Доставка {calculateTotal() * 30 / 100}₽</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default CartDesktop