<template>
  <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
</template>

<script>
export default {
    name: 'Abc',
    display: 'Abc',
    data() {
        return {
          num: 1
        }
    },
    methods: {
      handleChange(value) {
        console.info('zoulezoule')
        console.log(value);
      }
    },
}
</script>
