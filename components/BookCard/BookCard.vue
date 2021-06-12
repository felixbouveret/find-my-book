<template>
  <a :class="$style.container" :href="`/single/${id}`">
    <div :class="$style.view">
      <img :src="thumbnail" :alt="title" />
    </div>
    <div :class="$style.content">
      <p :class="$style.title">{{ title }}</p>
      <p :class="$style.author">{{ author }}</p>
      <div :class="$style.actions">
        <div :class="$style.infos">
          <div :class="$style.chart">
            <CommentIcon />
            <p>{{ commentsNumber }}</p>
          </div>
          <div :class="$style.chart">
            <StarIcon :class="$style.star" />
            <p>{{ gradesNumber }}</p>
          </div>
        </div>
        <button :class="$style.add" @click.prevent="addLikeToBook(id)">
          <HeartIcon />
          <span>Ajouter</span>
        </button>
      </div>
    </div>
  </a>
</template>

<script>
import { mapActions } from 'vuex';
import HeartIcon from '~/assets/icons/heart.svg?inline';
import CommentIcon from '~/assets/icons/comment.svg?inline';
import StarIcon from '~/assets/icons/star.svg?inline';

export default {
  name: 'BookCard',

  components: {
    HeartIcon,
    CommentIcon,
    StarIcon,
  },

  props: {
    id: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    grade: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    commentsNumber() {
      if (!this.comments) return Math.floor(Math.random() * 100);
      return this.comments;
    },

    gradesNumber() {
      if (!this.grades) return Math.round(Math.random() * 5 * 10) / 10;
      return this.grades;
    },
  },

  methods: {
    ...mapActions('user', ['addLikeToBook']),
  },
};
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;

  &:hover .view img {
    box-shadow: 0px 4px 16px rgba($color: #000000, $alpha: 0.1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, -0.0001, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

.view {
  flex-grow: 1;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;

    transition-duration: 0.3s;

    transition-property: transform box-shadow;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  font-size: 18px;
}

.author {
  color: rgba($color: #000000, $alpha: 0.5);
  font-size: 16px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.infos {
  display: flex;
  gap: 12px;
  align-items: center;
}

.chart {
  display: flex;
  gap: 4px;
  align-items: center;
}

.star path {
  fill: rgb(244, 202, 96);
}

.add {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 4px 8px;
  border: 0;
  border-radius: 8px;

  color: $red;

  background-color: rgba($color: $red, $alpha: 0.3);
  cursor: pointer;

  transition: background-color 0.3s;

  svg path {
    fill: $red;
  }

  &:hover {
    background-color: rgba($color: $red, $alpha: 0.2);
  }
}
</style>
