<template>
        <label>
                {{label}} 
                <v-text-field 
                class="mt-1"
                outlined
                dense
                v-bind="$attrs"
                v-on="$listeners"
                />
        </label>


</template>

<script>
export default {
    name:"AppTextField",
    inheritAttrs:false,
    props:{
        label:{
            type:String,
            default:null
        }
    }
}
</script>

<style>

</style>