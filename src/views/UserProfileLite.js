import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

class UserProfileLite extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cows: []
    }
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
        <Col lg="12" md="12" sm="12" className="mb-4">
          <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Коровы</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Barcode
                      </th>
                      <th scope="col" className="border-0">
                        Дата Рождения
                      </th>
                      <th scope="col" className="border-0">
                        1 день
                      </th>
                      <th scope="col" className="border-0">
                        4 день
                      </th>
                      <th scope="col" className="border-0">
                        14 день
                      </th>
                      <th scope="col" className="border-0">
                        25 день
                      </th>
                      <th scope="col" className="border-0">
                        33 день
                      </th>
                      <th scope="col" className="border-0">
                        44 день
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.cows && this.state.cows.map((cow) => 
                        <tr key={cow._id}>
                          <td>{cow.barcode}</td>
                          <td>{cow.bdate}</td>
                          {
                            cow.days.map((day, i) => 
                              <td key={i}>{day}</td>
                            )
                          }
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default UserProfileLite;
