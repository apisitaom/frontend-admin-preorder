import React, { Component } from 'react'
import { Card, Table, Button,Form, Select, Modal, Tag, Row, Col, Input } from 'antd' 
import Seller from '../../../modalComponents/Seller'
import moment from 'moment'
import { 
    sellersGet,
    sellerRole
 } from "../../../services/API";
 const { Option } = Select
export class List extends Component {
    state = {
        sellers: [],
        status: 'non',
        active: false,
        updateSeller: [],
        searchname: '',
        search: false
    }
    UNSAFE_componentWillMount () {
        this.getSeller();
    }
    getSeller = async () => {
        const get = await sellersGet();
        get.code === 200 && this.setState({
            sellers: get.data,
        });
    }
    selectOnChange = value => {
        this.setState({status: value})
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
    search = e => {
        this.setState({searchname: e.target.value},()=> {
            let dataSearch
            if(this.state.searchname !== ''){
                dataSearch = this.state.sellers.filter(value=> {
                    return (value.sellername.toLowerCase().indexOf(this.state.searchname.toLowerCase()) > -1)
                })
                this.setState({dataSearch: [...dataSearch],search: true})
            }else{
                this.setState({search: false})
            }
        })}
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
                render: text => (
                    <span>{moment(text).format('lll')}</span>
                )
            },
            {
                title: 'ชื่อร้านค้า',
                dataIndex: 'sellername',
                key: 'sellername',
                render: text => {
                    return (
                        <Tag color="#108ee9">
                            {text}
                        </Tag>
                    )
                }
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
                <Row>
                    <Col offset={16}>
                        <Input 
                        style={{width: '100%', textAlign: 'center', height: '35px' }}
                        placeholder="ค้นหา/ชื่อร้านค้า ?"
                        value={this.state.searchname}
                        onChange={(e)=>this.search(e)}
                        />
                    </Col>
                </Row>
                <Card style={{ boxShadow: '9px 9px 20px 0px rgba(0,0,0,0.23)', marginBottom: '2%' , marginTop: '5px'}} title="SELLERS" bordered={false}>
                    <Table
                        dataSource = {this.state.search ? this.state.dataSearch :  this.state.sellers}
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
