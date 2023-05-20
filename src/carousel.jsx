import { Component } from 'react';
class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleImageIndex = (e) => {
    this.setState({ active: +e.target.dataset.index });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((img, index) => (
            <img
              data-index={index}
              onClick={this.handleImageIndex}
              key={img}
              src={img}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
