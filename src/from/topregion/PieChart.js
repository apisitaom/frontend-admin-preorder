import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { CardHeader } from 'reactstrap'
import { Card, Row, Col } from 'antd' 
export default class PieChart extends Component {
    render() {
        const pie1 = {
            labels: [
              'วัยรุ่น',
              'ผู้ใหญ่',
              'ขรา',
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
              'สินค้า 1',
              'สินค้า 2',
              'สินค้า 3',
              'สินค้า 4',
              'สินค้า 5'
            ],
            datasets: [
              {
                data: [300, 50, 100, 45, 150],
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#00FF00',
                  '#800080',
                ],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#00FF00',
                  '#800080',
                ],
              }],
          };
        return (
            <div>
                <Card>
                    <CardHeader>
                        <h2>กลุ่มลูกค้า</h2>
                    </CardHeader>
                        <Row gutter={4}>
                            <Col span={12}>
                            <h4>อายุ</h4>
                                <Pie 
                                data={pie1}
                                />
                            </Col>
                            <Col span={12}>
                            <h4>สินค้า</h4>
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
