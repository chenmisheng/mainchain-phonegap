/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import classnames from 'classnames';
import { Spin } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import openWindow from '../../../utils/openWindow';

import './style.scss';

// https://www.8btc.com/article/505180

// images
class News extends Component {
  render() {
    const { loading, news } = this.props;
    if (loading) {
      return (
        <div id="news" className="container loading">
          <Spin />
        </div>
      );
    }

    return (
      <div id="news" className="container">
        {news.map(n => (
          <div className="shadow-pad" key={n.id} onClick={openWindow.bind(undefined, 'https://www.8btc.com/article/' + n.id)}>
            <div className="left">
              <img src={n.images[0] || n.images[1]} alt="" />
            </div>
            <div className="right">
              <div className="title">{n.title}</div>
              <div className="info">
                <span className="time">{moment(n.post_date * 1000).format('YYYY-MM-DD HH:mm:ss')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return {
    ...news,
  };
}

export default connect(mapStateToProps)(News);
