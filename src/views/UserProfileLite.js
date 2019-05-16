import React from "react";
import { Container, Row, Col, Button, CardBody, CardHeader } from "shards-react";

import PageTitle from "../components/common/PageTitle";

import json2xls from 'json2xls'
import moment from "moment";

class UserProfileLite extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cows: []
    }
    this.generateXLS = this.generateXLS.bind(this)
  }
  componentDidMount(){
    fetch('https://cowvisionbackend.herokuapp.com/cows')
    .then(response => response.json())
    .then(data => {
      this.setState({
        cows: data
      })
    })
  }
  generateXLS(){
    var cows = this.state.cows;
    var arr = cows.map((cow)=> {
      return {
        'Barcode': cow.barcode,
        'День рождения': cow.bdate,
        '1 день': cow.days[0].date,
        '4-6 день': cow.days[1].privit ? "✅"+cow.days[1].date :  "❌"+cow.days[1].date,
        '14-17 день': cow.days[2].privit ? "✅"+cow.days[2].date :  "❌"+cow.days[2].date,
        '25-28 день': cow.days[3].privit ? "✅"+cow.days[3].date :  "❌"+cow.days[3].date,
        '33-36 день': cow.days[4].privit ? "✅"+cow.days[4].date :  "❌"+cow.days[4].date,
        '44-47 день': cow.days[5].privit ? "✅"+cow.days[5].date :  "❌"+cow.days[5].date,
      }
    })
    var xls = json2xls(arr);
    var uri = 'data:text/xlsx;charset=utf-8,' + escape(xls);
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = 'Отчет'+ moment().format('Do MMM YY') + ".xlsx";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  render(){
    return(
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Отчет" subtitle="Формирование отчета" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          <Col>
            Hello
          </Col>
        </Row>
        <Row>
        <Button onClick={this.generateXLS}>CLICK</Button>
        </Row>
      </Container>
    )
  }
}

export default UserProfileLite;
