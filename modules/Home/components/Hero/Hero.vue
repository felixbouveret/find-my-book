<template>
  <section :class="$style.heroContainer">
    <Wrapper :class="$style.inner">
      <div :class="$style.view">
        <img src="~/assets/img/perso.svg" alt="" />
      </div>
      <div :class="$style.desc">
        <h1 :class="$style.title">
          {{ title }}
        </h1>
        <p :class="$style.description">
          {{ description }}
        </p>
        <div :class="$style.ctaBox">
          <Button
            v-if="!connected"
            is-light
            :class="$style.cta"
            href="auth/register"
          >
            {{ ctaRegister }}
          </Button>
          <Button :class="[{ [$style.cta]: !connected }]">{{
            ctaBooky
          }}</Button>
        </div>
        <p v-if="!connected" :class="$style.disclaimer">
          {{ disclaimer }}
        </p>
      </div>
    </Wrapper>
  </section>
</template>

<script>
import { mapState } from 'vuex';
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
  computed: {
    ...mapState('user', ['connected', 'username']),
  },
};
</script>

<style lang="scss" module>
.heroContainer {
  position: relative;

  margin-bottom: 80px;
  padding: 0 24px;

  &:before {
    position: absolute;
    top: 10%;
    right: 0;
    z-index: -1;

    width: 100%;

    transform: translateX(30%);

    content: url('~/assets/img/clouds.svg');
  }
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
  font-weight: 600;
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
