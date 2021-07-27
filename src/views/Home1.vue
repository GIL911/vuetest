<template>
  <v-container>
        <v-card class="mx-auto" tile>
        <v-card-title class="justify-space-between">
                <p>
                    <v-icon>mdi-account</v-icon>
                    User List 
                </p>

                <v-text-field 
                v-model="ititle"
                hide-details 
                label="Filled" 
                placeholder="Search" 
                filled 
                rounded 
                dense 
                single-line 
                append-icon="mdi-magnify"
                @click:append="searchTitle"
                class="shrink mx-4"></v-text-field>

        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="items"
          disable-pagination
          :hide-default-footer="true"
        >
          <!-- <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteTutorial(item.id)">mdi-delete</v-icon>
          </template> -->

            <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
                <v-icon small @click="deleteUser(item.id)">mdi-delete</v-icon>
            </template>
        </v-data-table>

        <v-card-actions v-if="tutorials.length > 0">
          <v-btn small color="error" @click="removeAllTutorials">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>







  </v-container>


</template>

<script>
import axios from "axios";
let url = "http://localhost:8000/users/";  // 장고 drf 서버 주소

export default {
  name: "tutorials-list",
  data() {
    return {
      items: [ ],
      tutorials: [],
      ititle: "",
      headers: [
        { text: "Title", align: "start", sortable: false, value: "id" },
        { text: "Description", value: "title", sortable: false },
        { text: "Status", value: "text", sortable: true },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
   mounted() { // DOM 객체가 생성된 후 DRF server 에서 데이터를(userList) 가져와 저장
        this.getList();
    },
    methods: {
        getList()
        {
            axios({
            method: "GET",
            url: url 
            }).then(response => {
                this.items = response.data;
                console.log(this.items )
            })
            .catch(response => {
                console.log("Failed", response);
            });
        },
        searchTitle() {
            if(this.ititle=="")
                return;
            this.items= this.items.filter(item => item.id=== parseInt(this.ititle)
            )

        },
        deleteUser: function(id) {
         console.log(id)
            axios({
                method: "DELETE",
                url: url + id, // localhost:8000/user/1 로 delete method
            }).then((response) => {
                    this.getList()
                    console.log("Success", response);
                })
                .catch((error) => {
                    console.log("Failed to get userList", error.response);
                });
        },
    },

};
</script>

<style>
.list {
  max-width: 750px;
}
</style>