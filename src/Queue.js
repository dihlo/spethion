import React, { Component } from 'react';

import { Button, Table, Row, Col } from 'antd';
import './App.css';

import axios from 'axios';

class Sinc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			queue: [],
		};

		this.renderbool = this.renderbool.bind(this);
	}

	componentDidMount() {

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
	
	const columnssinc = [{
	  title: 'StoreId',
	  dataIndex: 'id',
	  render: id => id,
	}, {
	  title: 'URL',
	  dataIndex: 'url',
	  render: url => url,
	}, {
	  title: 'Shot',
	  dataIndex: 'shot',
	  render: shot => shot,
	}, {
	  title: 'Shot Dt',
	  dataIndex: 'shotdt',
	  render: shotdt => shotdt,
	}, {
	  title: 'DT',
	  dataIndex: 'dt',
	  render: dt => dt,
	}];

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
      			<div style={{fontSize: '20px', marginTop: '20px', marginBottom: '20px'}}>Очередь на синхронизацию</div>
      			<Table rowSelection={rowSelection} columns={columnssinc} dataSource={this.state.queue} />
      		</Col>
      	</Row>
      </div>
    );
  }
}

export default Sinc;
