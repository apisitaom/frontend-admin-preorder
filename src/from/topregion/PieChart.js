import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { CardHeader } from 'reactstrap'
import {province} from '../../datas/provinceOfThailand'
import { Card, Row, Col, Button, Select } from 'antd'
const ButtonGroup = Button.Group;
const { Option } = Select
export default class PieChart extends Component {
  onClickSelect = async (e) => {
    this.props.getTopRegion(e.target.value);
  }
  onClickSelectProvince = async (e) => {
    this.props.getTopRegion(e);
  } 
    render() {
        const pie1 = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          
            labels: this.props.ages,
            datasets: [
              {
                data: this.props.amountages,
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
            labels: this.props.products,
            datasets: [
              {
                data: this.props.amountproducts,
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
                    <ButtonGroup onClick={(e) => this.onClickSelect(e)}> 
                      <Button value={'day'} >วัน</Button>
                      <Button value={'month'}>เดือน</Button>
                      <Button value={'year'}>ปี</Button>
                    </ButtonGroup>
                    <Select 
                    style={{width: '35%'}} 
                    placeholder="เลือกจังหวัด"
                    onSelect={ (e) => this.onClickSelectProvince(e)}
                    >
                      {province.map(item=><Option value={item.PROVINCE_NAME}>{item.PROVINCE_NAME}</Option>)}
                    </Select>
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
