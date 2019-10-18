import React, { Component } from 'react'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Line } from 'react-chartjs-2';
import { CardHeader } from 'reactstrap';
import { Card, Row, Col, Button } from 'antd'
const ButtonGroup = Button.Group;
export default class LineChart extends Component {
  onClickSelect = async (e) => {
    this.props.getLineChart(e.target.value);
  }  
  render() {
        const line = {
            labels: this.props.dates,
            datasets: [
              {
                label: 'ยอดขาย',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.sales,
              },
            ],
          };
          const options = {
            tooltips: {
              enabled: false,
              custom: CustomTooltips
            },
            maintainAspectRatio: false
          }
        return (
            <div>
                <Card>
                    <CardHeader style={{backgroundColor: '#494d9b'}}><h5 style={{color:'white'}} >ยอดขาย</h5></CardHeader>
                    <Row>
                    <ButtonGroup onClick={(e) => this.onClickSelect(e)} style={{padding: '5px'}}>
                    <Button value={'day'} style={{backgroundColor:'#5EC440'}}>วัน</Button>
                      <Button value={'month'} style={{backgroundColor:'#5EC440'}}>เดือน</Button>
                      <Button value={'year'} style={{backgroundColor:'#5EC440'}}>ปี</Button>
                    </ButtonGroup>
                        <Col style={{height:'520px'}}>
                            <Line 
                            data={line} 
                            options={options} 
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
