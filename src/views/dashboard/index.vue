<template>
  <div class="dashboard-container">
    <div v-for="tab in tabConfig" :key="tab.index">
      Tab: {{ tab }}
    </div>
    <div v-for="domain in domainConfig" :key="domain">
      Domain: {{ domain }}
    </div>
    <div v-for="group in groupConfig" :key="group">
      Group: {{ group }}
    </div>
    <div v-for="member in groupMembers" :key="member">
      Member: {{ member }}
    </div>
    <statistic-card/>
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StatisticCard from './components/StatisticCard'

export default {
  name: 'Dashboard',
  components: { StatisticCard },
  props: {
    tabConfig: {
      type: Array,
      default() {
        return []
      }
    },
    domainConfig: {
      type: Array,
      default() {
        return []
      }
    },
    groupConfig: {
      type: Array,
      default() {
        return []
      }
    },
    groupMembers: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
