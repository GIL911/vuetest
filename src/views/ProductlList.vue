<template>
<v-container>
    <v-row>
        <v-col
        v-for=" i in 20"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        >
            <productitem></productitem>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import productitem from "../components/product/productitem";
export default {
    name: "ProductList",
   components: {
    productitem
  },
}
</script>

<style>

</style>