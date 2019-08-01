import React, { Component } from 'react'
import { Upload, Icon, message, Row, Col, Divider } from 'antd';
import './../App.css';

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

export default class ShopInfo extends Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div>
                <Row>
                    <Col span={6}>
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
                    <Col span={18}>
                        <Col span={6}>
                            ชื่อร้านค้า
                        </Col>
                        <Col span={6}>
                            <p>(ชื่อร้าน)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            ที่อยู่
                        </Col>
                        <Col span={6}>
                            <p>(ที่อยู่)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            หมายเลขโทรศัพท์
                        </Col>
                        <Col span={6}>
                            <p>(เบอร์โทร)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            อีเมลล์
                        </Col>
                        <Col span={6}>
                            <p>(อีเมลล์)</p>
                        </Col>
                    </Col>
                </Row>
                <Divider orientation="left">ข้อมูลบัญชี</Divider>
                <p className="bold">ธนาคาร</p>
                <br />
                <Row>
                    <Col span={18}>
                        <Col span={6}>
                            ธนาคาร
                        </Col>
                        <Col span={6}>
                            <p>(ชื่อธนาคาร)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            หมายเลขบัญชี
                        </Col>
                        <Col span={6}>
                            <p>(หมายเลขบัญชี)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            ชื่อบัญชี
                        </Col>
                        <Col span={6}>
                            <p>(ชื่อบัญชี)</p>
                        </Col>
                    </Col>
                </Row>

                <Divider />

                <br />
                <br />
                <p className="bold">พร้อมเพย์</p>
                <br />
                <Row>
                    <Col span={18}>
                        <Col span={6}>
                            หมายเลขโทรศัพท์/เลขประตัวประชาชน
                        </Col>
                        <Col span={6}>
                            <p>(หมายเลขบัญชี)</p>
                        </Col>
                        <br />
                        <br />
                        <Col span={6}>
                            ชื่อบัญชี
                        </Col>
                        <Col span={6}>
                            <p>(ชื่อบัญชี)</p>
                        </Col>
                        <br />
                        <br />

                    </Col>
                </Row>
            </div>
        )
    }
}
