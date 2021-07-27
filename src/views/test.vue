<template>
  
    <v-container>
        <v-card class="mt-5">
           <v-card-text>
                <TextField 
                v-model="sendData"
                :counter="10"
                label="이름"/>
            

                {{sendData}}
                <label>
                전화 번호 
                </label>
                
                <v-text-field 
                class="mt-1"
                outlined
                dense
                />
           </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import TextField from '../components/app/TextField.vue' 
export default {
        data() {
      return {

        items: [ ],
        sendData: "",
      }
    },
    components:{
        TextField
    }
}
</script>

<style>

</style>