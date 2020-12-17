<template>
  <q-page class="row">   
   <div class="col-sm-6 col-12">
     <div class="row">
       <h1>
         About me
       </h1>
     </div>
      <div class="row">
       <h1>
         Skills
       </h1>
     </div>
   </div>
   <div class="col-sm-6 col-12">
     <h1>
       my image
     </h1>
   </div>
  </q-page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MainPage extends Vue {
}
</script>
