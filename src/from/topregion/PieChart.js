import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { CardHeader } from 'reactstrap'
import {province} from '../../datas/provinceOfThailand'
import { Card, Row, Col, Button, Select } from 'antd'
const ButtonGroup = Button.Group;
const { Option } = Select
export default class PieChart extends Component {
  onClickSelect = async (e) => {
    this.props.getTopRegion(e.target.value, this.props.province);
  }
  onClickSelectProvince = async (e) => {
    this.props.getTopRegion(this.props.type, e);
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
                    <CardHeader style={{backgroundColor: '#494d9b'}}>
                        <h2 style={{color:'white'}}>กลุ่มลูกค้า</h2>
                    </CardHeader>
                    <ButtonGroup onClick={(e) => this.onClickSelect(e)} style={{padding: '5px'}}> 
                      <Button value={'day'} style={{backgroundColor:'#5EC440'}}>วัน</Button>
                      <Button value={'month'} style={{backgroundColor:'#5EC440'}}>เดือน</Button>
                      <Button value={'year'} style={{backgroundColor:'#5EC440'}}>ปี</Button>
                    </ButtonGroup>
                    <Select 
                    style={{width: '35%', marginLeft: '10px', padding: '5px'}} 
                    placeholder= {this.props.province}
                    onSelect={ (e) => this.onClickSelectProvince(e)}
                    >
                      {province.map(item=><Option
                      value={item.PROVINCE_NAME} 
                      key={(row, index)=> index}
                      >
                      {item.PROVINCE_NAME}
                        </Option>)}
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
