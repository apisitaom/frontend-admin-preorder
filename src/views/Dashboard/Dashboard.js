import React, { Component } from 'react'
import TopSellerFrom from '../../from/dashboard/TopSellerFrom'
import TopReionFrom from '../../from/dashboard/TopReionFrom'
import LineChart from '../../from/dashboard/LineChart'
import PieChart from '../../from/dashboard/PieChart'
import CardFrom from '../../from/dashboard/CardFrom'
import { Card, Col, Row } from 'antd'
export default class Dashboard extends Component {
  render() {
    return (
      <Card>
        <Row>
          <Col span={24}>
            <CardFrom 
            />
          </Col>
        </Row>
        <Row gutter={4}>
          <Col span={16}>
            <LineChart 
            />
          </Col>
          <Col span={8}> 
            <PieChart 
              />
          </Col>
        </Row>
        <Row gutter={4}>
          <Col span={12}>
            <TopReionFrom 
            /> 
          </Col>
          <Col span={12}>
            <TopSellerFrom 
            />
          </Col>
        </Row>
      </Card>
    )
  }
}
