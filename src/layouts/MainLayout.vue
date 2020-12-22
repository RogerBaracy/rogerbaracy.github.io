<template>
  <q-layout view="lHh Lpr lFf" class="q-pl-xl q-pr-xl">
    <q-header elevated>
      <q-toolbar class="q-pl-xl q-pr-xl">
        <q-toolbar-title v-text="title" class="mobile-hide"/>
        <q-tabs v-model="tab" shrink stretch>
          <q-tab class="q-pr-md" label="Home" name="home" icon="home" />
          <q-tab class="q-pr-md" label="Projetos" name="settings" icon="settings" />
          <q-tab class="q-pr-md" label="Contato" name="email" icon="email" />
        </q-tabs>  
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class MainLayout extends Vue {
  private title = 'Portfolio'
  private tab = 'home'
}
</script>
<style lang="scss">
@media only screen and (max-width: 450px) {
  .q-toolbar__title {
    display: none;
  }
}
</style>
