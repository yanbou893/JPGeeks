<template>
    <div class="skills">
        <infra />
        <front />
        <back />
        <tool />
        <other />
    </div>
</template>
<script>
import back from '~/components/skill/skill_back.vue'
import front from '~/components/skill/skill_front.vue'
import infra from '~/components/skill/skill_infra.vue'
import other from '~/components/skill/skill_other.vue'
import tool from '~/components/skill/skill_tool.vue'
  
export default {
  components: {
    back,
    front,
    infra,
    other,
    tool
  }
}
</script>
<style>
  .skills{
    width:70%;
    margin:0 auto;
  }
</style>