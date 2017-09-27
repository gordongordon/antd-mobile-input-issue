import React from 'react';
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

class H5NumberInputExample extends React.Component {
  state = {
    moneyfocused: false,
    type: 'money',
  }
  render() {
    const { getFieldProps } = this.props.form;
    const { type } = this.state;
    return (
      <div>
        <List renderHeader={() => 'Format'}>
           <InputItem placeholder="1">普通键盘</InputItem>
           <InputItem placeholder="2">普通键盘</InputItem>
           <InputItem placeholder="3">普通键盘</InputItem>
           <InputItem placeholder="4">普通键盘</InputItem>
           <InputItem placeholder="5">普通键盘</InputItem>
           <InputItem placeholder="6">普通键盘</InputItem>
           <InputItem placeholder="7">普通键盘</InputItem>
           <InputItem placeholder="8">普通键盘</InputItem>
           <InputItem placeholder="9">普通键盘</InputItem>
           <InputItem placeholder="10">普通键盘</InputItem>
           <InputItem placeholder="11">普通键盘</InputItem>
           <InputItem placeholder="12">普通键盘</InputItem>
        </List>
      </div>
    );
  }
}

export const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);