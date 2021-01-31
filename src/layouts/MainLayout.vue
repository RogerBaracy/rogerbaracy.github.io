<template>
  <q-layout view="lHh Lpr lFf" class="q-pl-xl q-pr-xl">
    <q-header elevated>
      <q-toolbar class="q-pl-xl q-pr-xl">
        <q-toolbar-title v-text="title"/>
        <!-- <q-tabs v-model="tab" shrink stretch>
          <q-tab class="q-pr-md" label="Home" name="home" icon="home" />
          <q-tab class="q-pr-md" label="Projetos" name="settings" icon="settings" />
          <q-tab class="q-pr-md" label="Contato" name="email" icon="email" />
        </q-tabs>   -->
        <div class="q-mr-md">
           <q-toggle
              label="Modo Escuro"
              color="black"
              v-bind:false-value="false"
              v-bind:true-value="true"
              v-model="isDark"
            />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class MainLayout extends Vue {
  private title = 'Portfolio'
  private isDark = true
  private tab = 'home'
  
  @Watch('isDark')
  changeIsDark (newValue: boolean) {
    this.$q.dark.set(newValue)
  }
}
</script>
<style lang="scss">
@media only screen and (max-width: 470px) {
  .q-toolbar__title {
    display: none;
  }
}
</style>
