import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col,Button,Card, CardHeader, ListGroup, ListGroupItem, Form, FormInput, ButtonGroup,InputGroupText } from "shards-react";
import ButtonGroups from "../components/components-overview/ButtonGroups";
import InputGroups from "../components/components-overview/InputGroups";
import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

import moment from 'moment'

class DefaultLayout extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      collapse: 'none',
      button: 'block',
      type1: 'primary',
      type2: 'white',
      type3: 'white',
      type4: 'white',
    }
    this.openCollapse = this.openCollapse.bind(this)
    this.closeCollapse = this.closeCollapse.bind(this)
    this.chooseType = this.chooseType.bind(this)
  }
  openCollapse(){
    this.setState({
      collapse: 'block',
      button: 'none'
    })
  }
  closeCollapse(){
    this.setState({
      collapse: 'none',
      button: 'block'
    })
  }
  chooseType(e){
    this.setState({
      ['type'+e.currentTarget.id]: 'primary'
    })
    for(var i = 0; i < 5; i++){
      if(i !== parseInt(e.currentTarget.id, 10)){
        this.setState({['type'+i]: 'white'})        
      }
    }
  }
  render(){
    return(
<Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {/* {!noNavbar && <MainNavbar />} */}
        {this.props.children}
      </Col>
    </Row>
    <Button onClick={this.openCollapse} style={{display: this.state.button, position: "fixed", zIndex: 1000000000000000, right: '30px', bottom: "30px", borderRadius: "100px", fontSize: "25px", width: "150px", height: "150px"}}>Добавить<br /> корову</Button>
    {/* Groups */}
    <Card small className="mb-4" style={{display: this.state.collapse, position: "fixed", zIndex: 1000000000000000, right: '30px', bottom: "10px", borderRadius: "100px", fontSize: "25px", width: "400px", height: "500px"}}>
            <CardHeader className="border-bottom" style={{display: "flex"}}>
              <h5 >Добавить</h5>
              <Button onClick={this.closeCollapse} style={{marginLeft: "60%", right: 0, textAlign: 'right'}}>Close</Button>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="px-3">
                <Form>
                  <strong className="text-muted d-block mb-3">
                    Тип коровы
                  </strong>
                  <ButtonGroup className="mb-3">
                    <Button type="button" onClick={this.chooseType} id="1" theme={this.state.type1}>Мужской</Button>
                    <Button type="button" onClick={this.chooseType} id="2" theme={this.state.type2}>Buzz</Button>
                    <Button type="button" onClick={this.chooseType} id="3" theme={this.state.type3}>Foo</Button>
                    <Button type="button" onClick={this.chooseType} id="4" theme={this.state.type4}>Bar</Button>
                  </ButtonGroup>

                  <strong style={{fontSize: '20px'}} className="text-muted d-block mb-2">
                    Штрихкод коровы
                  </strong>
                  <FormInput placeholder="Barcode" />

                  <strong style={{fontSize: '20px'}} className="text-muted d-block mb-2">
                    Д.Р. (стандарт - сейчас)
                  </strong>
                  <FormInput placeholder="Barcode" defaultValue={moment().format('Do MMM YY')} />
                  <center>
                  <Button onClick={this.submit} className="bg-success text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", marginTop: "30px", fontSize: "20px" }}>Добавить</Button>
                   </center>
                </Form>
              </ListGroupItem>
            </ListGroup>
          </Card>
  </Container>
    )
  }
}

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
