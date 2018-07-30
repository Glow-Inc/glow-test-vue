<template lang='pug'>
div.home.mt-5
  div.req
    h5 Requirement
    div There's a table component in this app, it has four props: `data`, `columns`, `sortBy` and `order`:
    ol
      li The `data` prop is an array of object and is the data source of the table. Each object in the data is an IMDB movie entry.
      li The `columns` prop is also an array type and is used to tell the table what columns to display;
      li The `sortBy` and `order` props are string types. The `sortBy` prop is to tell the table which property to sort by. And the `order` is used to specifiy the order to sort in (ascending or descending order);

    div Please finish the table component to meet the following requirements:
    ol
      li The table displays all the movie entries;
      li The table automatically updates itself when any of the props changes;
      li The header is fixed on the top;

    h5.mt-4 Bonus:
    ul
      li Easy to use
      li Easy to extend
      li Easy to read the data

  glow-table.mt-5(:data="allMovies"
    :columns="columns"
    sortBy='movie_title')

</template>

<script>
import GlowTable from "@/components/Table";

export default {
  name: "home",
  components: {
    GlowTable
  },

  data() {
    return {};
  },

  computed: {
    allMovies() {
      return this.$store.getters.allMovies;
    },

    columns() {
      return [
        "movie_title",
        "director_name",
        "imdb_score",
        "genres",
        "language",
        "duration"
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.req {
  text-align: left;
}
</style>
