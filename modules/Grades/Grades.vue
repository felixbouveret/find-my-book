<template>
  <section :class="$style.gradesRoot">
    <div :class="$style.container">
      <div :class="$style.gradesResults">
        <ul :class="$style.gradesList">
          <li
            v-for="item in moduleData"
            :key="item.id"
            :class="$style.gradesItem"
          >
            <Card :card-data="item" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { Card } from './components';
export default {
  name: 'GradesModule',
  components: { Card },

  props: {
    moduleData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" module>
.gradesRoot {
  width: 100;
  margin: 4rem 0;
  .container {
    .gradesHeader {
      padding: 24px;

      h1 {
        text-align: center;
      }
    }
    .gradesResults {
      .gradesList {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        list-style: none;

        li {
          margin: 16px;
        }
      }
    }
  }
}
</style>
