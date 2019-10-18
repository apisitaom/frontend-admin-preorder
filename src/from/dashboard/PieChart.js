import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { CardHeader } from 'reactstrap'
import { Card, Row, Col, Button } from 'antd'
const ButtonGroup = Button.Group;
export default class PieChart extends Component {
  state = {
    age: []
  }
  onClickSelect = async (e) => {
    this.props.getPieChart(e.target.value);
  }
    render() {
        const pie1 = {
            labels: [
              'หญิง',
              'ชาย',
            ],
            datasets: [
              {
                data: this.props.ages,
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                ],
              }],
          };
          const pie2 = {
            labels: [
              'วัยรุ่น',
              'ผู้ใหญ่',
            ],
            datasets: [
              {
                data: this.props.genders,
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                ],
              }],
          };
        return (
            <div>
                <Card>
                    <CardHeader style={{backgroundColor: '#494d9b'}}><h5 style={{color:'white'}} >กลุ่มผู้ใช้</h5></CardHeader>
                    <ButtonGroup onClick={(e) => this.onClickSelect(e)} style={{padding: '5px'}}>
                    <Button value={'day'} style={{backgroundColor:'#5EC440'}}>วัน</Button>
                      <Button value={'month'} style={{backgroundColor:'#5EC440'}}>เดือน</Button>
                      <Button value={'year'} style={{backgroundColor:'#5EC440'}}>ปี</Button>
                    </ButtonGroup>
                    <Row>
                        <Col span={24}>
                        เพศ
                            <Pie 
                            data={pie1}
                            />
                        </Col>
                        <Col span={24}>
                        อายุ                        
                            <Pie 
                            data={pie2}
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
