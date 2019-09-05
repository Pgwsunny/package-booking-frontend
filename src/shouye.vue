<template>
  <a-table :columns="columns" :dataSource="data" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
    <template slot="action" slot-scope="text, record">
      <span>
        <a href="javascript:;">Action 一 {{record.name}}</a>
        <a-divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <a-divider type="vertical" />
        <a href="javascript:;" class="ant-dropdown-link">
          More actions <a-icon type="down" />
        </a>
      </span>
    </template>
  </a-table>
</template>
<script>
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {},
  };
  return obj;
};



const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park',
}, {
  key: '5',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park',
}];

export default {
  data() {
    const columns = [{
      title: '运单号',
      dataIndex: 'name',
      customRender: (text, row, index) => {
          return <a href="javascript:;">{text}</a>;    
      },
    }, {
      title: '收件人',
      dataIndex: 'age',
      customRender: renderContent,
    }, {
      title: '电话',
      dataIndex: 'tel',
      customRender: (value, row, index) => {
        const obj = {
          children: value,
          attrs: {},
        };
        return obj;
      },
    }, {
      title: '状态',
      dataIndex: 'phone',
      customRender: renderContent,
    }, {
      title: '预约时间',
      dataIndex: 'address',
      customRender: renderContent,
    }];
    return {
      data,
      columns,
    }
  }
}
</script>