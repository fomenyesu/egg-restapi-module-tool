import React, { PropTypes } from 'react'
import { Button, Row, Form, Input } from 'antd'
import { config } from '../../utils'
import styles from './index.less'
const FormItem = Form.Item


const login = ({
  loginButtonLoading,
  onOk,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }

      onOk(values)
    })
  }
  return (
    <div>
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src={config.logoSrc} />
        <span>RestAPI Module</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请填写用户名',
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('pass', {
            rules: [
              {
                required: true,
                message: '请填写密码',
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk} loading={loginButtonLoading}>
            登录
          </Button>
        </Row>
        <p>
          <span>账号：admin</span>
          <span>密码：123</span>
        </p>
      </form>   
    </div>
    </div>
  )
}

login.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func,
}

export default Form.create()(login)
