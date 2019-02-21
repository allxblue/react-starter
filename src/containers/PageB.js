import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'
import styles from './PageB.module.scss'
import * as actions from 'store/actions'

let cx = classNames.bind(styles);

@connect(
  state => ({
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)

class PageB extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className={cx("page", "page-b")}>
        PageB
      </div>
    )
  }
}

export default PageB
