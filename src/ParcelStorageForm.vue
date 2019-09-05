<template>
  <a-form :form="form">
          <p>包裹入库</p>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="运单号"
    >
      <a-input
        v-decorator="[
          'yundanhao',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
        placeholder="请输入运单号"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="收件人"
    >
      <a-input
        v-decorator="[
          'shoujianren',
          {rules: [{ required: checkNick, message: '请输入收件人姓名' }]}
        ]"
        placeholder="请输入收件人姓名"
      />
    </a-form-item>

   <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="电话"
    >
      <a-input
        v-decorator="[
          'dianhua',
          {rules: [{ required: checkNick, message: '请输入电话' }]}
        ]"
        placeholder="请输入电话"
      />
    </a-form-item>

    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="重量"
    >
      <a-input
        v-decorator="[
          'weight',
          {rules: [{ required: checkNick, message: '请输入重量' }]}
        ]"
        placeholder="请输入重量"
      />
    </a-form-item>

    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-button type="primary" @click="check">Check</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
</script>