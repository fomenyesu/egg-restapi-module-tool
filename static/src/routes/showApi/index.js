import React from 'react'
import styles from './index.less'
import { request, config } from '../../utils'
import {
  Row,
  Col,
  Card,
  Select,
  Input,
  Button,
} from 'antd'
import { connect } from 'dva';


class ShowApi extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currntRequest: '',
      method: 'get',
      result: '',
    }
  }

  handleRequest = () => {
    const { currntRequest } = this.state
    const { desc, ...requestParams } = currntRequest
    requestParams.method = currntRequest.method=='list'||currntRequest.method=='show'?'get':currntRequest.method;
    requestParams.data = document.getElementById("params").value;
    currntRequest.data = document.getElementById("params").value;
    requestParams.url =  requestParams.url +　(currntRequest.method=="show"||currntRequest.method=="delete"||currntRequest.method=="put"?"/1":"");
      console.log(requestParams.url);
    this.setState({
      ...this.state,
      result: <div key="sending">
        请求中<br />
        url:{currntRequest.url}{currntRequest.method=="show"||currntRequest.method=="delete"||currntRequest.method=="put"?"/1":""}<br />
        method:{currntRequest.method=='list'||currntRequest.method=='show'?'get':currntRequest.method}<br />
        params:{currntRequest.data ? JSON.stringify(currntRequest.data) : ''}<br />
      </div>,
    })
    request({ ...requestParams }).then((data) => {
      const state = this.state
      state.result = [this.state.result, <div key="complete"><div>请求完成</div>{JSON.stringify(data)}</div>]
      this.setState(state)
    })
  }

  handeleURLChange = (value) => {
    const state = this.state
    const curretUrl = value.split('?')[0]
    const curretMethod = value.split('?')[1]
    const currntItem = {
      url: curretUrl,
      desc: curretUrl,
      method: curretMethod,
      data:{}
    }
    state.currntRequest = currntItem
    this.setState(state)
  }

  onInputChange = (e) => {
  }

  render () {
    const colProps = {
      lg: 12,
      md: 24,
    }
    const { result, currntRequest } = this.state
    const { method = 'get' } = currntRequest

    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col {...colProps}>
            <Card title="接口说明" style={{
              overflow: 'visible',
            }}>
            <h2>生成API接口：</h2>
            <p>根据增加的模板，生成下列对应的API接口，按restful协议进行对接。</p>
            <table>
            <thead>
            <tr>
            <th>method</th>
            <th>url</th>
            <th>controller name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><strong>GET</strong></td>
            <td>{"/api/restql/{objects}[?per_page={per_page}&amp;page={page}]"}</td>
            <td><strong>index()</strong></td>
            </tr>
            <tr>
            <td><strong>GET</strong></td>
            <td>{"/api/restql/{objects}/:id"}</td>
            <td><strong>show()</strong></td>
            </tr>
            <tr>
            <td><strong>POST</strong></td>
            <td>{"/api/restql/{objects}"}</td>
            <td><strong>create()</strong></td>
            </tr>
            <tr>
            <td><strong>PUT</strong></td>
            <td>{"/api/restql/{objects}/:id"}</td>
            <td><strong>update()</strong></td>
            </tr>
            <tr>
            <td><strong>DELETE</strong></td>
            <td>{"/api/restql/{objects}/:id[s]"}</td>
            <td><strong>destroy()</strong></td>
            </tr></tbody></table>
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="接口调试器：" style={{
              overflow: 'visible',
            }}>
              <div className={styles.option}>
                <Select style={{
                  width: '100%',
                  flex: 1,
                }} 
                  size="large"
                  onChange={this.handeleURLChange}
                >
                  {this.props.list?this.props.list.map((item, index) => {
                    const m = item.method || 'get'
                    return (<Select.Option key={index} value={`${item.url}?${m}`}>
                      <strong>{`${m.toLocaleUpperCase()}`}</strong>  
                      <span style={{width: "100%",display: "block"}}>{item.url}{item.method=="show"||item.method=="delete"||item.method=="put"?"/1":""}</span>
                    </Select.Option>)
                  }):null}
                </Select>
                <Button type="primary" style={{ width: 100, marginLeft: 16 }} onClick={this.handleRequest}>发送</Button>
              </div>
              <div className={styles.params}>
                <div className={styles.label}>Params：</div>
                <Input id="params" onChange={this.onInputChange} size="large" style={{ width: 200 }} placeholder="null" />
                <div style={{ flex: 1, marginLeft: 16 }}>{currntRequest.desc}</div>
              </div>
              <div className={styles.result}>
                {result}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({ showApi }) => { 
  return { 
    list: showApi.list, 
    loading: showApi.loading, 
  }
})(ShowApi);