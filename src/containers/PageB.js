import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'assets/main.scss'
let cx = classNames.bind(styles);

class PageB extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className={cx("page", "page-a")}>
        PageB
      </div>
    )
  }
}


export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  })
)(PageB);
