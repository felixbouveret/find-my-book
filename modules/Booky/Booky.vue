<template>
  <section :class="$style.stepperContainer">
    <Wrapper :class="$style.inner">
      <h1>Booky</h1>
      <div :class="$style.steps">
        <transition name="fade-in">
          <components :is="currentStep.component" />
        </transition>
        <div :class="$style.buttonContainer">
          <Button @click="incrementSteps">click</Button>
        </div>
      </div>
    </Wrapper>
  </section>
</template>

<script>
import stepList from './stepList';
import stepsDefinition from './stepsDefinition';
import Button from '~/components/Button';

export default {
  components: {
    Button,
  },

  data() {
    return {
      stepIndex: 0,
      stepsDefinition,
    };
  },

  computed: {
    currentStepName() {
      return stepList[this.stepIndex];
    },

    currentStep() {
      return this.stepsDefinition[this.currentStepName];
    },
  },

  methods: {
    incrementSteps() {
      this.stepIndex++;
      if (stepList.length === this.stepIndex) this.stepIndex = 0;
    },
  },
};
</script>

<style lang="scss" module>
.stepperContainer {
  margin-top: 80px;
}

.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 8px;

  background-color: lightgray;
}

.buttonContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}
</style>

<style>
.fade-in-enter-active {
  transition: all 0.5s ease;
}
.fade-in-leave-active {
  transition: all 0.5s 0.5 ease;
}
.fade-in-enter, .fade-in-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
