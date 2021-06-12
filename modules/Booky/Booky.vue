<template>
  <section :class="$style.stepperContainer">
    <Wrapper :class="$style.inner">
      <h1 :class="$style.title">Booky</h1>
      <div :class="$style.steps">
        <div :class="$style.step">
          <transition name="fade-in">
            <components
              :is="currentStep.component"
              @previous-step="decrementSteps()"
              @next-step="submitStep($event)"
            />
          </transition>
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

    decrementSteps() {
      if (this.stepIndex > 0) this.stepIndex--;
    },

    submitStep(payload) {
      const action = this.currentStep.action;
      this.$store.dispatch(action, payload);
      this.incrementSteps();
    },

    previousStep(payload) {
      const action = this.currentStep.action;
      this.$store.dispatch(action, payload);
      this.incrementSteps();
    },
  },
};
</script>

<style lang="scss" module>
.stepperContainer {
  margin: 80px 0 120px;
}

.title {
  text-align: center;
}

.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
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
