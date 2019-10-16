import React, { Component } from 'react'
import TopSellerFrom from '../../from/dashboard/TopSellerFrom'
import TopReionFrom from '../../from/dashboard/TopReionFrom'
import LineChart from '../../from/dashboard/LineChart'
import PieChart from '../../from/dashboard/PieChart'
import CardFrom from '../../from/dashboard/CardFrom'
import { Card, Col, Row } from 'antd'
import {
  totalSale,
  totalSeller,
  totalCustomer,
  topRegion,
  topSeller
} from '../../services/API'
export default class Dashboard extends Component {
  state={
    totalsale: [],
    totalseller: [],
    totalcustomer: [],
    topregions: [],
    topsellers: []
  }
  UNSAFE_componentWillMount () {
    this.getTotalSale();
    this.getTotalSeller();
    this.getTotalCustomer();

    this.getTopRegion();
    this.getTopSeller();
  }
  getTotalSale = async () => {
    const get = await totalSale();
    this.setState({
      totalsale: get.data.sum
    })
  }
  getTotalSeller = async () => {
    const get = await totalSeller();
    this.setState({
      totalseller: get.data.sum
    })
  }
  getTotalCustomer = async () => {
    const get = await totalCustomer();
    this.setState({
      totalcustomer: get.data.count
    })
  }
  getTopRegion = async () => {
    const get = await topRegion();
    this.setState({
      topregions: get.data
    })
  }
  getTopSeller = async () => {
    const get = await topSeller();
    this.setState({
      topsellers: get.data
    })
  }
  render() {
    return (
      <Card>
        <Row>
          <Col span={24}>
            <CardFrom 
            totalsale={this.state.totalsale !== null && this.state.totalsale}
            totalseller={this.state.totalseller !== null && this.state.totalseller}
            totalcustomer={this.state.totalcustomer !== null && this.state.totalcustomer}
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
        <Row gutter={4} style={{ padding:'4px' }}>
          <Col span={12}>
            <TopReionFrom
            topregions={this.state.topregions.length > 0 && this.state.topregions}
            /> 
          </Col>
          <Col span={12}>
            <TopSellerFrom
            topsellers={this.state.topsellers.length > 0 && this.state.topsellers}
            />
          </Col>
        </Row>
      </Card>
    )
  }
}
