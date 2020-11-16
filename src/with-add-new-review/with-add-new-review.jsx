import React, {PureComponent} from "react";

const withAddNewReview = (Component) => {
  class WithAddNewReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
        author: `NewUser`,
        date: `November 27, 2020`,
        raiting: `3`,
      };

      this.defaultRating = `3`;
      this.onHandleTextOnChange = this.onHandleTextOnChange.bind(this);
      this.onHandleRatingOnChange = this.onHandleRatingOnChange.bind(this);
      this.onHandleButtonSubmit = this.onHandleButtonSubmit.bind(this);
    }

    onHandleTextOnChange(e) {
      this.setState({
        text: e.target.value,
      });
    }

    onHandleRatingOnChange(e) {
      this.setState({
        raiting: e.target.value,
      });
    }

    onHandleButtonSubmit(e) {
      e.preventDefault();
      this.setState({
        text: ``,
        author: `NewUser`,
        date: `November 27, 2020`,
        raiting: `3`,
      });
    }
    render() {
      return (
        <Component
          {...this.props}
          text={this.onHandleTextOnChange}
          raiting={this.onHandleRatingOnChange}
          submit={this.onHandleButtonSubmit}
          defaultState={this.state}
        />
      );
    }
  }

  return WithAddNewReview;
};

export default withAddNewReview;
