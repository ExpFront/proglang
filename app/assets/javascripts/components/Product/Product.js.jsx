class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.data;

    return (
      <li className="product">
        <div className="product__title">
          {product.title}
        </div>

        <div className="product__logo">
          <img className="product__image" src={product.image_url} alt="Товар" />
        </div>

        <p className="product__description">
          {product.description}
        </p>

        <button className="product__buy">
          Купить за {product.price}
        </button>
      </li>
    );
  }
}
