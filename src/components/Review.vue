<template>
   
<div >
  <div v-for="item in list" v-bind:key="item.rid" class="review">
    
  <div class="review-photo">
    <img v-bind:src="item.photo">
  </div>
  
  <div class="review-box">
    
    <div class="review-author">
      <p><strong>{{item.name}}</strong> - <star-rating :rating="item.rating" :star-size="20" class="star" :read-only="true" :increment="0.1"></star-rating>
      - {{item.city}}</p>
    </div>
    <div class="review-comment">
      <p>{{item.content}}</p>
    </div>
    
    <div class="review-date">
      <time>{{item.date}}</time>
    </div>
    
  
    
  </div>
     </div>

    <button @click="showlabel" class="write">Write your review</button>
<br>
 <div v-if="showlabels==true && this.step==0" >
 <br><br>
  <div>
    <label>Name:</label>
  <label>{{name}}</label>
  </div>
  <label> City:</label>
  <input name="city" type="text" v-model="city"><br>
  <label>Review:</label>
  <textarea name="content" v-model="content"></textarea>
  
  <button v-on:click="addReview()">Done</button><br><br><br><br>
  </div>
 <div v-else-if="showlabels==true && this.step==1"><br><br>
    <label>Place</label>
     <star-rating  :star-size="30"  :increment="0.1"></star-rating>
    <label>Food</label>
     <star-rating  :star-size="30"  :increment="0.1"></star-rating>
     <label>Service</label>
     <star-rating  :star-size="30"  :increment="0.1"></star-rating>
     <label>Staff</label>
     <star-rating  :star-size="30"  :increment="0.1"></star-rating>
     <label>Breafast</label>
     <star-rating  :star-size="30"  :increment="0.1"></star-rating>
    <label>Overall Experience</label>
     <star-rating  :star-size="30"  v-model="rating" :increment="0.1"></star-rating>
     <button v-on:click="addReview()">Send</button><br><br><br>
 </div>
  
  
  
</div>
</template>

<script>
import firebase from 'firebase/app';
import StarRating from 'vue-star-rating';
export default {
    name:'Review',
     data(){
         return{
             step:0,
             rating:0,
    showlabels:false,
    rid:2,
    loggedin:false,
      content: '',
    name: 'goyal',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
    city: '',
    list: [
      {
        name: 'Ramesh Telkar',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat magna ut dui egestas, in varius diam ultricies. Phasellus suscipit magna id arcu auctor, nec vulputate dolor elementum.',
        photo: 'https://randomuser.me/api/portraits/men/88.jpg',
        city: 'Baner,Pune',
        rid:0,
        rating:3.5,
        date:'20-12-2019'
      },
      {
        name: 'Madhavi Mane',
        content: 'Minhas cadeiras chegaram no prazo e super bem embaladas!!! Além das cadeiras serem lindas, os preços são ótimos! Indico, com certeza!',
        photo: 'https://randomuser.me/api/portraits/women/54.jpg',
        city: 'Katraj, Pune',
        rid:1,
        rating:4,
        date:'21-12-2019'
      }
    ]}
  },
  methods: {
    addReview(){
       var today = new Date();
      var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      if(this.step==0){
        this.step=1
      }
      else if(this.step==1){
        this.list.push({
        name:this.name, 
        city:this.city,
        photo:this.photo,
        content:this.content,
        rid:this.rid,
        rating:this.rating,
        date:date
      }),
        this.city='',
        this.content='',
        this.rid+=1,
        this.showlabels=false,
        this.step=0,
        this.rating=0
        
      }
    },
    showlabel(){
      if(this.loggedin==true){
          this.showlabels=true
    }
    else{
       this.$router.push('/login')
    }
  }
  },
   components: {
  StarRating
  
   },
   created(){
  var self=this;
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  
    self.loggedin=true;
    self.name=user.displayName;
  } else {
    self.loggedin=false;
  }});
},
   
}
</script>

<style scoped>
*{
  box-sizing:border-box;
}
header{
  width:100%;
  font-size:2em;
  text-align:center;
  background:#34495e;
  color:#fff;
  padding:0.5em;
}
body{
  max-width:1024px;
  margin:20px auto;
  font-size:16px;
  font-family: 'Poppins', sans-serif;
}
img{
  max-width:100%;
  display:block;
}
p{
  margin:0;
}
.fa.fa-star{
  color:#FEC902;
}
label{
  width:15%;
  margin:10px 1% 0 0;
  display:inline-block;

}
input[type="text"]{
  width:84%;
  margin:10px 0;
  height:40px;
  border:none;
  background:#F6F6F6;
  padding:1em;
}
textarea{
  width:84%;
  border:none;
  background:#F6F6F6;
  margin:10px 0;
  height:100px;
  padding:1em;
}
button{
  float:right;
  width:20%;
  height:40px;
  border:none;
  background:#2ecc71;
  font-size:16px;
  color:white;
}
.write{
    float:left;
    width: 40%;
margin-left: 30%;
margin-right: 30%
}
.review{
  width:100%;
  display:inline-block;
  margin:10px 0;
}
.review-photo{
  height:80px;
  width:80px;
  display:inline-block;
  margin-right:3em;
}
.review-box{

  display:inline-block;
  width:87.5%;
  background:#F6F6F6;
  padding:1.5em;
  position: relative;
}
.review-box:after, .review-box:before {
	right: 100%;
	top: 10%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}
.review-box:after {
	border-right-color: #F6F6F6;
	border-width: 25px;
}
.review-comment{
  color:#9A9999;
}
.review-date{
  color:#C7C7C7;
}
.review-author{
  color:#C7C7C7;
}
.review-author strong{
  color:black;
}
</style>