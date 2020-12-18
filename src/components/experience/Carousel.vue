<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="blue"
      control-type="push"
      navigation-icon="radio_button_unchecked"
      navigation-position="bottom"
      navigation
      padding   
      arrows
      class="bg-white text-blue shadow-1 rounded-borders"
    >
     
       <q-carousel-slide v-for="(e , index) in experiencies" v-bind:key="index" v-bind:name="index" class="column no-wrap flex-center">
        <Experience v-bind:e="e"/>
        </q-carousel-slide> 
        
      
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Experience from './Experience.vue'
import {data, Idata} from './data'
@Component({
  components:{
    Experience
  }
})
export default class Carousel extends Vue {
  private experiencies: Array<Idata> = data
  private slide: number = 0
  private get name() : number{    
    return this.slide
  }
  private set name(i: number){
    this.slide = i
  }
}
</script>
<style lang="scss" scoped>
.q-carousel {
    background-color: #fff;
    height: auto;
}
</style>
