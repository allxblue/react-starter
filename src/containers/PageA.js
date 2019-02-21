import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'assets/main.scss'
let cx = classNames.bind(styles);

class PageA extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className={cx("page", "page-a")}>
        PageA
      </div>
    )
  }
}


export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  })
)(PageA);
