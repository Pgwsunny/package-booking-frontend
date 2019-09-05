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
  yundanhao: 'John Brown',
  receiveName: 32,
  phone: '0571-22098909',
  status1: 18889898989,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  yundanhao: 'Jim Green',
  phone: '0571-22098333',
  status1: 18889898888,
  receiveName: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  yundanhao: 'Joe Black',
  receiveName: 32,
  phone: '0575-22098909',
  status1: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  yundanhao: 'Jim Red',
  receiveName: 18,
  phone: '0575-22098909',
  status1: 18900010002,
  address: 'London No. 2 Lake Park',
}, {
  key: '5',
  yundanhao: 'Jake White',
  receiveName: 18,
  phone: '0575-22098909',
  status1: 18900010002,
  address: 'Dublin No. 2 Lake Park',
}, {
  key: '6',
  yundanhao: 'Jake White',
  receiveName: 18,
  phone: '0575-22098909',
  status1: 18900010002,
  address: 'Dublin No. 2 Lake Park',
}];

export default {
  data() {
    const columns = [{
      title: '运单号',
      dataIndex: 'yundanhao',
      customRender: (text, row, index) => {
          return <a href="javascript:;">{text}</a>;    
      },
    }, {
      title: '收件人',
      dataIndex: 'receiveName',
      customRender: renderContent,
    }, {
      title: '电话',
      dataIndex: 'phone',
      customRender: (value, row, index) => {
        const obj = {
          children: value,
          attrs: {},
        };
        return obj;
      },
    }, {
      title: '状态',
      dataIndex: 'status1',
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