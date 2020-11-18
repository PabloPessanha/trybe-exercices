import React, { Component } from 'react';

class DogsAPI extends Component {
  constructor(props) {
    super(props);

    this.saveDogImage = this.saveDogImage.bind(this);

    this.state = {
      savedImages: [],
      currentImage: '',
    };
  }

  async fetchDogImage() {
    this.setState({ loading: true }, async () => {
      const endpoint = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await endpoint.json();
      this.setState({
        currentImage: data.message,
        loading: false,
      });
    });
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  saveDogImage() {
    this.setState(({ savedImages, currentImage }) => ({
      savedImages: [...savedImages, currentImage],
    }));

    this.fetchDogImage();
  }

  renderNewDog() {
    return (
      <div>
        <img src={this.state.currentImage} alt='' />
        <div>
          <button onClick={this.saveDogImage}>Salvar doguinho *_*</button>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.state.savedImages);
    return (
      <div>
        {this.state.savedImages.map((image, index) => {
          return <img src={image} alt='' key={index} />;
        })}

        {this.state.loading ? <p>Loading...</p> : this.renderNewDog()}
      </div>
    );
  }
}

export default DogsAPI;
