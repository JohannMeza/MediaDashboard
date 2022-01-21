<template>
  <SocialDashboard :networks="quantityNetworks" />
  <Today :networks="quantityNetworks" />
</template>

<script>
import Today from './components/Today.vue'
import SocialDashboard from './components/SocialDashboard.vue'
import { darkMode } from './libs/darkMode'

import { onMounted, ref } from 'vue'
import { getQuantity } from './services/NetworksServices'

export default {
  name: 'App',

  components: { Today, SocialDashboard },

  props: { 
    networks: Object
  },

  setup () {
    const quantityNetworks = ref();

    const getNetwork = async () => {
      const res = await getQuantity();
      quantityNetworks.value = res.data
    }

    onMounted(() => {
      darkMode('btnMode')
    })

    getNetwork()

    return { quantityNetworks }
  }
}
</script>

<style lang="scss">
@import './dev/sass/base/_base.scss';

.h1 { font-size: 1.3rem; }
.h2 { font-size: 1.1rem; }
.h3 { font-size: .9rem; }

.span { font-size: .8rem; }

.width-section {
  width: 95%;
  max-width: 1200px;
  margin: 25px auto 0;
}
</style>
