<template>
  <div class="component-a">
    {{ title }}
  </div>
</template>

<script>
  export default {
    name: "ComponentA",
    data () {
      return {
        title: "Component A"
      }
    },
    mounted () {
      console.log('component a loaded');
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common/_variables.scss';

  .component-a {
    background: $secondary;
    color: color-yiq($secondary);
  }
</style>
