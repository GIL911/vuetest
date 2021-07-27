<template>
  <div>

        <b-form inline>
            <br/>
                <b-input-group prepend="제목" style="width:50%;float:left;margin-rigth: 1em; "  class="mb-2 mr-sm-2 mb-sm-0 mr-sm-2 ">
                    <b-form-input
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="제목"
                        v-model="sendData.title"
                    ></b-form-input>
                </b-input-group>

                <b-input-group prepend="내용" style="width:50%;margin-left: 1em; " class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input 
                        id="inline-form-input-username" 
                        placeholder="내용"
                        v-model="sendData.text"
                    ></b-form-input>
                </b-input-group>

        </b-form>
                    <b-button-group >
                        <b-button variant="primary" @click="sendForm">저장</b-button> 
                        <b-button variant="danger" >삭제</b-button>
                    </b-button-group>                
         <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-table striped hover :items="items" :fields="visibleFields" >

        <template #cell(delete)="row">
            <b-button variant="primary" size="sm" @click="detailUser(row.item.id)">
            Details
            </b-button>
             
            <b-button variant="danger" size="sm" @click="deleteUser(row.item.id)">
            Delete
            </b-button>
        </template>
      </b-table>


      
  </div>
</template>



<script>
import axios from "axios";
let url = "http://localhost:8000/users/";  // 장고 drf 서버 주소
  export default {
    mounted() { // DOM 객체가 생성된 후 DRF server 에서 데이터를(userList) 가져와 저장
    axios({
      method: "GET",
      url: url 
    }).then(response => {
        this.items = response.data;
      })
      .catch(response => {
        console.log("Failed", response);
      });
  },

     computed: {
      visibleFields() {
        return this.fields.filter(field => field.visible)
      }
    },

    data() {
      return {
        fields: [
            {
              key:  'id',
              label: 'id',
              visible: false 
            },
            {
              key:  'title',
              label: '제목',
              visible: true 
            }
            ,
            {
              key:  'text',
              visible: true 
            }
            ,
            {
              key:  'delete',
              visible: true 
            }

            ],  
        items: [ ],
        sendData: {
            title: "",
            text: "",
        },
      }
    },
    methods: {
        getUserList() {
        axios({
            method: "GET",
            url: url
        }).then(response => {
            this.items = response.data;
            })
            .catch(error => {
            console.log("Failed to get userList", error.response);
            });
        },
        sendForm: function() {
            axios({
                method: "POST",
                url: url,
                data: this.sendData,
            }).then((response) => {
                    this.items = response.data;
                   // console.log(response)
                   this.getUserList()
                   this.sendData.title=""
                   this.sendData.text=""
                   
                })
                .catch((error) => {
                    console.log("Failed to get userList", error.response);
                });
        },
        deleteUser: function(id) {

           // console.log(id)
            axios({
                method: "DELETE",
                url: url + id, // localhost:8000/user/1 로 delete method
            }).then((response) => {
                    this.getUserList()
                    console.log("Success", response);
                })
                .catch((error) => {
                    console.log("Failed to get userList", error.response);
                });
        },
        detailUser: function(id) {

           console.log(id)
            this.$router.push({
                path: `/board/detail/`+id
            })
        },

    },


  }
</script>