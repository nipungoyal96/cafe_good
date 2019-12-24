<template>
  <div>
    <div class="container">
      User Reviews
      <div class="inner">
        <div class="rating">
          <span class="rating-num">{{avg}}</span>
          <div class="rating-users">{{ratings.total}} total</div>
        </div>

        <div class="histo">
          <div class="five histo-rate">
            <span class="histo-star">
              <i class="active icon-star"></i> 5
            </span>
            <span class="bar-block">
              <span id="bar-five"  v-bind:style="{ width: bar5 + '%' }" class="bar">
                <span>{{ratings.votes[4].votes}}</span>&nbsp;
              </span>
            </span>
          </div>

          <div class="four histo-rate">
            <span class="histo-star">
              <i class="active icon-star"></i> 4
            </span>
            <span class="bar-block">
              <span id="bar-four"  v-bind:style="{ width: bar4 + '%'}" class="bar">
                <span>{{ratings.votes[3].votes}}</span>&nbsp;
              </span>
            </span>
          </div>

          <div class="three histo-rate">
            <span class="histo-star">
              <i class="active icon-star"></i> 3
            </span>
            <span class="bar-block">
              <span id="bar-three" v-bind:style="{ width: bar3 + '%' }" class="bar">
                <span>{{ratings.votes[2].votes}}</span>&nbsp;
              </span>
            </span>
          </div>

          <div class="two histo-rate">
            <span class="histo-star">
              <i class="active icon-star"></i> 2
            </span>
            <span class="bar-block">
              <span id="bar-two" v-bind:style="{ width: bar2 + '%'}" class="bar">
                <span>{{ratings.votes[1].votes}}</span>&nbsp;
              </span>
            </span>
          </div>

          <div class="one histo-rate">
            <span class="histo-star">
              <i class="active icon-star"></i> 1
            </span>
            <span class="bar-block">
              <span id="bar-one"  v-bind:style="{ width: bar1+ '%' }" class="bar">
                <span>{{ratings.votes[0].votes}}</span>&nbsp;
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Rating",
  data(){
    return{
      ratings:{
        "votes": [{
			"rating": 4,
			"votes": 159
		}, {
			"rating": 5,
			"votes": 201
		}, {
			"rating": 2,
			"votes": 49
		}, {
			"rating": 3,
			"votes": 69
		}, {
			"rating": 1,
			"votes": 125
		}],
		"total": 603
      },
    bar1:0,
    bar2:0,
    bar3:0,
    bar4:0,
    bar5:0,
    avg:0
    }
  },
  created(){
    this.ratings.votes.sort((a,b)=>{
      return a.rating-b.rating
    });
    this.bar1=this.ratings.votes[0].votes/this.ratings.total*350;
    this.bar2=this.ratings.votes[1].votes/this.ratings.total*350;
    this.bar3=this.ratings.votes[2].votes/this.ratings.total*350;
    this.bar4=this.ratings.votes[3].votes/this.ratings.total*350;
    this.bar5=this.ratings.votes[4].votes/this.ratings.total*350;
    this.avg=(this.ratings.votes[0].votes*1+this.ratings.votes[1].votes*2+this.ratings.votes[2].votes*3+this.ratings.votes[3].votes*4+this.ratings.votes[4].votes*5)/this.ratings.total;
    this.avg=this.avg.toFixed(2);
},
 
}
</script>

<style scoped>
.container {
  width: 350px;
  margin: 0 auto;
  margin-top: 3em;
  background-color: #efefef;
  padding: 4px;
  text-align: center;
}

.inner {
  padding: 1em;
  background-color: white;
  overflow: hidden;
  position: relative;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.rating {
  float: left;
  width: 45%;
  margin-right: 5%;
  text-align: center;
}

.rating-num {
  color: #333333;
  font-size: 72px;
  font-weight: 100;
  line-height: 1em;
}

.histo {
  float: left;
  width: 50%;
  font-size: 13px;
}

.histo-star {
  float: left;
  padding: 3px;
}

.histo-rate {
  width: 100%;
  display: block;
  clear: both;
}

.bar-block {
  margin-left: 5px;
  color: black;
  display: block;
  float: left;
  width: 75%;
  position: relative;
}

.bar {
  padding: 4px;
  display: block;
}

#bar-five {

  background-color: #9fc05a;
}

#bar-four {
  
  background-color: #add633;
}

#bar-three {
  
  background-color: #ffd834;
}

#bar-two {
  background-color: #ffb234;
}

#bar-one {
  background-color: #ff8b5a;
}
</style>