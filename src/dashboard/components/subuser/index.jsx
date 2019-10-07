/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'dva';
import './style.scss';

// images
class Subuser extends Component {
  render() {
    const { list } = this.props;
    // const list = [{
    //   vip_level: 'p1',
    //   count: 2,
    // }];

    return (
      <div id="subuser" className="container">
        {list.map(item => (
          <div className="item shadow-pad" key={item.vip_level}>
            <div className="lv">
              <span className="text">{item.vip_level.toUpperCase()}</span>
            </div>
            <div className="price">總人數：{item.count}</div>
          </div>
        ))}
        {list.length === 0 && (
          <div style={{ textAlign: 'center', opacity: 0.6 }}>您还没有任何矿工</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ account }) {
  const { subuser } = account;

  return {
    list: subuser,
  };
}
export default connect(mapStateToProps)(Subuser);
