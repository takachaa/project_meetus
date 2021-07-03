<template>
  <div>
    <loading
      :active.sync="isLoadingStatus"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="true"
    ></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
    isLoading: false,
    }
  },
  computed:{
    isLoadingStatus(){
        return this.$store.getters.lodingStatus
    }
  },
  components: {
    "loading":Loading
  },
  methods: {
    onCancel:function() {
      
    }
  }
}
</script>
