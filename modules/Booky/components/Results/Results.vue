<template>
  <div :class="$style.selectCategoriesContainer">
    <h2 :class="$style.title">Tes resultats !</h2>
    <p :class="$style.desc">
      Voici une selection de livres que je te propose d'ajouter à ta liste !
    </p>
    <div :class="$style.bookList">
      <template v-if="books.length">
        <BookCard
          v-for="{ auteur, id, img_url, name } in books"
          :id="id"
          :key="id"
          :author="auteur"
          :thumbnail="img_url"
          :title="name"
        />
      </template>
      <template v-else>
        <Skeleton />
        <Skeleton />
      </template>
    </div>
    <NavButtons
      :is-active="true"
      next-step-wording="Terminer"
      @next-step="$router.push('/auth/register')"
      @previous-step="$emit('previous-step')"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavButtons from '../NavButtons';
import BookCard from '~/components/BookCard';

export default {
  name: 'SelectBooks',

  components: {
    NavButtons,
    BookCard,
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

.bookList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 64px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 780px;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1000px;
  }
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
