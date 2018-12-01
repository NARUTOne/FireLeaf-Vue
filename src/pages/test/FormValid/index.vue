<template>
  <div>
    <Form ref="formModal" :model="formModal" :rules="ruleCustomModal" :label-width="120">
    <FormItem label="预警条件" prop="conditionId">
        <Select  multiple placeholder="请选择" v-model="formModal.conditionId">
          <Option :value="112">112</Option>
          <Option :value="222">222</Option>
          <Option :value="333">333</Option>
        </Select>
      </FormItem>
      <div v-show="warnStatus">
        <FormItem label="预警通知方式" prop="noticeWay" >
          <Select  multiple placeholder="请选择" v-model="formModal.noticeWay">
            <Option :value="1">每周</Option>
            <Option :value="2">每月</Option>
            <Option :value="3">每季度</Option>
          </Select>
        </FormItem>
        <FormItem label="预警通知对象" prop="noticeObj" >
          <Select  multiple placeholder="请选择" v-model="formModal.noticeObj">
            <Option :value="1">每周</Option>
            <Option :value="2">每月</Option>
            <Option :value="3">每季度</Option>
          </Select>
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  name: "FormValid",
  props: {
    formData: {
      type: Object,
      default () {
        return {
          conditionId: [],
          noticeWay: [],
          noticeObj: []
        };
      }
    }
  },
  watch: {
    formData (obj) {
      if (obj) {
        console.log(obj);
        this.formModal = {
          conditionId: obj.conditionId,
          noticeWay: obj.noticeWay,
          noticeObj: obj.noticeObj
        };
      }
    }
  },
  data () {
    const validateWay = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('预警通知方式不能为空'));
      } else {
        callback();
      }
    };
    // const validateObject = (rule, value, callback) => {
    //   if (value) {
    //     if (value.length < 1) {
    //       callback(new Error('预警通知对象不能为空'));
    //     } else {
    //       callback();
    //     }
    //   }
    //   callback();
    // };

    /**
     * 以下两种方式均可以，采用第二种需要注意：type不写，默认为'string'
     */
    return {
      ruleCustomModal: {
        noticeWay: [
          // {
          //   required: true,
          //   message: '请选择预警通知方式！',
          //   trigger: 'change'
          // }
          {
            required: true,
            validator: validateWay,
            trigger: 'change'
          }
        ],
        noticeObj: [
          {
            type: 'array',
            required: true,
            message: '请选择预警通知方式！',
            trigger: 'change'
          }
          // {
          //   required: true,
          //   validator: validateObject,
          //   trigger: 'change'
          // }
        ]
      },
      formModal: {
        conditionId: [],
        noticeWay: [],
        noticeObj: []
      }
    };
  },
  mounted () {
    // this.alarmConditionA();
  },
  computed: {
    warnStatus () {
      if (this.formModal.conditionId) {
        console.log(this.formModal);
        return this.formModal.conditionId.length > 0;
      }
    }
  },
  methods: {
    getRule () {
      return new Promise((resolve) => {
        this.$refs['formModal'].validate((valid) => {
          if (valid) {
            console.log(1122);
            resolve(this.formModal);
          }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>

</style>
