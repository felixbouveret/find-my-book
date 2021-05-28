<template>
  <Single :module-data="data" :average="average" />
</template>

<script>
import Single from '~/modules/Single';

export default {
  components: { Single },

  async asyncData({ params }) {
    const book = await fetch(`http://localhost:8000/singlebook/${params.id}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    const average = await fetch(
      `http://localhost:8000/singlebook/notes/average/${params.id}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return { data: book, average };
  },
};
</script>
