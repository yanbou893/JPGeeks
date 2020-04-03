<template>
<div class="user">
    <User  />
    <product style="clear: left" />
</div> 
</template>

<script>
import User from '~/components/user/user_card.vue'
import product from '~/components/main/product_tab_user.vue'

export default {
  components: {
    product,
    User
  },
}
</script>

<style type="text/css">
    
</style>