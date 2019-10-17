import React, { Component } from 'react'
import { Card, Table, Button,Form, Select, Modal } from 'antd' 
import Seller from '../../../modalComponents/Seller'
import { 
    sellersGet,
    sellerRole
 } from "../../../services/API";
 import Selectfrom from '../../../from/nav/SelectFrom'
 const { Option } = Select
export class List extends Component {
    state = {
        sellers: [],
        shopname: '',
        email: '',
        status: 'non',
        active: false,
        updateSeller: []
    }
    UNSAFE_componentWillMount () {
        this.getSeller();
    }
    getSeller = async () => {
        const get = await sellersGet();
        this.setState({
            sellers: get.data,
        });
    }
    selectOnChange = value => {
        this.setState({status: value})
    }
    dateOnChange = (date, dateString) => {
        this.setState({date: dateString})
    }
    clearSearchData = () =>{
        this.setState({
            shopname: '',
            email: '',
            status:'non'
        })
    }
    showModal = async (index) => {
        this.setState({
            seller: this.state.sellers[index],
            visible: true
        });
    }
    onCancel = () => {
        this.setState({visible: false})
    } 
    
    changeStatus = async (index, e) => {
        const data = {
            sellerid: index.sellerid,
            active: e
        }
        Modal.confirm({
            title: 'update seller role',
            onOk: () => this.onUpdateSellerRole(data)
        })
    }
    onUpdateSellerRole = async data =>{
        await sellerRole(data);
        await window.location.reload();
    }
    render() {
        const columns = [
            {
                title: '#',
                dataIndex: 'key',
                key: 'key',
                width: '5%',
                render: (text, record, index) => (
                    <span key={index}>
                        {index + 1}
                    </span>
                )
            },
            {
                title: 'วันลงทะเบียน',
                dataIndex: 'createdate',
                key: 'createdate',
            },
            {
                title: 'ชื่อร้านค้า',
                dataIndex: 'sellername',
                key: 'sellername',
            },
            {
                title: 'อีเมล',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'เบอร์โทรศัพท์',
                dataIndex: 'phonenumber',
                key: 'phonenumber',
            },
            {
                title: 'รายละเอียด',
                dataIndex: '',
                key: '',
                textAlign: 'center',
                render: (text, record, index) =>
                    <span>
                        <Button type='link' onClick={()=>this.showModal(index)}>ดู</Button>
                    </span>
            },
            {
                title: 'สถานะ',
                key: 'active',
                render: (text, record, index) => 
              {                   
                  return (
                    <Select
                    value={String(record.active)}
                    onChange={(e) => this.changeStatus(record, e)}
                    >   
                        <Option key={"true"}>active</Option>
                        <Option key={"false"}>inactive</Option>
                    </Select>
                )}          
            }
        ]
        return (
            <div>
                <Modal
                    title={this.state.seller ? this.state.seller.sellername : ''}
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    footer={null}
                    width='55%'
                    style={{ left: 70 }}
                >  
                    <Seller seller={this.state.seller} 
                    />
                </Modal>

                <Selectfrom 
                />

                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SELLERS" bordered={false}>
                <Button type='link' onClick={this.showModal}>View detail</Button>
                    <Table
                        dataSource = {this.state.sellers}
                        columns={columns}
                        rowKey={(row, index)=> index}  
                    />
                </Card>
            </div>
        )
    }
}

const sell = Form.create({ name: 'dynamic_rule'})(List);

export default sell
