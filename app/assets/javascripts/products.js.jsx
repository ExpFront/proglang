class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProducts() {
    const products = this.props.data;

    return products.map(item => <Product data={item} key={item.id} />);
  }
  render() {
    return (
      <div className="products">
        <ul className="products__list">
          {this.renderProducts()}
        </ul>
      </div>
    );
  }
}
