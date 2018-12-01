<template>
  <div class="test">
    <FormValid :formData='formData' ref="form-valid"></FormValid>
    <div class="btns-margin t-center">
      <Button type="primary" @click="handleSave">提交</Button>
      <Button @click="handleCancle">取消</Button>
    </div>
  </div>
</template>

<script>
import FormValid from './FormValid';

export default {
  name: 'Test',
  components: {
    FormValid
  },
  data () {
    return {
      formData: {
        conditionId: [],
        noticeWay: [],
        noticeObj: []
      }
    };
  },
  methods: {
    handleSave () {
      this.$refs['form-valid'].getRule().then(res => {
        this.formData = res;
        console.log(res);
      });
    },
    handleCancle () {
      this.formData = { 
        conditionId: [],
        noticeWay: [],
        noticeObj: []
      };
    }
  }
};
</script>

<style>

</style>