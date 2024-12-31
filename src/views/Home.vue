<template>
  <main>
    <section class="contents">
      <div v-for="(title, index) in tit" :key="index">
        <h2>{{ title }}</h2>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'AppHome',
    data() {
      return {
        tit: ['신제품', '인기상품'],
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>