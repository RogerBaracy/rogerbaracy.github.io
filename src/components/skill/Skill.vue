<template>
  <VueWordCloud
    style="
      height: 400px;
      width: 90%;
    "
    v-bind:words="skills"
    v-bind:color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
    font-family="Roboto"
    v-bind:spacing="1"
    v-bind:rotation="8"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// @ts-ignore
import VueWordCloud from 'vuewordcloud'

@Component({
  components:{
    VueWordCloud
  }
})
export default class Skill extends Vue {
  @Prop(Array) readonly skills!: Array<string> 
}
</script>
