<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 6" :key="o" class="panel pan-btn light-blue-btn" @mouseenter="changeItem(o)">
      <div class="pan-desc">
        {{ '列表内容 ' + o }}
      </div>
      <div class="pan-value">
        {{ o }}
      </div>
      <div class="pan-comment">
        {{ 'sdf' }}
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'StatisticCard',
  data() {
    return {
      items: ['1', '2323', '232333', '333'],
      currentIndex: 1
    }
  },
  methods: {
    changeItem: function(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
        alert(index)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel {
  .pan-comment {
    /*float: left;*/
  }

  .pan-value {
    float: right;
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  /*width: 480px;*/
}
</style>
