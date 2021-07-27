<template>
    <div>
        <div class="black-bg" v-if="isModal">
            <div class="white-bg">
                <h4>상세페이지 임</h4>
                <p> 상세 페이지 내용임</p>
                <button type="button" @click="closeModal">닫기</button>
            </div>

        </div>


        <div  class="menu" >
            <a :key="i" v-for="(menu,i) in menus">{{menu}}</a>
        </div>
        <h1>Home Page {{title}}</h1>

        <div>
            <h4>XX 원룸</h4>
            <p>{{price1}} 만원</p>
        </div>
        <h1>
            v-for 반복문
        </h1>
        <div :key="i" v-for="(product,i) in products">
            <img src="../assets/room0.jpg" class="room-img">
            <h4 :style="style1" @click="openModal">{{product}} </h4>
            <p>값 아무거나 </p>
            <button type="button" @click="onclickbutton1(i)">허위 매물 신고 버튼</button>
            <span> 허위매물 신고수 : {{sinarr[i]}}</span>
        </div>
        <button type="button" v-on:click="onclickHalf" >반값</button>

        <input type="text" v-model="data1">
        <button type="button" @click="getdata" >팝업 창</button>
        <button type="button" @click="setdata" >초기화</button>
        

        <div :key="i" v-for="(oneroom,i) in onerooms">
            <img :src="oneroom.image" class="room-img">
            <h4 :style="style1" >{{oneroom.title}} </h4>
            <p> {{oneroom.price}}</p>
        </div>

        <br/>
        <h1>
            v-if v-else
        </h1>
        <h1 v-if="liekd">좋아요 눌렀음</h1>
        <button v-else type="button" v-on:click="onclickButton" >Liked</button>


        {{data1}}
        <select class="form-control" v-model="region">
            <option :key="i" :value="option.v" v-for="(option,i) in options">
                {{option.t}}
            </option>
        </select>
        {{region}}
        <ul>
            <li :key="x" v-for="(u,x) in userLists">
                {{u.title}}
                {{u.text}}
            </li>
        </ul>
    </div>
</template>
<script>


import oneroomdata from '../assets/oneroom';


export default {
    //데이터 보관함
    data(){
    
        return {
            isModal:false,
            price1:60,
            price2:70,
            style1:'color : blue',
            menus:['Home','Product','About'],
            
            products:['역삼 원룸','강남 원룸','논현 원룸'],
            title:"개발자의 품격",
            data1:"",
            options:[
                { v :"s" ,t:"seoul"},
                { v :"j" ,t:"jeju"},
                { v :"B" ,t:"busan"},               
            ],
            region:"j",
            liekd:false,
            sinarr:[0,0,0],
            sinnum:0,

            onerooms:oneroomdata,
            userLists: [],
        };
    },

    //값이 변한는걸 감지 헤주는 내부 hook
    watch:{
        data1(){
            console.log("watch",this.data1)
        }
    },
    methods:{
        onclickHalf(){
            this.price1=this.price1/2
            this.price2=this.price2/2
            
        },
        getdata(){
            alert(this.data1)
        },
        setdata(){
            this.data1=""
        },
        onclickButton(){
            this.liekd=true
        },
        onclickbutton1(index){
            this.sinarr[index] +=1
            console.log(this.sinarr[index] )
        },
        openModal(){
            this.isModal=true
        },
        closeModal(){
            this.isModal=false
        }

    },
};
</script>
<style >
    .menu{
        background: darkslateblue;
        padding: 15px;
        border-radius: 5px;
    }
    .menu a{
        color :white;
        padding :10px;
    }
    .room-img
    {
        width:  100%;
        margin-top: 40px;
    }

    div{
        box-sizing: border-box;
    }
    .black-bg{
        width: 100%;
        background: rgba(0,0,0, 0.5);
        position: fixed;
        padding:20px;
    }
    .white-bg{
        width: 100%;
        background: white;
        border-radius: 8px;
        padding: 20px;
    }
    .white-bg button
    {
        text-align: right;  
    }
</style>