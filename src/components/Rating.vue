<template>
<div>
  
<div class="container">
User Reviews
  <div class="inner">
    <div class="rating">
      <span class="rating-num">3.42</span>
      <div class="rating-users">
                 603 total
      </div>
    </div>
    
    <div class="histo">
      <div class="five histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 5           </span>
        <span class="bar-block">
          <span id="bar-five" class="bar">
            <span>201</span>&nbsp;
          </span> 
        </span>
      </div>
      
      <div class="four histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 4           </span>
        <span class="bar-block">
          <span id="bar-four" class="bar">
            <span>159</span>&nbsp;
          </span> 
        </span>
      </div> 
      
      <div class="three histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 3           </span>
        <span class="bar-block">
          <span id="bar-three" class="bar">
            <span>69</span>&nbsp;
          </span> 
        </span>
      </div>
      
      <div class="two histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 2           </span>
        <span class="bar-block">
          <span id="bar-two" class="bar">
            <span>49</span>&nbsp;
          </span> 
        </span>
      </div>
      
      <div class="one histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 1           </span>
        <span class="bar-block">
          <span id="bar-one" class="bar">
            <span>125</span>&nbsp;
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
    name:'Rating'
}
</script>

<style scoped>
.container {
  width: 350px;
  margin: 0 auto;
  margin-top: 3em;
  background-color: #EFEFEF;
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
  width: 116.66%;
  background-color: #9FC05A;
}

#bar-four {
  width: 92.28%;
  background-color: #ADD633;
}

#bar-three {
  width: 40.04%;
  background-color: #FFD834;
}

#bar-two {
  width: 28.44%;
  background-color: #FFB234;
}

#bar-one {
  width: 72.55%;
  background-color: #FF8B5A;
}

</style>