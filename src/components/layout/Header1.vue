<template>
  <nav>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        bezKoder
      </div>

      <v-btn to="/tutorials" text>
        Tutorials
      </v-btn>

      <v-btn to="/add" text>
        Add
      </v-btn>

      <v-btn to="/typography" text>
        Typography
      </v-btn>
        <v-btn to="/product" text>
        product
      </v-btn>
      <v-btn to="/login" text>
        login
      </v-btn>
      <v-btn to="/test" text>
        test
      </v-btn>
    </v-app-bar>
  </nav>


  
</template>

<script>
export default {
    name:"Header1"
};
</script>