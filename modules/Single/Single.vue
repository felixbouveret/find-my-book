<template>
  <section :class="$style.singleRoot">
    <div :class="$style.leftPart">
      <h1 :class="$style.title">{{ moduleData.name }}</h1>
      <h2 :class="$style.author">{{ moduleData.auteur }}</h2>
      <p :class="$style.isbn">ISBN : {{ moduleData.isbn_code }}</p>
      <p :class="$style.synopsisTitle">Synopsis :</p>
      <p :class="$style.synopsis">{{ moduleData.synopsis }}</p>
      <p :class="$style.average">Average : {{ average.average }}</p>
    </div>
    <div :class="$style.rightPart">
      <div :class="$style.likeButton" @click="addLikeToBook(moduleData.id)" />
      <div :class="$style.singleImg">
        <img :src="moduleData.img_url" :alt="moduleData.name" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'SingleModule',

  props: {
    moduleData: {
      type: Object,
      default: () => {},
    },
    average: {
      type: String,
      default: '',
    },
  },

  methods: {
    ...mapActions('user', ['addLikeToBook']),
  },
};
</script>

<style lang="scss" module>
.singleRoot {
  display: flex;
  justify-content: space-around;
  max-width: 95vw;
  max-height: calc(100vh - 66px);
  margin: 0 auto;
  padding: 2rem 0;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    max-height: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }

  .leftPart {
    width: 50%;
    padding: 0 15px 0 5px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .title {
      color: brown;
      font-weight: 900;
      font-size: 50px;
    }
    .author {
      padding: 1rem 0;

      font-weight: 700;
    }
    .isbn {
      color: #b6b6b6;
      font-weight: 400;
    }
    .synopsisTitle {
      padding: 2rem 0 1rem 0;

      font-weight: 700;
    }
    .average {
      padding: 2rem 0;

      font-weight: 700;
    }
  }
  .rightPart {
    position: relative;

    width: 50%;
    padding: 0 5px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .likeButton {
      position: absolute;
      top: -50px;
      right: 0px;

      padding: 24px;

      border-radius: 1000px;

      background-color: #ff007a;
      transform: scale(0.6);

      content: url('~/assets/img/heart.svg');

      &:hover {
        background-color: rgba($color: #ff007a, $alpha: 0.7);
      }
    }

    .singleImg {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
