<template>
  <div :class="$style.selectCategoriesContainer">
    <h2 :class="$style.title">Categories</h2>
    <p :class="$style.desc">
      Qu'elle genre de lecteur es-tu ? Selectionne 3 catégories qui te plaisent
      dans cette liste non exhaustive.
    </p>
    <ul v-if="categories.length" :class="$style.categoryList">
      <li
        v-for="{ label, id } in categories"
        :key="id"
        :class="[$style.category, { [$style.isActive]: isActive(id) }]"
        @click="addCategory(id)"
      >
        {{ label }}
      </li>
    </ul>
    <div v-else :class="[$style.placeholder, $style.categoryList]">
      <Skeleton
        v-for="skeleton in 9"
        :key="skeleton"
        :class="$style.skeleton"
      />
    </div>
    <NavButtons
      :is-active="isStepValid"
      @next-step="$emit('next-step', selectedCategories)"
      @previous-step="$router.push('/')"
    />
  </div>
</template>

<script>
import NavButtons from '../NavButtons';
import Skeleton from '~/components/Skeleton';

export default {
  name: 'SelectCategories',

  components: {
    NavButtons,
    Skeleton,
  },

  data() {
    return {
      isLoading: false,
      maxCategories: 3,
      categories: [],
      selectedCategories: this.$store.state.booky.selectedCategories,
    };
  },

  async fetch() {
    try {
      this.isLoading = true;
      this.categories = await this.$axios.$get(`categories/all`);
      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
  },

  computed: {
    canAddCategories() {
      return this.maxCategories > this.selectedCategories.length;
    },

    isStepValid() {
      return !!this.selectedCategories.length;
    },
  },

  methods: {
    addCategory(categoryId) {
      if (!this.selectedCategories.includes(categoryId)) {
        if (this.canAddCategories) this.selectedCategories.push(categoryId);
      } else {
        const categoryIndex = this.selectedCategories.indexOf(categoryId); // get  "car" index
        this.selectedCategories.splice(categoryIndex, 1);
      }
    },

    isActive(categoryId) {
      return this.selectedCategories.includes(categoryId);
    },
  },
};
</script>

<style lang="scss" module>
.selectCategoriesContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
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

.skeleton {
  width: 120px;
  height: 32px;
}
</style>
