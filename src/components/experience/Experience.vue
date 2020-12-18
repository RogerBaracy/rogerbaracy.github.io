<template>  
  <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
    <q-card-section>
      <div class="text-h6" v-text="e.office"></div>
      <div class="text-subtitle2" v-text="e.company"></div>
      <div class="text-subtitle3"><q-icon name="date_range" class="q-pr-sm"/>{{e.dateInit}} <q-icon name="date_range" class="q-pr-sm q-pl-sm"/> {{e.dateEnd}}</div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pt-sm">
      <strong>Principais atividades: </strong>
      <p v-text="e.activities"></p> 
      <strong>Tecnologia utilizadas: </strong>  
      <p v-text="e.technologies"></p>               
      <strong> Outras Tecnologias: </strong>
      <p v-text="e.outherTechnologies"></p>
    </q-card-section>
  </q-card> 
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Idata } from './data'
@Component
export default class Experience extends Vue {
  @Prop(Object) readonly e!: Idata  
}
</script>
