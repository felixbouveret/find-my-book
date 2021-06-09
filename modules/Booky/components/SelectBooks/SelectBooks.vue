<template>
  <div :class="$style.selectCategoriesContainer">
    <h2 :class="$style.title">Livres</h2>
    <p :class="$style.desc">
      Parmis ces livres, lesquels te donnent le plus envie ? Choisis les bien,
      tu ne peux en selectionner que 3 !
    </p>
    <ul :class="$style.categoryList">
      <li
        v-for="{ name, id } in categories"
        :key="id"
        :class="[$style.category, { [$style.isActive]: isActive(id) }]"
        @click="addCategory(id)"
      >
        {{ name }}
      </li>
    </ul>
    <NavButtons
      :is-active="isStepValid"
      @next-step="$emit('next-step', selectedBooks)"
      @previous-step="$emit('previous-step')"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavButtons from '../NavButtons';

export default {
  name: 'SelectBooks',

  components: {
    NavButtons,
  },

  data() {
    return {
      isLoading: false,
      maxBooks: 3,
      categories: [],
      selectedBooks: this.$store.state.booky.selectedBooks,
    };
  },

  async fetch() {
    try {
      this.isLoading = true;
      this.categories = await this.$axios.$post('bookinator/firststep', {
        categorieChoosen: this.selectedCategories,
      });

      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
  },

  computed: {
    ...mapState('booky', ['selectedCategories']),

    canAddBooks() {
      return this.maxBooks > this.selectedBooks.length;
    },

    isStepValid() {
      return !!this.selectedBooks.length;
    },
  },

  methods: {
    addBook(bookId) {
      if (!this.selectedBooks.includes(bookId)) {
        if (this.canAddBooks) this.selectedBooks.push(bookId);
      } else {
        const bookIndex = this.selectedBooks.indexOf(bookId); // get  "car" index
        this.selectedBooks.splice(bookIndex, 1);
      }
    },

    isActive(bookId) {
      return this.selectedBooks.includes(bookId);
    },
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
