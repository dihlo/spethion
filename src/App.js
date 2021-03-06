import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Table, Row, Col } from 'antd';
import './App.css';
import Sinc from './Queue';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			servers: [],
			queue: [],
		};

		this.renderbool = this.renderbool.bind(this);
	}

	componentDidMount() {
	axios.get(`http://ec2-18-221-204-118.us-east-2.compute.amazonaws.com:8085/servers`)
	  .then(res => {
	    let servers = res.data;
	    this.setState({servers});
	  });

	axios.get(`http://ec2-18-221-204-118.us-east-2.compute.amazonaws.com:8085/queue`)
	  .then(api => {
	    let queue = api.data;
	    this.setState({queue});
	  });


	}

	renderbool(param) {
		console.log(this.state);
		let parametr = true;
		return(
			<p>
			{
				parametr == param ? 'да' : 'нет'
			}
			</p>
		);
	}

	render() {
	
	const columns = [{
	  title: 'ID',
	  dataIndex: 'id',
	  render: id => id,
	}, {
	  title: 'URL',
	  dataIndex: 'url',
	  render: url => url,
	}, {
	  title: 'PORT',
	  dataIndex: 'port',
	  render: port => port,
	}, {
	  title: 'Weight',
	  dataIndex: 'weight',
	  render: weight => weight,
	}, {
	  title: 'Status',
	  dataIndex: 'status',
	  render: status => status,
	}, {
	  title: 'Active',
	  dataIndex: 'active',
	  render: (active) => this.renderbool(active),
	}, {
	  title: 'Self',
	  dataIndex: 'self',
	  render: (self) => this.renderbool(self),
	},];

	const columnssinc = [{
	  title: 'ID',
	  dataIndex: 'id',
	  render: id => id,
	}, {
	  title: 'URL',
	  dataIndex: 'url',
	  render: url => url,
	}, {
	  title: 'PORT',
	  dataIndex: 'port',
	  render: port => port,
	}, {
	  title: 'Weight',
	  dataIndex: 'weight',
	  render: weight => weight,
	}, {
	  title: 'Status',
	  dataIndex: 'status',
	  render: status => status,
	}, {
	  title: 'Active',
	  dataIndex: 'active',
	  render: (active) => this.renderbool(active),
	}, {
	  title: 'Self',
	  dataIndex: 'self',
	  render: (self) => this.renderbool(self),
	},];

	const rowSelection = {
	  onChange: (selectedRowKeys, selectedRows) => {
	    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	  },
	  getCheckboxProps: record => ({
	    disabled: record.name === 'Disabled User', // Column configuration not to be checked
	    name: record.name,
	  }),
	};

    return (
      <div>
      	<Row>
      		<Col offset={1} span={22}>
      			<div style={{fontSize: '20px', marginTop: '20px', marginBottom: '20px'}}>Серверы</div>
      			<Table rowSelection={rowSelection} columns={columns} dataSource={this.state.servers} />
      		</Col>
      	</Row>

		<Sinc/>
      </div>
    );
  }
}

export default App;
