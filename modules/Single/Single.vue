<template>
  <section :class="$style.singleRoot">
    <div :class="$style.singleMain">
      <div :class="$style.leftPart">
        <h1 :class="$style.title">{{ moduleData.name }}</h1>
        <h2 :class="$style.author">{{ moduleData.auteur }}</h2>
        <p :class="$style.isbn">ISBN : {{ moduleData.isbn_code }}</p>
        <p :class="$style.synopsisTitle">Synopsis :</p>
        <p :class="$style.synopsis">{{ moduleData.synopsis }}</p>
        <p :class="$style.average">Note moyenne : {{ average.average }}</p>
      </div>
      <div :class="$style.rightPart">
        <div :class="$style.likeButton" @click="addLikeToBook(moduleData.id)" />
        <div :class="$style.singleImg">
          <img :src="moduleData.img_url" :alt="moduleData.name" />
        </div>
      </div>
    </div>
    <div :class="$style.singleCommentaryRoot">
      <h2>Commentaires :</h2>
      <CommentaryListing :module-data="commentary" :book-id="moduleData.id" />
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { CommentaryListing } from './components';
export default {
  name: 'SingleModule',

  components: { CommentaryListing },

  props: {
    moduleData: {
      type: Object,
      default: () => {},
    },
    average: {
      type: Object,
      default: () => {},
    },
    commentary: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapActions('user', ['addLikeToBook']),
  },
};
</script>

<style lang="scss" module>
.singleMain {
  display: flex;
  justify-content: space-around;
  max-width: 95vw;
  max-height: calc(100vh - 66px);
  margin: 0 auto;
  padding: 4rem 0;
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
      color: $red;
      font-weight: 900;
      font-size: 32px;
    }
    .author {
      padding: 1rem 0;

      font-weight: 700;
      font-size: 24px;
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

      background-color: $red;
      transform: scale(0.6);

      content: url('~/assets/img/heart.svg');

      &:hover {
        background-color: rgba($color: $red, $alpha: 0.7);
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

.singleCommentaryRoot {
  padding: 2rem;
}
</style>
