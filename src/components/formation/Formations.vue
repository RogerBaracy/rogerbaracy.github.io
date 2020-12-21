<template> 
  <div>
    <q-card v-for="(f, index) in formations" v-bind:key="index" class="q-mt-sm">    
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="school" color="primary" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6" v-text="f.course"/>
          <q-item-label class="text-subtitle2" caption v-text="f.institution"/>
        </q-item-section>
        <q-item-section side>
           <div class="row items-center">
            <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="f.dateInit"></span>
            <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="f.dateEnd"></span>
           </div>
        </q-item-section>  
      </q-item>          
    </q-card>
  </div>            
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { data, Idata } from './data'
@Component
export default class Formations extends Vue {
  private formations: Array<Idata> = data  
}
</script>
<style lang="scss" scoped>
.q-card { 
  box-shadow: none;
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
  position: relative;
  width: 100%;
}
</style>
