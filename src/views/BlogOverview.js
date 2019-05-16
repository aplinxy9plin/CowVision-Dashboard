import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardBody, CardHeader } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import UsersByDevice from "./../components/blog/UsersByDevice";

class BlogOverview extends React.Component {
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
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Главная" subtitle="Dashboard" className="text-sm-left mb-3" />
        </Row>

        <Row>
          {/* Users Overview */}
          <Col lg="8" md="12" sm="12" className="mb-4">
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
                              <td key={i}>{day.date}</td>
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

          {/* Users by Device */}
          <Col lg="4" md="6" sm="12" className="mb-4" style={{height: "500px"}}>
            <UsersByDevice />
          </Col>
        </Row>
      </Container>
    )
  }
}

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Posts",
      value: "2,390",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Pages",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Comments",
      value: "8,147",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "New Customers",
      value: "29",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Subscribers",
      value: "17,281",
      percentage: "2.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

export default BlogOverview;
