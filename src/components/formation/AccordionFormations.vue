<template>  
    <q-list>
        <q-expansion-item
          v-for="(f , index) in formations" 
          v-bind:key="index"
          group="somegroup"           
          header-class="text-primary"
          expand-icon-class="text-primary"
        > 
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="school" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section >
            <p class="text-primary">
              {{f.course}}
              <br>
              <span class="text-grey-8" v-text="f.institution" ></span>
            </p>
          </q-item-section>
          <q-item-section side>
            <div class="row items-center">
              <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="f.dateInit"></span>
              <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="f.dateEnd"></span>
            </div>
          </q-item-section>
        </template>       
        </q-expansion-item>
    </q-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { data, Idata } from './data'
@Component
export default class AccordionFormations extends Vue {
  private formations: Array<Idata> = data  
}
</script>
