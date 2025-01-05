import closeIcon from '../assets/icons/close.svg';

const ProductModal = ({ selectedProduct, closeProductModal, addToCart }) => {
  return (
    <div className="product-modal">
      <div className="product-modal__content">
        <div className="product-modal__content-group">
          <div className="product-modal__content-close">
            <img onClick={closeProductModal} src={closeIcon} alt="Закрыть" />
          </div>
          <div className="product-modal__content-item">
            <span className='product-modal__content-item-title'>{selectedProduct.name}</span>
            <div className="product-modal__content-item-block">
              <img className="product-modal__content-item-image" src={selectedProduct.image} alt={selectedProduct.name} />
              <div className="product-modal__content-item-block-text">
                <p className='product-modal__content-item-description'>
                  Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.
                </p>
                <div className="product-modal__content-item-makeup">
                  <div className="product-modal__content-item-makeup-title">Состав:</div>
                  <ul className="product-modal__content-item-makeup-list">
                    <li className="product-modal__content-item-makeup-list-item">Пшеничная булочка</li>
                    <li className="product-modal__content-item-makeup-list-item">Котлета из говядины</li>
                    <li className="product-modal__content-item-makeup-list-item">Красный лук</li>
                    <li className="product-modal__content-item-makeup-list-item">Листья салата</li>
                    <li className="product-modal__content-item-makeup-list-item">Соус сорчичный</li>
                  </ul>
                  <div className="product-modal__content-item-makeup-weight">520г, ккал 430</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-modal__content-action">
          <div className="product-modal__content-action-btn" onClick={() => { addToCart(selectedProduct); closeProductModal(); }}>
            Добавить
          </div>
 <div className="product-modal__content-action-cost">{selectedProduct.price}₽</div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;