import React, { Component } from 'react'
import { Button, Input,Select,Table } from 'antd';



const { Option } = Select;

export default class Delivery extends Component {
    render() {
        const { Column } = Table;

        return (
            <div>
                <div align="right">
                สถานะการส่ง<Select placeholder="กรุณาเลือกสถานะการส่ง" style={{ width: '20%', marginRight: '3%', marginLeft: '1%' }}>
                        <Option value="ex1">Ex1</Option>
                        <Option value="ex2">Ex2</Option>
                    </Select>
                    </div>
                    <br/>
                    <br/>
                    <Table >
                    <Column align="center" title="รหัสการสั่ง" dataIndex="orderID" key="orderID" />
                    <Column align="center" title="ชื่อลูกค้า" dataIndex="customerName" key="customerName" />
                    <Column align="center" title="สถานะการส่ง" dataIndex="status" key="status" />
                    <Column align="center" title="TRACKING NO." dataIndex="tracking" key="tracking" />
                </Table>
                <br/>
                <br/>
                <div className="center-item">
                <Button type="primary"  style={{width:'10%' }}>บันทึก</Button>
                </div>
            </div>
        )
    }
}
