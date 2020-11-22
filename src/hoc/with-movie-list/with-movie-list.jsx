import React, {PureComponent} from "react";
import Card from "../../components/card/card";


const withMovieList = (Component) => {
  class WithMovieList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentId: null,
      };

      this.timer = null;
      this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
      this.handleCardMouseOut = this.handleCardMouseOut.bind(this);
      this.handleCardClick = this.handleCardClick.bind(this);
      this.getIsPreview = this.getIsPreview.bind(this);
    }

    handleCardMouseOver(id) {
      if (this.timer === null) {
        this.timer = setTimeout(() => {
          this.setState({currentId: id});
        }, 1000);
      }
    }

    handleCardMouseOut() {
      this.setState({
        currentId: null,
      });
      clearTimeout(this.timer);
      this.timer = null;
    }

    // eslint-disable-next-line no-unused-vars
    handleCardClick(id) {

    }

    getIsPreview(id) {
      return parseInt(this.state.currentId, 10) === id;
    }

    render() {

      return (
        <Component
          {...this.props}
          renderCard={(film) => {
            return (
              <Card
                key={film.id}
                id={film.id}
                title={film.name}
                poster={film.preview_image}
                trailer={film.preview_video_link}
                isPreview={this.getIsPreview(film.id)}
                onHover={this.handleCardMouseOver}
                onOut={this.handleCardMouseOut}
                onClick={this.handleCardClick}
              />
            );
          }}
        />
      );
    }
  }

  return WithMovieList;
};

export default withMovieList;
