<template>
<div class="user">
    <User />
    <Tab style="clear: left" />
</div> 
</template>

<script>
import User from '~/components/user/user_card.vue'
import Tab from '~/components/user/usertab.vue'

export default {
  components: {
    Tab,
    User
  }
}
</script>

<style type="text/css">
    
</style>