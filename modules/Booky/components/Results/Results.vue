<template>
  <div :class="$style.selectCategoriesContainer">
    <h2 :class="$style.title">Tes resultats !</h2>
    <p :class="$style.desc">
      Voici une selection de livres que je te propose d'ajouter à ta liste !
    </p>
    <div :class="$style.categoryList">
      <Card
        v-for="(book, id) in books"
        :key="id"
        :card-data="book"
        :class="[$style.category, { [$style.isActive]: isActive(id) }]"
      />
    </div>
    <NavButtons
      :is-active="true"
      @next-step="$router.push('/auth/register')"
      @previous-step="$emit('previous-step')"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavButtons from '../NavButtons';
import Card from '~/components/Card';

export default {
  name: 'SelectBooks',

  components: {
    NavButtons,
    Card,
  },

  data() {
    return {
      isLoading: false,
      books: [],
    };
  },

  async fetch() {
    try {
      this.isLoading = true;
      this.books = await this.$axios.$post('bookinator/secondstep', {
        bookChoosen: this.selectedBooks,
      });

      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
  },

  computed: {
    ...mapState('booky', ['selectedBooks']),
  },
};
</script>

<style lang="scss" module>
.selectCategoriesContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title,
.desc {
  text-align: center;
}

.desc {
  max-width: 500px;
  margin: auto;
  margin-top: 16px;

  line-height: 24px;
}

.categoryList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}

.category {
  display: block;
  padding: 8px 12px;
  border-radius: 8px;

  color: black;

  text-decoration: none;

  background-color: rgb(237, 237, 237);
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(203, 203, 203);
  }

  &.isActive {
    background-color: rgb(203, 203, 203);
  }
}
</style>
