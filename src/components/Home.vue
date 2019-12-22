<template>
  <div >
    <header>
      <h2>
        <a href="#">Know Your Food</a>
      </h2>
      <nav>
        <li>
          <a href="#">Review</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </nav>
    </header>

    <section class="hero">
      <!-- <div class="background-image" style="background-image: url(assets/img/cafe_good.jpg);"></div> -->
      <img
                class="background-image"
                src="assets/img/cafe_good.jpg"   
              />
      <div class="hero-content-area">
        <h3>Order with Cafe Goodluck on:</h3>
        <div class="widget_wrap" style="width:auto;height:auto;">
          <nav>
            <a
              href="https://www.zomato.com/pune/cafe-goodluck-deccan-gymkhana?utm_medium=icon_widget&utm_campaign=widget-business&utm_source=referral-widget-10011"
              target="_blank"
            >
              <img
                width="60"
                height="60"
                src="https://b.zmtcdn.com/images/widgets/zlogo_w_40.png"
                alt="Zomato"
              />
            </a>
			<a  href="https://www.swiggy.com/restaurants/cafe-goodluck-shivajinagar-shivaji-nagar-pune-5370">
            <img src="assets/img/swig.png" alt="Swiggy" height="60" width="60" />
			</a>
          </nav>
        </div>

      </div>
    </section>
    <rating/>
   
    
    <div class="features">
      <div class="contain">
        <img src="assets/img/5-stars.png"  height="100" width="100" /><br>
        Place
        <star-rating :rating="3.6" class="star" :star-size="20" :read-only="true" :increment="0.1"></star-rating>
      </div>
      <div class="contain">
        <img src="assets/img/table.png"  height="100" width="100" /><br>
        Food
        <star-rating :rating="3.5" :star-size="20" class="star" :read-only="true" :increment="0.1"></star-rating>
      </div>
      <div class="contain">
        <img src="assets/img/receptionist.png" c height="100" width="100" /><br>
        Service
        <star-rating :rating="3.8" :star-size="20" class="star" :read-only="true" :increment="0.1"></star-rating>
      </div>
      <div class="contain">
        <img src="assets/img/waiter.png"  height="100" width="100" /><br>
        Staff
        <star-rating :rating="4.1" :star-size="20" class="star" :read-only="true" :increment="0.1"></star-rating> 
      </div>
      <div class="contain">
        <img src="assets/img/breakfast.png"  height="100" width="100" /><br>
        Breakfast
        <star-rating :rating="3.4" :star-size="20" class="star" :read-only="true" :increment="0.1"></star-rating>
      </div>
    </div>
     <review/>
    
    <div >
      <h3>About</h3>
        <div class="about">
          <div class="about_one">
            <p>Good Luck Cafe is a popular Irani cafe-restaurant on the Fergusson College Road, in the Deccan Gymkhana area of Pune, India.Established in 1935 by Hussain Ali Yakshi, it is one of the oldest Irani places in Pune.Good luck cafe is most famous for it bun maska/bun omelette and Iranian tea among the other dishes. The place is always crowded and especially popular among the youngsters</p>
          
          <div class="about_one_one">
              <h3>Opening Hours</h3>
              <p><strong>Sunday-Saturday</strong> 7AM - 10:30PM</p>
          </div> 
            </div>
            <div class="about_two">
             <h3>Category</h3>
             <img src="assets/img/check-mark.png"  height="15" width="15" /><span>  Restaurant</span><br>
              <img src="assets/img/check-mark.png"  height="15" width="15" /><span>  Cafe</span><br>
              <img src="assets/img/check-mark.png"  height="15" width="15" /><span>  Breakfast</span><br>
            </div>
            <div class="about_three">
              <h3>Contact Info</h3>
              <ul >
                <li >
                  <span >Address:</span>
                  <span>Fergusson College Rd, near Goodluck Chowk, Deccan Gymkhana, Pune, Maharashtra 411004</span></li>
                <li ><span >Phone:</span><span>020 2567 6893</span></li>
              <a href="https://www.google.com/maps/place/Cafe+Goodluck/@18.517317,73.8414676,15z/data=!4m5!3m4!1s0x0:0x782ac3a113379b17!8m2!3d18.517317!4d73.8414676"><img src="assets/img/placeholder.png"  height="25" width="25"  /></a>
              </ul>
            </div>
          
         
                </div>
      
      </div>
     <footer>
    
    <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
    <ul>
      <li><a href="#"><i class="fa fa-twitter-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fa fa-facebook-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fa fa-snapchat-square fa-2x"></i></a></li>
    </ul>
  </footer>
   
  </div>
</template>

<script>

import StarRating from 'vue-star-rating';
import rating from './Rating';
import Review from './Review';

export default {
  name: 'Home',
  props: {

  },
  methods:{
    login(){

    this.$router.push('/login');
    
           },
  },
  components: {
  StarRating,rating,Review
},

mounted(){
  
     

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font: normal 16px sans-serif;
  color: #555;
}

ul,
nav {
  list-style: none;
}

a {
  text-decoration: none;
  opacity: 0.75;
  color: #111111;
}

a:hover {
	opacity: 1;
}

.features {
  display: flex;
  justify-content: space-between;
  padding:40px;
}
@media (max-width: 800px) {
  .features {
    flex-direction: column;
    text-align: center;
  }
  .star{
    padding-left: 27%;
  }
 
}
.contain{
  
  text-align:center;
  border:2px solid  #EFEFEF;
}

header {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 100px 0;
  animation: 1s fadein 0.5s forwards;
  opacity: 0;
  color: #111111;
}


@keyframes fadein {
  100% {
    opacity: 1;
  }
}

header h2 {
  font-family: "Quicksand", sans-serif;
}

header nav {
  display: flex;
  margin-right: -15px;
}

header nav li {
  margin: 0 15px;
}

@media (max-width: 800px) {
  header {
    padding: 20px 50px;
    flex-direction: column;
  }

  header h2 {
    margin-bottom: 15px;
  }
}

.hero {
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: #111111;
}

.hero .background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-color: #80a3db;
}

.hero h1 {
  font: bold 60px "Open Sans", sans-serif;
  margin-bottom: 15px;
}

.hero h3 {
  font: normal 28px "Open Sans", sans-serif;
  margin-bottom: 40px;
}

.hero a.btn {
  padding: 20px 46px;
}

.hero-content-area {
  opacity: 0;
  margin-top: 120px;
  
  animation: 1s slidefade 1s forwards;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 80px;
}

@keyframes slidefade {
  100% {
    opacity: 1;
    margin: 0;
  }
}

@media (max-width: 800px) {
  .hero {
    min-height: 600px;
    min-width: 100vw;
  }

  .hero h1 {
    font-size: 48px;
  }

  .hero h3 {
    font-size: 24px;
  }

   
}

.about{
  display: flex;
  justify-content: space-between;
}
.about_one{
  flex-basis:700px;
}
.about_two{
  flex-basis: 200px;
}
.about_three{
  flex-basis: 300px;
}
.about_one_one{
  padding: 10px 0 0 0 ;
}
@media (max-width: 800px) {
  .about{
    flex-direction: column;
    
  }
  .about_one{
    flex-basis: 100px;
    padding:10px;
  }
  .about_two{
    flex-basis: 80px;
    padding: 10px;
  }
  .about_three{
    flex-basis: 80px;
    padding: 10px;
  }
}

footer {
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #607d8b;
	color: #fff;
	padding: 20px 0;
}

footer ul {
	display: flex;
}

footer ul li {
	margin-left: 16px;
}

footer p {
	text-transform: uppercase;
	font-size: 14px;
	opacity: 0.6;
	align-self: center;
}

@media (max-width: 1100px) {
	footer {
		flex-direction: column;
	}

	footer p {
		text-align: center;
		margin-bottom: 20px;
	}

	footer ul li {
		margin: 0 8px;
	}
} 
 
</style>
