import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'
import styles from './PageA.module.scss'
import * as actions from 'store/actions'

let cx = classNames.bind(styles);

@connect(
  state => ({
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)

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

export default PageA