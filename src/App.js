import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Table } from 'antd';
import './App.css';

class App extends Component {
  render() {
  	const columns = [{
	  title: 'ID',
	  dataIndex: 'id',
	}, {
	  title: 'URL',
	  dataIndex: 'url',
	}, {
	  title: 'PORT',
	  dataIndex: 'port',
	}, {
	  title: 'Weight',
	  dataIndex: 'weight',
	}, {
	  title: 'Stats',
	  dataIndex: 'stats',
	}, {
	  title: 'Active',
	  dataIndex: 'active',
	}, {
	  title: 'Self',
	  dataIndex: 'self',
	},];


	const data = [{
	  key: '1',
	  id: '1',
	  url: 'http//123123.2142134.214214.ru',
	  port: '2132141',
	  weight: '11111',
	  stats: 'Good',
	  active: '',
	  self: 'OK',
	}, {
	  key: '2',
	  id: '2',
	  url: 'http//123123.2142134.214214.ru',
	  port: '2132141',
	  weight: '11111',
	  stats: 'Good',
	  active: '',
	  self: 'OK',
	}, {
	  key: '3',
	  id: '3',
	  url: 'http//123123.2142134.214214.ru',
	  port: '2132141',
	  weight: '11111',
	  stats: 'Good',
	  active: '',
	  self: 'OK',
	}, {
	  key: '4',
	  id: '4',
	  url: 'http//123123.2142134.214214.ru',
	  port: '2132141',
	  weight: '11111',
	  stats: 'Good',
	  active: '',
	  self: 'OK',
	}];

	// rowSelection object indicates the need for row selection
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
      	<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default App;
