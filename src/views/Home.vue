<template lang='pug'>
div.home.mt-5
  div.req
    h5 Requirement
    div Please design and build a table component that meets the following requirements:
    ol
      li It accepts an array of objects as a prop and each object in the array is an entry/row to display in the table;
      li You can hide some of the columns by providing the headers you want to hide as a prop. And the table should automatically reflect that when you update the prop;
      li You can sort the entries in the table by a column's value (e.g. clicking the header of a column sorts the entries in ascending/descending);
      li The header is fixed on the top;

    h5.mt-4 Data
    div There are 256 IMDB movies included in the data store to help you focus on building the component. But feel free to use other kinds of data to test your table.

    h5.mt-4 Bonus:
    ul
      li Easy to use
      li Easy to extend
      li Easy to read the data

</template>

<script>
export default {
  name: "home",
  components: {},

  data() {
    return {};
  },

  computed: {
    allMovies() {
      return this.$store.getters.allMovies;
    }
  }
};
</script>

<style lang="scss" scoped>
.req {
  text-align: left;
}
</style>
