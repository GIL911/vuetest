<template>
  <v-container class=" fill-height">
      <v-row justify="center">
          <v-col cols="auto">
              <v-card width="460">
                  <v-card-title class="justify-center">로그인</v-card-title>
                  <v-card-text class="center px-12 py-16">
                    <v-text-field 
                    label="id"
                    clearable
                    prepend-icon="mdi-email"
                    />
                    <v-text-field
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    />
                    <v-btn 
                    mt-5
                    block 
                    x-large 
                    rounded
                    color="primary">
                        로그인
                    </v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>