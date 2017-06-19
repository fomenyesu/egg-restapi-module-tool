import React, { Component, PropTypes } from 'react';
import { Input, Form, Button, Upload, Icon, message, DatePicker,Switch } from 'antd';
import moment from 'moment';

import config from '../../utils/config';

const FormItem = Form.Item;
class TableView extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	static defaultProps = {
		template: '',
		cont: '',
		template_name: '',
		status: 1,
		time: '',
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.form.validateFields((err, values) => {
			if (err) {
				return ;
			}
			values.time = Date.parse(new Date())/1000;
			this.props.onSubmit(values);
		})
	}

	goBack() {
		this.context.router.goBack();
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: { span: 3},
			wrapperCol: { span: 12}
		}

		return (
			<div className="content-inner">
				<div style={{ borderBottom: '1px solid #ddd', marginBottom: 20, paddingBottom: 10 }}>
					<Button style={{ marginRight: 10 }} onClick={this.goBack.bind(this)}>返回</Button>
					<Button type="primary" onClick={this.onSubmit.bind(this)}>确认</Button>
				</div>

				<Form>
					<FormItem {...formItemLayout} label="模块">
						{
							getFieldDecorator('template', {
								initialValue: this.props.template,
								rules: [{
									required: true, message: '请输入模块'
								}]
							})(<Input placeholder="请输入模块"  />)
						}
					</FormItem>
					<FormItem {...formItemLayout} label="模块名称">
						{
							getFieldDecorator('template_name', {
								initialValue: this.props.template_name,
								rules: [{
									required: true, message: '请输入模块名称'
								}]
							})(<Input placeholder="请输入模块名称" />)						
						}
					</FormItem>
					<FormItem {...formItemLayout} label="状态">
						{
							getFieldDecorator('status', {
								valuePropName: 'checked',
								initialValue: !!this.props.status,
							})(<Switch checkedChildren={'开'} unCheckedChildren={'关'}/>)						
						}
					</FormItem>
					<FormItem {...formItemLayout} label="数据内容">
						{
							getFieldDecorator('cont', {
								initialValue: this.props.cont,
								rules: [{
									required: true, message: '请输入模块数据内容'
								}]
							})(<Input type="textarea" placeholder='示例：[{"Field":"uid","Type":"int(10)","Null":"NO","Key":"PRI","Default":null,"Extra":"auto_increment"},{"Field":"name","Type":"varchar(20)","Null":"NO","Key":"UNI","Default":null,"Extra":""}]' autosize={{ minRows: 5, maxRows: 10 }} />)
						}
						<div style={{color: '#666',marginTop:'10px',lineHeight: '18px'}}>
						 示例：{JSON.stringify([{"Field":"uid","Type":"int(10)","Null":"NO","Key":"PRI","Default":null,"Extra":"auto_increment"},{"Field":"name","Type":"varchar(20)","Null":"NO","Key":"UNI","Default":null,"Extra":""}], null, 2) }
						</div>
					</FormItem>

				</Form>
			</div>
		)
	}
};

export default Form.create()(TableView);