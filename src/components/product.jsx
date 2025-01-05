const Products = ({ selectedSlide, openProductModal, addToCart }) => {
    return (
      <div className="products">
        <div className="products__inner">
          <div className="products__header">{selectedSlide.name}</div>
          <div className="products__list">
            {selectedSlide.products.map((product) => (
              <div className="products__list-item" key={product.id} onClick={() => openProductModal(product)}>
                <img className='products__item-image' src={product.image} alt={product.name} />
                <div className='products__item-desc'>
                  <div className="products__item-desc-main">
                    <div className="products__item-desc-main-cost">{product.price}₽</div>
                    <div className="products__item-desc-main-name">{product.name}</div>
                  </div>
                  <div className="products__item-desc-weight">{product.weight}</div>
                </div>
                <div className="products__item-btn" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Добавить</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Products;