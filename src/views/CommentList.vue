<template>
  <div>
    <div :key="item.comment_id" v-for="item in comments">
      <CommentListItem :commentObj="item"/>
    </div>
    <CommentCreate :contentId="3" :reloadComments="reloadComments"/>
  </div>
</template>
<script>
import commentdata from '../assets/comment';
import CommentListItem from './CommentListItem.vue';
import CommentCreate from './CommentCreate.vue';
export default {
  name: "CommentList",
  props: {
    contentId: Number
  },
  components: {
    CommentListItem,
    CommentCreate,
  },
   data() {
    return {
        //this.contentId
      comments: commentdata.Comment.filter(item => item.content_id === 3),
    }
  },
  methods: {
    reloadComments() {
     this.comments = commentdata.Comment.filter(item => item.content_id === 3)
    }
  }
};
</script>