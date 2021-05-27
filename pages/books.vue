<template>
  <Books :module-data="data" />
</template>

<script>
import Books from '~/modules/Books';
export default {
  components: { Books },

  async asyncData({ params }) {
    const book = await fetch(`http://localhost:8000/books/all`)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return { data: book };
  },
};
</script>
