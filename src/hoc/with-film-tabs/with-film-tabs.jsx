import React, {PureComponent} from "react";
import {FILM_TABS} from "../../constants";


const withFilmTabs = (Component) => {
  class WithFilmTabs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeLink: FILM_TABS.OVERVIEW,
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.setState({
        activeLink: e.target.textContent,
      });
    }

    render() {
      return <Component {...this.props} activeLink={this.state.activeLink} onLinkClick={this.handleClick}/>;
    }
  }

  return WithFilmTabs;
};

export default withFilmTabs;
