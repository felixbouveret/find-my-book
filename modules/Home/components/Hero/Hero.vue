<template>
  <section :class="$style.heroContainer">
    <Wrapper :class="$style.inner">
      <div :class="$style.view">
        <img src="~/assets/img/booky.png" alt="" />
      </div>
      <div :class="$style.desc">
        <h1 :class="$style.title">
          {{ title }}
        </h1>
        <p :class="$style.description">
          {{ description }}
        </p>
        <div :class="$style.ctaBox">
          <Button :class="$style.cta" is-light href="auth/register">{{
            ctaRegister
          }}</Button>
          <Button :class="$style.cta">{{ ctaBooky }}</Button>
        </div>
        <p :class="$style.disclaimer">
          {{ disclaimer }}
        </p>
      </div>
    </Wrapper>
  </section>
</template>

<script>
import message from './message.json';
import Button from '~/components/Button';

export default {
  components: {
    Button,
  },
  data() {
    return {
      ...message,
    };
  },
};
</script>

<style lang="scss" module>
.heroContainer {
  margin-bottom: 80px;
  padding: 0 24px;
}

.inner {
  display: flex;
  gap: 88px;
  align-items: center;
  justify-content: center;
}

.view {
  position: relative;

  display: none;

  flex-grow: 1;
  max-width: 330px;

  @media (min-width: 840px) {
    display: block;
  }

  img {
    position: relative;
    z-index: 1;

    display: block;
    margin: 0 auto;
  }

  &::before {
    position: absolute;

    bottom: 0;
    left: 0;

    display: block;

    width: 100%;
    height: calc(100% - 42px);

    border-radius: 8px;

    background-color: #f1f1f1;

    content: '';
  }
}

.desc {
  max-width: 620px;
}

.title {
  font-size: 54px;
  line-height: 64px;
}

.description {
  margin-top: 24px;

  line-height: 24px;
}

.ctaBox {
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 376px;
  margin-top: 24px;

  .cta {
    flex-grow: 1;
  }
}

.disclaimer {
  margin-top: 8px;

  color: rgba($color: #000000, $alpha: 0.6);
  font-size: 12px;
  line-height: 24px;
}
</style>
