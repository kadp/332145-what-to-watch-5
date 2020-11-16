import React, {PureComponent} from "react";
import {DEFAULT_FORM_REVIEW} from "../../constants";


const withAddNewReview = (Component) => {
  class WithAddNewReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: DEFAULT_FORM_REVIEW.TEXT,
        author: DEFAULT_FORM_REVIEW.AUTHOR,
        date: DEFAULT_FORM_REVIEW.DATE,
        raiting: DEFAULT_FORM_REVIEW.RAITING,
      };

      this.defaultRating = DEFAULT_FORM_REVIEW.RAITING;
      this.handleTextOnChange = this.handleTextOnChange.bind(this);
      this.handleRatingOnChange = this.handleRatingOnChange.bind(this);
      this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
    }

    handleTextOnChange(e) {
      this.setState({
        text: e.target.value,
      });
    }

    handleRatingOnChange(e) {
      this.setState({
        raiting: e.target.value,
      });
    }

    handleButtonSubmit(e) {
      e.preventDefault();
      this.setState({
        text: `Текс сообщения`,
        author: `Авторизированный пользователь`,
        date: `Текущая дата`,
        raiting: `Выбранное колличество звезд`,
      });
    }
    render() {
      return (
        <Component
          {...this.props}
          onTextChange={this.handleTextOnChange}
          onRaitingChange={this.handleRatingOnChange}
          onSubmit={this.handleButtonSubmit}
          defaultState={this.state}
        />
      );
    }
  }

  return WithAddNewReview;
};

export default withAddNewReview;
