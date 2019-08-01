import React, { Component } from 'react'
import { DatePicker, Button, Select, Table, Pagination } from 'antd';
import './../App.css';
import { Link } from "react-router";


const { Option } = Select;

export default class OrderList extends Component {

    render() {
        const { Column } = Table;
        return (

            <div>
                <div className="center-item">
                    วันที่เปิดพรีออเดอร์ <DatePicker style={{ marginLeft: '1%', marginRight: '3%' }} />
                    ช่วงเวลา <Select 
                                placeholder="กรุณาเลือกช่วงเวลา"
                                style={{ width: '20%', marginRight: '3%', marginLeft: '1%' }}>
                        <Option value="ex1">Ex1</Option>
                        <Option value="ex2">Ex2</Option>
                    </Select>
                    สถานะ <Select 
                                placeholder="กรุณาเลือกสถานะ"
                                style={{ width: '20%', marginLeft: '1%', }}>
                        <Option value="ex1">Ex1</Option>
                        <Option value="ex2">Ex2</Option>
                    </Select>
                </div>
                <br />
                <br />
                <br />
                <Table >
                    <Column align="center" title="วันที่สั่ง" dataIndex="orderDate" key="orderDate" />
                    <Column align="center" title="รหัสการสั่ง" dataIndex="orderID" key="orderID" />
                    <Column align="center" title="ชื่อลูกค้า" dataIndex="customerName" key="customerName" />
                    <Column align="center" title="จำนวนเงิน" dataIndex="Total" key="Total" />
                    <Column align="center" title="สถานะการโอน" dataIndex="status" key="status" />
                </Table>
                <br />
                <Pagination defaultCurrent={1} total={80} pageSize={20} className="center-item" />
                <br />
                <br />
                <br />
                <p className="bold">สรุป</p>
                <Table>
                    <Column align="center" title="ชื่อสินค้า" dataIndex="orderDate" key="proName" />
                    <Column align="center" title="ตัวเลือกสินค้า" dataIndex="orderID" key="optionName" />
                    <Column align="center" title="จำนวนสินค้า" dataIndex="totalProduct" key="totalProduct" />
                    <Column align="center" title="จำนวนที่สั่ง" dataIndex="Amount" key="Amount" />
                    <Column align="center" title="คงเหลือ" dataIndex="inventory" key="inventory" />
                    <Column align="center" title="ราคารวม" dataIndex="Total" key="Total" />
                </Table>
                <Link to="/orderDetail">
                    <Button type="primary" style={{ width: '10%' }}>สร้าง</Button>
                </Link>
            </div>
        )
    }
}
