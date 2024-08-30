
import React, { useState, useEffect } from 'react';
import './App.css';
import {Checkbox, Form, Input,Drawer,Modal,Button,Divider,Col, Row,Layout,Typography,Image,Anchor,Card,List,Menu,Flex} from 'antd';
import {Container, Stack} from 'react-bootstrap';
import { MenuOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import logo from './assets/logo.jpeg';
import row2 from  './assets/7.jpg'
import row3 from  './assets/1.jpg'
import row4 from  './assets/49.jpg'
import row5 from  './assets/50.jpg'
import row6 from  './assets/5.jpg'
import row7 from  './assets/2.jpg'
import Animate from './animate'
import SignUp from './signup'
const {Link} = Anchor
const { Title,Paragraph } = Typography;
const { Header, Content, Footer } = Layout;


function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);
 
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (values) => {

    setLoading(true);
    const messages = {
      phone: values.phone,
      email: values.email,
      username: values.username,
      from_email: values.email
    };
    
    emailjs
    .send(
      'service_otd0bel',
      'template_d5csk4t',
      messages,
      'mhx9MevQA9Q9J_nvU'
    )
    .then(
      (response) => {
        setLoading(false);
        setOpen(false);
        alert('Registration successful!');
      },
      (err) => {
        setLoading(false);
        alert('Registration failed. Please try again.');
      }
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  function openTelegram(username, message) {
    const encodedMessage = encodeURIComponent(message);
    // const url = `https://t.me/${username}?text=${encodedMessage}`;
    //const url = `https://web.telegram.org/k/#@${username}`
    const url = `https://t.me/pipsterdrizzydre`
    window.open(url, '_blank');
}
const openTelegramChannel = (user, message) => {
  const url = `https://t.me/+47cpW-_8R9FkOGI0`;
  window.open(url, '_blank');
};

const [isHovered, setIsHovered] = useState(false);
const [isHovered2, setIsHovered2] = useState(false);

  useEffect(() => {
    const anchorItems = document.querySelectorAll('.custom-anchor .ant-anchor-link-title');
    const bgColor = getComputedStyle(document.body).backgroundColor;

    anchorItems.forEach(item => {
      if (bgColor === 'rgb(255, 255, 255)') { // Check if background is white
        item.style.color = 'black';
      } else {
        item.style.color = 'white';
      }
    });
  }, []);
  var items =[
    { key: 'part-1', href: '#part-1', title: 'Home' },
    { key: 'part-2', href: '#part-2', title: 'About Us' },
    { key: 'part-3', href: '#part-3', title: 'Join' },
    { key: 'part-4', href: '#part-4', title: 'Packages' },
    { key: 'part-5', href: '#part-5', title: 'Contact Us' },
    // { key: 'part-6', href: '#part-6', title: 'Sign Up' },
    // {
    //   key: 'part-6',
    //   title: 'Sign Up',
    //   onClick: showModal,
    // },

    
    ]
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const closeDrawer = () => {
      setVisible(false);
    };
  return (
    <div   className="App">
    {/* <Animate/> */}
    <div>
    <Stack gap={5}>
     <Row className='background-row'  id="part-1" >
        <Image className="logo_name" width={100} height={100} src={logo} />
              <Col span={8} offset={6}>
                  <div className="navigation-row">
              
                    
                    <Anchor
                      direction="horizontal"
                      className="custom-anchor"
                      items={items}
                    />
                    <Drawer
                      title="Navigation Menu"
                      placement="right"
                      onClose={closeDrawer}
                      visible={visible}
                    >
                      <Anchor
                        direction="vertical"
                        className="drawer-anchor"
                        items={items}
                      />

                    <Button className="position-absolute top-0 end-0"
                      type="primary"
                      icon={<MenuOutlined />}
                      md={{ span: 4, offset: 4 }}
                      onClick={showDrawer}
                    />
                    </Drawer>
                  </div>
                </Col>
            <Col span={12} offset={6}>
                <Title style={{color:'white'}}>INTERCONTINENTAL FX TRADERS</Title>
                <Button type='primary' size="large" ghost style={{ marginRight: '5%' }}  onClick={showModal}>Sign Up</Button>
                <Button type='primary' size="large" ghost  onClick={() =>openTelegram('pipsterdrizzydre', 'Hello, I am interested in your services.')}>Trade</Button>

            </Col>
    </Row>

<Row id="part-2">
  <Content style={{ padding: '20px 48px',}}>
    <Title style={{ fontFamily: 'Merriweather, serif' }} className="position-absolute bottom-50 end-50">
      About Us!
    </Title>
    <Row gutter={[16, 16]} className="align-items-center">
      <Col xs={24} md={12}>
        <img alt="example" src={row2} style={{ width: '100%', height: 'auto' }} />
      </Col>
      <Col xs={24} md={12}>
        <blockquote className="text-white blockquote">
          <Paragraph>
            At <span style={{ color: 'steelblue', fontWeight: 'bold' }}>INTERCONTINENTAL FX TRADERS</span>, we empower
            clients to navigate the vast and dynamic financial markets with cutting-edge, interactive services. Our proven
            methods have been endorsed by leading analysts and investment bankers, ensuring that our strategies are not only
            effective but also innovative. With our extensive professional experience, we are dedicated to guiding you towards
            financial success today and in the future.
          </Paragraph>
        </blockquote>
        <blockquote className="text-white blockquote">
          <Paragraph>
            Since 2000, <span style={{ color: 'steelblue', fontWeight: 'bold' }}>INTERCONTINENTAL FX TRADERS</span> has been a
            trusted partner in our clients' journeys, offering unparalleled support and expertise. As market conditions evolve,
            we remain steadfast in our commitment to understanding and meeting your unique investment needs. We believe in
            personalized service tailored to your specific goals and investing style. Our state-of-the-art trading technology,
            combined with a user-friendly investment platform and exceptional customer service, sets us apart.
          </Paragraph>
        </blockquote>
        <blockquote className="text-white blockquote">
          <Paragraph>
            Join <span style={{ color: 'steelblue', fontWeight: 'bold' }}>INTERCONTINENTAL FX TRADERS</span> today and take the
            next step towards a prosperous financial future with a partner who is as dedicated to your success as you are.
          </Paragraph>
        </blockquote>
      </Col>
    </Row>
  </Content>
</Row>
<br/>

    <Row  id="part-3">
    <div className='background2-row'>
     <Title style={{  color:'white',fontFamily: 'Merriweather, serif',padding: '20px 48px',textAlign: 'left'}}>Join Us !</Title>
     </div>
          <Content style={{ padding: '20px 48px'}}>
            <Row  gutter={[16, 16]} className="align-items-center">
            <Col xs={24} md={12}>
            <div style={{textAlign: 'left'}}>
              <blockquote>
                <Title level={5} className="text-white ">Our investment plans are currently  ACTIVE my traders so if you wish to be  in the next investor pool and be able to join the next payout roll you can take join any of our plans today</Title>
                  <Title level={4}  style={{fontWeight: 'bold' }} className="text-white blockquote">To join kindly have the following details ready:</Title>
                      <ul >
                          <li >Official names</li>
                          <li>Nationality</li>
                          <li >Active Email address</li>
                          <li>Preferred mode of payment (Bitcoin or USDT)</li>
                      </ul>
                  <br/>
                  <Title level={5}>
                  Kindly go through our work carefully before reaching out to me as we value transparency first and foremost,if comfortable with our work you can text me with the aforementioned details
                  </Title>
                  
                  </blockquote> 
              </div>
              </Col>

              <Col xs={24} md={12}>
                <img alt="example" src={row3} style={{width: '100%',height: 'auto'}}/>
                </Col>
              </Row>
          </Content>
     
    </Row>

            <Row   id="part-4" style={{textAlign: 'left'}}>
                  <div className='background3-row'>     
                    <Title style={{  color:'white',fontFamily: 'Merriweather, serif',padding: '20px 48px'}}>Plans/Packages</Title>
                    </div>   
                    
                    <Content style={{padding: '20px 48px'}}>
                          <Row  gutter={[16, 16]} className="align-items-center">
                            <Col xs={24} md={12}>
                            <img alt="example" src={row4} style={{width: '100%',height: 'auto',maxWidth: '80%'}}/>
                            </Col>
                            <Col xs={24} md={12}>
                                  <Title level={4}  style={{fontWeight: 'bold' }} className="text-white blockquote">Maximize Your Investments with US!</Title>
                                  <Title level={3}>Special Offer: 5 day  Plan</Title>
                                    <Title level={5}>Experience the power of our 5 day  plan, which includes:</Title>
                                    <Title level={5}>
                                      <ul>
                                      <li><span style={{fontWeight:'bold'}}>Expert Consultation</span>: Benefit from personalized consultations with financial experts who will help you create a customized plan to maximize your earnings.</li>
                                      <li><span style={{fontWeight:'bold'}}>Premium Tools and Resources</span>: Gain access to advanced tools and resources that are designed to help you track and optimize your financial growth.</li>
                                      <li><span style={{fontWeight:'bold'}}>Exclusive Insights</span>: Stay ahead of the game with insider knowledge and strategies that are only available to our 5 day  members.</li>
                                      </ul>
                                    </Title>
                            </Col>
                            </Row>

                            <Row  gutter={[16, 16]} className="align-items-center">
                             <Col xs={24} md={12}>
                                    <Title level={4}  style={{fontWeight: 'bold' }} className="text-white blockquote">Get Started Today!</Title>
                                    <Title level={3}>Special Offer: 24-Hour Plan</Title>
                                    <Title level={5}>Experience the power of our 24-hour plan, which includes:</Title>
                                    <Title level={5}>
                                      <ul>
                                      <li><span style={{fontWeight:'bold'}}>Intensive Financial Review</span>: A thorough review of your current financial situation and goals to identify opportunities for growth.</li>
                                      <li><span style={{fontWeight:'bold'}}>Actionable Strategies</span>: Receive a step-by-step action plan tailored to your needs, designed to help you start seeing results within 24 hours.</li>
                                      <li><span style={{fontWeight:'bold'}}>Real-Time Support</span>: Access real-time support and guidance to address any questions or concerns as you implement your plan.</li>
                                      </ul>
                                    </Title>
                              </Col>
                              <Col xs={24} md={12}>
                                  <img alt="example" src={row5} style={{width: '100%',height: 'auto',maxWidth: '80%'}}/>
                              </Col>
                            </Row>
                              </Content>
                           
          </Row>


          <Row    id="part-5">
            <div className='background4-row'>
                <Title style={{  color:'white',fontFamily: 'Merriweather, serif',padding: '20px 48px',textAlign: 'left'}}>Contact Us !</Title>
                      <Content style={{padding: '20px 48px'}}>
                        <Row gutter={[16, 16]} className="align-items-center">  
                        <Col xs={24} md={12}>
                        <div style={{textAlign: 'left'}}>
                      
                          {/* <blockquote style={{marginTop:'30%'}}> */}
                          <Title>FOR TODAYS SIGNALS</Title>
                          <Title level ={3}>Join and share Our Telegram Channel</Title>
                   <Title level ={4}><span  onClick={() =>openTelegramChannel()}><span onMouseEnter={() => setIsHovered2(true)}
                              onMouseLeave={() => setIsHovered2(false)}
                              style={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                color: isHovered2 ? 'darkblue' : 'steelblue',
                                textDecoration: isHovered2 ? 'underline' : 'none',
                              }}>https://t.me/+47cpW-_8R9FkOGI0</span></span></Title>

                   <Title level={4}  style={{fontWeight: 'bold' }}  >Telegram : <span  onClick={() =>openTelegram('pipsterdrizzydre', 'Hello, I am interested in your services.')}><span         onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              style={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                color: isHovered ? 'darkblue' : 'steelblue',
                                textDecoration: isHovered ? 'underline' : 'none',
                              }}>@pipsterdrizzydre</span></span></Title>
                              <br/>
                              {/* <Title level={5}> Join <span style={{color:'steelblue',fontWeight:'bold'}}>INTERCONTINENTAL FX TRADERS</span> today and take the next step towards a prosperous financial future with a partner who is as dedicated to your success as you are.</Title>   */}
                    
                              {/* </blockquote>  */}
                          </div>
                          </Col>
                          <Col xs={24} md={12}>
                            <img alt="example" src={logo} style={{width: '100%',maxWidth: '400px',height: 'auto',flex: '1 1 300px'}}/>
                          </Col>
                          </Row>
                      </Content>
                      </div>
    </Row>

    </Stack>
    </div>

    <Modal
        open={open}
        title="Sign Up"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
      <Form
    name="basic"
    labelCol={{
      span: 6,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <div>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input type='text' required/>
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input type='email' required/>
    </Form.Item>
    <Form.Item
      label="Phone"
      name="phone"
      
    >
      <Input placeholder ="optional"/>
    </Form.Item>
    </div>

    {/* <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item> */}

    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item
      wrapperCol={{
        offset: 11,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit"  loading={loading} >
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
    </div>

  );
}

export default App;
