import React, { Component } from 'react'
import {  Select, Table, DatePicker,TimePicker ,Input,Button} from 'antd';

const { Option } = Select;
export default class PreOrder extends Component {
    render() {
        const { Column } = Table;

        return (
            <div>
                เลือกสินค้า <Select placeholder="กรุณาเลือกสินค้า" style={{ width: '20%', marginRight: '3%', marginLeft: '1%' }} placeholder="กรุณาเลือกสินค้า">
                    <Option value="ex1">Ex1</Option>
                    <Option value="ex2">Ex2</Option>
                </Select>

                <br />
                <br />
                <br />
                <Table >
                    <Column align="center" title="ตัวเลือกสินค้า" dataIndex="orderDate" key="orderDate" />
                    <Column align="center" title="ราคา" dataIndex="orderID" key="orderID" />
                    <Column align="center" title="จำนวนที่เปิดพรีออเดอร์" dataIndex="customerName" key="customerName" />
                    <Column align="center" title="ลบ" dataIndex="Total" key="Total" />
                </Table>
                <br />
                <br />
                <br />
                <div className="center-item">
                วันที่เปิดพรีออเดอร์ <DatePicker style={{  marginLeft: '1%',marginRight: '3%' }} />
                เวลาที่เปิดพรีอเดอร์  <TimePicker style={{  marginLeft: '1%',marginRight: '3%' }}/>
                จำนวนเวลาที่เปิดพรีออเดอร์
                <Input
                    placeholder="0"
                    type="number"
                    style={{ width: '10%', marginRight: '1%', marginLeft: '1%' }}
                /> ชั่วโมง</div>
                <br />
                <br />
                <div className="center-item">
                <Button type="primary"  style={{width:'10%' }}>สร้าง</Button>
                </div>
            </div>
        )
    }
}
