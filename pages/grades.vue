<template>
  <Wrapper>
    <GradesModule :module-data="data" />
  </Wrapper>
</template>

<script>
import GradesModule from '~/modules/Grades';
export default {
  components: { GradesModule },
  middleware: 'auth/isNotConnected',

  async asyncData() {
    const grades = await fetch(`http://localhost:8000/books/average/10`)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return { data: grades };
  },
};
</script>
