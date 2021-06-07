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
      <div :class="$style.singleImg">
        <img :src="moduleData.img_url" :alt="moduleData.name" />
      </div>
    </div>
  </section>
</template>

<script>
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
};
</script>

<style lang="scss" module>
.singleRoot {
  padding: 2rem 0;
  max-height: calc(100vh - 66px);
  @media screen and (max-width: 768px) {
    max-height: none;
  }
  max-width: 95vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
  justify-content: space-around;

  .leftPart {
    padding: 0 15px 0 5px;
    width: 50%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .title {
      font-size: 50px;
      font-weight: 900;
      color: brown;
    }
    .author {
      font-weight: 700;
      padding: 1rem 0;
    }
    .isbn {
      font-weight: 400;
      color: #b6b6b6;
    }
    .synopsisTitle {
      font-weight: 700;
      padding: 2rem 0 1rem 0;
    }
    .average {
      padding: 2rem 0;
      font-weight: 700;
    }
  }
  .rightPart {
    padding: 0 5px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    width: 50%;
    .singleImg {
      width: 100%;
      height: 100%;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
