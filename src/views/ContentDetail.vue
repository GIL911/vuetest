<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{items.id}}
          </div>
          <div class="content-detail-content-info-left-subject">
            {{title}}
          </div>
        </div>

        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{items.text}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{items.title}}
          </div>
        </div>
      </div>

      <div class="content-detail-content">
        {{items}}
      </div>

      <div class="content-detail-button">
        <b-button variant="primary" >수정</b-button>
        <b-button variant="success" @click="deleteUser(items.id)" >삭제</b-button>
      </div>

      <div class="content-detail-comment">
        덧글
            <CommentList :contentId="contentId"/>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
let url = "http://localhost:8000/users/";  // 장고 drf 서버 주소
import CommentList from "./CommentList";

export default {
    name: "ContentDetail",
    components: {
        CommentList,
    },
  mounted() { // DOM 객체가 생성된 후 DRF server 에서 데이터를(userList) 가져와 저장
    axios({
      method: "GET",
      url: url+this.contentId 
    }).then(response => {
        this.items = response.data;
      })
      .catch(response => {
        console.log("Failed", response);
      });
  },

  data() {
    const contentId = Number(this.$route.params.contentId);
    return {
      items: [ ],
      contentId: contentId,
      title: "",
      context: "",
      user:"",
      created: ""
    };
  },
  methods: {
        deleteUser: function(id) {

           // console.log(id)
            axios({
                method: "DELETE",
                url: url + id, // localhost:8000/user/1 로 delete method
            }).then((response) => {
                    console.log("Success", response);
                    this.$router.push({path: '/board'})
                })
                .catch((error) => {
                    console.log("Failed to get userList", error.response);
                });
        },
  }
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 720px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
</style>