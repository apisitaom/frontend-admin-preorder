import React, { Component } from 'react'
import { Card, Table, Button, Input,Form , Row, Col, DatePicker, Select, Modal} from 'antd' 
import Seller from '../../../modalComponents/Seller'
import { 
    sellersGet,
    sellerRole
 } from "../../../services/API";
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
                    <Seller seller={this.state.seller}></Seller>
                    {/* {this.state.product ? <Product product={this.state.product} options={this.state.options} /> : ''} */}
                </Modal>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SEARCH" bordered={false}>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <Input 
                            placeholder='ชื่อร้านค้า'
                            value={this.state.shopname} 
                            onChange={(e)=>this.setState({shopname: e.target.value})}
                            />
                        </Col>
                        <Col span={12}>
                            <Input 
                            placeholder='Email' 
                            value={this.state.email}
                            onChange={(e)=>this.setState({email: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '1%' }}>
                        <Col span={12}>
                            <DatePicker 
                            placeholder='Select registerd date' 
                            style={{ width: '100%' }} 
                            onChange={this.dateOnChange}
                            />
                        </Col>
                        <Col span={12}>
                            <Select 
                            style={{ width: '100%' }}
                            onChange={this.selectOnChange}
                            value={this.state.status}
                            >
                                <Option value='non'>Select active status</Option>
                         8       <Option value='yes'>Active</Option>
                                <Option value='no'>Inactive</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={18} />
                        <Col span={3}>
                            <Button type="danger" style={{ width: '100%' }} onClick={this.clearSearchData}>ล้างข้อมูล</Button>
                        </Col>
                        <Col span={3}>
                            <Button type="primary" style={{ width: '100%' }}>ค้นหา</Button>
                        </Col>
                    </Row>
                </Card>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' }} title="SELLERS" bordered={false}>
                <Button type='link' onClick={this.showModal}>View detail</Button>
                    <Table
                        dataSource = {this.state.sellers}
                        columns={columns}
                    />
                </Card>
            </div>
        )
    }
}

const sell = Form.create({ name: 'dynamic_rule'})(List);

export default sell
