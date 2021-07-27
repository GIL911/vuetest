<template>
    <v-app>
      <header1></header1>
       <v-main>
        <router-view></router-view>
       </v-main>
  </v-app>
</template>

<script>
import Header1 from './components/layout/Header1.vue';
import '@/styles/overrides.sass'

export default {

  name: 'App',

  components: {
    Header1,
  },

  data: () => ({
    //
  }),
};
</script>
