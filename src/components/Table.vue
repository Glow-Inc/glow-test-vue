<template lang="pug">
  div.table.p-5.border
    | Hey, I'm the table. Change me!
</template>

<script>
export default {
  name: "glow-table",

  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    sortBy: {
      type: String,
      required: true
    },
    order: {
      type: String,
      default: "ascending"
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
