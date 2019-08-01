import React, { Component } from 'react'
import { Button, Divider, Upload, Icon, message, Row, Col, Input, Form } from 'antd'
import './../App.css'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
export default class AddProduct extends Component {
    
    state = { loading: false, };
    render() {

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        const { TextArea } = Input;


        return (

            <div>
                <p style={{ float: 'right' }}>ขั้นตอน 1/3</p>
                <Divider orientation="left">ข้อมูลสินค้าพื้นฐาน</Divider>
                <Row >
                    <Col span={8}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Col>
                    <Col span={16}>
                        ชื่อสินค้า
                            <Input style={{ width: '80%', marginRight: '1%', marginLeft: '1%', float: 'right', marginBottom: '1%' }} />
                        <br />
                        <br />
                        รายละเอียด
                                <TextArea
                            placeholder="กรุณาใส่รายละเอียด"
                            autosize={{ minRows: 9, maxRows: 9 }}
                            style={{ width: '80%', marginRight: '1%', marginLeft: '1%', float: 'right' }}
                        />
                    </Col>
                    <Col>
                        <Button 
                        style={{ float: 'right', marginTop: '2%', marginRight: '0.5%' }} type="primary">ต่อไป</Button>
                    </Col>
                </Row>
                <br />       
            </div>
        )
    }
}






