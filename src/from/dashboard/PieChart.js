import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { CardHeader } from 'reactstrap'
import { Card, Row, Col } from 'antd' 
export default class PieChart extends Component {
    render() {
        const pie1 = {
            labels: [
              'หญิง',
              'ชาย',
              'อื่นๆ',
            ],
            datasets: [
              {
                data: [300, 50, 100],
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
              'กลางคน',
              'ผู้ใหญ่',
              'ชรา',
            ],
            datasets: [
              {
                data: [300, 50, 100, 45],
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#00FF00',
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#00FF00',
                ],
              }],
          };
        return (
            <div>
                <Card>
                    <CardHeader><h5>กลุ่มผู้ใช้</h5></CardHeader>
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
