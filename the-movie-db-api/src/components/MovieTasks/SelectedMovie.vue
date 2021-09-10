<template>
<div class="container-fluid" style="padding:0px!important">
<div class="row" >
    
    <div class="col" >

         <div class="card mb-3" style="width:100%;border-style:none;" >
  <div class="row g-0">
    <img class="background-img-top" :src="'https://image.tmdb.org/t/p/original'+this.movieDetails.data.backdrop_path " alt="Card image cap">
    <div class="col-md-4" style="border-style:none;border-radius" >
      <img :src="
              'https://image.tmdb.org/t/p/original'+this.movieDetails.data.poster_path"  class="img-fluid rounded-start" alt="..." style="border-radius:none!important">
    </div>
    <div class="col-md-8"  style="">
      <div class="card-body" style="">
        <h5 class="card-title" style="text-align:left;margin-top:150px;color:#FDFEFF"> <h1> {{this.movieDetails.data.original_title}} ({{ this.movieDetails.data.release_date.split("-")[0] }}) </h1>
        <h5 style="font-size:16px;"> 
          <span class="certification" style="color:grey;"> R </span> 
          <span class="releasedate">  {{ releaseDate }} </span> 
          <span class="genres" v-for="movie in this.movieDetails.data.genres" :key="movie.id">
                &nbsp; •<a href="#"  class="genresLink"> {{movie.name}} </a>
            </span> 
          <span class="runtime">&nbsp;&nbsp; •{{ duration }} </span>
            </h5>  
            </h5>
        <p class="card-text"> 
          <ul>
            <li class="rating" >
              {{ this.movieDetails.data.vote_average }}  
            </li>

            <li class="score">
              <p style="float:left;margin-top:8px;margin-right: 20px;">&nbsp; User <br> &nbsp; Score </p>
            </li>
            <li class="add-list" style="margin-top:6px;">
                 <i class="fas fa-list" style="color:white;">  </i>  <a href="" class="tooltiptext"> Add to List </a>
            </li>
            <li class="favorite" style="margin-top:6px;">
                <i class="fas fa-heart" style="color:white;"> </i> <a href="" class="tooltiptext"> Mark as favorite </a>
            </li>
            <li class="add-to-watch-list" style="margin-top:6px;">
                <i class="fas fa-bookmark" style="color:white"></i>  <a href="" class="tooltiptext">  Add to your watch list </a> 
            </li>
            <li class="rate"  style="margin-top:6px;">
                <i class="fas fa-star"></i> <a href="" class="tooltiptext"> Rate It! </a>
            </li>
            <li class="trailer"> 
                 <i class="fas fa-play" style="color:white;"></i> <a href="" style=""> Play trailer </a>
            </li>
          </ul>
        </p>

        
       
      </div>

    </div>
  </div>
</div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <ul>
        <li class="cardList" style="float:left;list-style:none;"  v-for="caster in this.movieCast.data.cast" :key="caster.id">
             <div class="card" style="width: 10rem;height:18rem;">
  <img :src="'https://image.tmdb.org/t/p/original'+caster.profile_path" v-if="caster.profile_path !== null" class="card-img-top" alt="..."  style="height:13rem">
  <img src="../../assets/unknown.png" alt="" v-if="caster.profile_path === null" style="height:13rem"> 
  <div class="card-body">
    <h5 class="card-title" style="color:black;font-size:14px"> {{ caster.original_name }}</h5>
    <p class="card-text" style="font-size:12px;color:black;"> {{ caster.character }} </p>
  </div>
</div>
        </li>
      </ul>
   
    </div>
    
  </div>

  
</div>
</template>

<script>

export default {
  components: {  },
  name: "SelectedMovie",
  data() {
    return {
      movieDetails: [],
      movieCast: [],
    };
  },
  methods: {
    getData() {
      var movieID = this.$route.params.id;

      this.$axios
        .movieDetail(
          "/movie/" +
            movieID +
            "?api_key=cd703389e9411def3fc33f6ab53dc8df&language=en-US"
        )
        .then((res) => {
          this.movieDetails = res;
          console.log(this.movieDetails);
        });
    },
    getCast() {
      var movieID = this.$route.params.id;
      this.$axios
        .movieCast(
          "/movie/" +
            movieID +
            "/credits?api_key=cd703389e9411def3fc33f6ab53dc8df"
        )
        .then((res) => {
          this.movieCast = res;
          console.log(this.movieCast);
          console.log(this.movieDetails.data.backdrop_path);
        });
        
    },
  },
  computed: {
    duration() {
      var hour = Math.floor(this.movieDetails.data.runtime / 60);
      var min = this.movieDetails.data.runtime - hour * 60;

      return " " + hour + "h " + min + " min";
    },
    releaseDate() {
      var year = this.movieDetails.data.release_date.split("-")[0];
      var month = this.movieDetails.data.release_date.split("-")[1];
      var day = this.movieDetails.data.release_date.split("-")[2];
      var date = new Date(year, month, day);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
      let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
      let da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
      return da + " " + mo + " " + " " + ye;
    },
    currency() {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(this.movieDetails.data.budget)
    },
    backgroundImage(){
      return { 'background-image': 'url(https://image.tmdb.org/t/p/original'+this.movieDetails.data.backdrop_path +')'}
    }
    
  },
  created() {
    this.getData();
    this.getCast();
    
  },
  filters : {
    capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
  }
};
</script>
<style>
.card-body{
  
  color: white;

  
  
}
.card-title{
  font-size: 35.2px;

}
.certification{
  border-style: solid;
  border-width: thin;
  border-color: gray;
  padding-left: 5px;
  
  
}
.genresLink{
  text-decoration: none;
  color:white;

}
.genresLink:hover{
  color:gray!important;
}
.rating{
  border-style: solid;
  border-color: white;
  border-radius: 50%;
  padding: 16px;
  float: left;
  list-style-type: none;
  margin-left: -35px ;


}
.rating:hover{
   transform: scale(1.2);
   border-color:greenyellow;
   color: greenyellow;
}
.add-list{
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 13px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float:left;
  list-style-type: none;
  margin-right: 20px;

}
.add-list .tooltiptext{
  visibility: hidden;
  width: 120px;
  background-color: #062541;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  text-decoration: none;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  margin-top: 45px;
  margin-left: -70px;
  

}
.add-list:hover .tooltiptext{
  visibility: visible;
}

.favorite{
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float:left;
  list-style-type: none; 
  margin-right: 20px;
}
.favorite .tooltiptext{
  visibility: hidden;
  width: 135px;
  background-color: #062541;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  text-decoration: none;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  margin-top: 45px;
  margin-left: -75px;
  
  

}
.favorite:hover .tooltiptext{
  visibility: visible;
}


.add-to-watch-list{
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 13px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float:left;
  list-style-type: none;
  margin-right: 20px;

}
.add-to-watch-list .tooltiptext{
  visibility: hidden;
  width: 175px;
  background-color: #062541;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  text-decoration: none;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  margin-top: 45px;
  margin-left: -90px;
  

}
.add-to-watch-list:hover .tooltiptext{
  visibility: visible;
}


.rate{
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 12px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float:left;
  margin-right: 20px;
  list-style-type: none;

}
.rate .tooltiptext{
  visibility: hidden;
  width: 85px;
  background-color: #062541;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  text-decoration: none;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  margin-top: 45px;
  margin-left: -55px;
  

}
.rate:hover .tooltiptext{
  visibility: visible;
}

.card{
  margin-top: 0px !important;
  z-index: 99;
  position: relative;
}
.trailer{
  margin-top: 22px;
  float: left;
  list-style-type: none;

  
}
.trailer :link{
  text-decoration: none;


}
.trailer a{
  color:white;
}
.trailer a:hover{
  color:gray;
}

.background-img-top{
  z-index: -1;
  top: 0;
  filter: brightness(50%);
  background-position:right -200px top;
  height: 100%;
  position: absolute;

}
.score{
  list-style-type: none
  
}


</style>
