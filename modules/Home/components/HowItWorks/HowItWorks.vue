<template>
  <section :class="$style.heroContainer">
    <Wrapper :class="$style.inner">
      <h2 :class="$style.title">
        {{ title }}
      </h2>
      <ul :class="$style.steps">
        <li
          v-for="({ img, text }, stepIndex) in steps"
          :key="stepIndex"
          :class="$style.step"
        >
          <img :src="img" :alt="text" />
          <p>{{ text }}</p>
        </li>
      </ul>
      <Button :class="$style.cta">{{ cta }}</Button>
    </Wrapper>
  </section>
</template>

<script>
import message from './message.json';
import { getSteps } from './STEPS';
import Button from '~/components/Button';

export default {
  name: 'HowItWorks',
  components: {
    Button,
  },

  data() {
    const steps = getSteps();
    return {
      ...message,
      steps,
    };
  },
};
</script>

<style lang="scss" module>
.heroContainer {
  margin: 80px 0;
  padding: 64px 24px;

  background-color: $red;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: $light-grey;
  font-weight: 600;
  font-size: 32px;
}

.steps {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 684px;
  margin-top: 32px;
}

.step {
  img {
    display: block;
    width: 64px;
    height: 64px;
  }
}

.cta {
  margin-top: 48px;
}
</style>
