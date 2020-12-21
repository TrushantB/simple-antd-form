import React, { useState } from 'react';
import { Row, Col, Card, PageHeader,Form, Input, InputNumber, Button } from 'antd';

import { message } from 'antd';
import { Select } from 'antd';
import './App.css';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 15 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


 const App = () => {

  let [captcha, setCaptch]=useState('')

  const onFinish = values => {
    console.log(values);
  };

  const getCaptcha = () => {
    setCaptch(Math.floor(Math.random() * 1000000000))
  }
  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Firebase Authontication testing"
          subTitle="Firebase authontication testing for upcomming projects"
        />
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        
        <Card title="Registration">
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'contact']} label="Contact" rules={[{ required: true}]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'address']} label="Address" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item  wrapperCol={{offset: 5 }}>
          <Button type="dashed"  style={{ width: 270, height:56,  }} onClick={() => getCaptcha()}>
            {
              captcha ? captcha : 'Generate Captcha'
            }
            
          </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Card>
      </Col>

      {/* <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
         
          
        </Card>
      </Col> */}
    </Row>
  );
};
export default App;