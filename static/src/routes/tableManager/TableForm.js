import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import TableView from './TableView';
import { routerRedux } from 'dva/router'

import { message } from 'antd';
import { attachmentURL } from '../../utils/config';

const Const = {
	module: 'tableManager'
}

class TableForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		const id = this.props.params && this.props.params.id;
		const { dispatch } = this.props;

		if (id) {
			dispatch({ type: 'tableForm/loadTable', payload: { id, ...Const } });
		}
	}

	componentWillUnmount() {
		this.props.dispatch({
			type: 'tableForm/resetState'
		});
	}

	goBack() {
		this.props.dispatch(routerRedux.push({pathname: '/tableManager'}));;
	}

	onSubmit(values) {
		const hide = message.loading('正在保存...', 0);

		this.props.dispatch({ 
			type: 'tableForm/saveTable',
			payload: {
				...this.props,
				template: values.template,
				cont: values.cont,
				template_name: values.template_name,
				status: values.status,
				time: values.time,
				...Const,
				callback: (data) => {
					hide();

					if (data && data.success) {
						message.success('保存成功');
						this.goBack();
					} else {
						message.error('保存失败');
					}
				}
			}
		});
	}

	render() {
		const props = this.props;
		return (
			<TableView
				template={props.template}
				cont={props.cont}
				template_name={props.template_name}
				status={props.status}
				seotitle={props.seotitle}
				time={props.time}
				onSubmit={this.onSubmit.bind(this)}/>
		)
	}
}

export default connect(({ tableForm, app }) => {
	return {
		...tableForm,
		content: tableForm.con,
		uid: app.user.uid,
		name: app.user.name
	}
})(TableForm);