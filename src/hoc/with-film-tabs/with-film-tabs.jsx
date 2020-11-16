import React, {PureComponent} from "react";


const withFilmTabs = (Component) => {
  class WithFilmTabs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeLink: `Overview`,
      };

      this.onHandleClick = this.onHandleClick.bind(this);
    }

    onHandleClick(e) {
      e.preventDefault();
      this.setState({
        activeLink: e.target.textContent,
      });
    }

    render() {
      return <Component {...this.props} activeLink={this.state.activeLink} onLinkClick={this.onHandleClick}/>;
    }
  }

  return WithFilmTabs;
};

export default withFilmTabs;
