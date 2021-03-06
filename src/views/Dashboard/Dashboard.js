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
  topSeller,
  LineCharts,
  PieCharts,
} from '../../services/API'
export default class Dashboard extends Component {
  state={
    totalsale: [],
    totalseller: [],
    totalcustomer: [],
    topregions: [],
    topsellers: [],
    linecharts: [],
    sales: [],
    dates: [],
    piecharts: [],
    ages: [],
    genders: [],
    date: 'day'
  }
  UNSAFE_componentWillMount () {
    this.getTotalSale();
    this.getTotalSeller();
    this.getTotalCustomer();

    this.getTopRegion();
    this.getTopSeller();

    this.getPieChart(this.state.date);
    this.getLineChart(this.state.date);
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
  getLineChart = async (type) => {
    this.setState({reslut: {value: type}},async () => {
      const get = await LineCharts(this.state.reslut);
      get.code === 200 && this.setState({
        linecharts: get.data
      }, () => this.setState({
        sales: this.state.linecharts.map(item => item.sum),
        dates: this.state.linecharts.map(item => item.date)
      }))
    })
  }
  getPieChart = async (type) => {
    this.setState({data : {value: type}},async ()=> {
      const get = await PieCharts(this.state.data);
      get.code === 200 &&
      this.setState({
        piecharts: get.data,
      }, () => this.setState({
        ages: this.state.piecharts.age.map(item => item.total),
        genders: this.state.piecharts.gender.map(item => item.total)
      }))
    })}
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
            dates={this.state.dates !== null && this.state.dates}
            sales={this.state.sales !== null && this.state.sales}
            getLineChart={this.getLineChart !== null && this.getLineChart}
            />
          </Col>
          <Col span={8}> 
            <PieChart
            ages={this.state.ages.length < 0 ? [] : this.state.ages}
            genders={this.state.genders < 0 ? [] : this.state.genders} 
            getPieChart={this.getPieChart}
            piecharts={this.state.piecharts !== null && this.state.piecharts}
              />
          </Col>
        </Row>
        <Row gutter={4} style={{ padding:'4px' }}>
          <Col span={12}>
            <TopReionFrom
            topregions={this.state.topregions.length > 0 ? this.state.topregions : []}
            /> 
          </Col>
          <Col span={12}>
            <TopSellerFrom
            topsellers={this.state.topsellers.length > 0 ? this.state.topsellers : []}
            />
          </Col>
        </Row>
      </Card>
    )
  }
}
