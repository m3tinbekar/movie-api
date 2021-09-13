<template>
<div class="container-fluid" style="padding:0px!important">
<div class="row" >
    
    <div class="col" >

         <div class="card mb-3" style="width:100%;border-style:none;" >
  <div class="row g-0">
    <img class="background-img-top" :src="'https://image.tmdb.org/t/p/original'+this.movieDetails.data.backdrop_path " alt="Card image cap">
    <div class="col-md-4" style="border-style:none;padding:40px" >
      <img :src="
              'https://image.tmdb.org/t/p/original'+this.movieDetails.data.poster_path"  class="img-fluid rounded-start" alt="..." style="border-radius:10px!important">
    </div>
    <div class="col-md-8"  style="">
      <div class="card-body" style="">
        <h5 class="card-title" style="text-align:left;padding-top:150px;color:#FDFEFF"> <h1> {{this.movieDetails.data.original_title}} ({{ this.movieDetails.data.release_date.split("-")[0] }}) </h1>
        <h5 style="font-size:16px;"> 
          <span class="certification" style="color:grey;"> R </span> 
          <span class="releasedate">  {{ releaseDate }} </span> 
          <span class="genres" v-for="movie in this.movieDetails.data.genres" :key="movie.id">
                &nbsp; •<a href="#"  class="genresLink"> {{movie.name}} </a>
            </span> 
          <span class="runtime">&nbsp;&nbsp; •{{ duration }} </span>
            </h5>  
            </h5>
        <p class="card-text" style="height:15%;"> 
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
        <div class="header-info">
              <h5 style="float:left!important"> Overview </h5>
              <p style="float:left;text-align:left;"> {{movieDetails.data.overview}} </p>
        </div>
      </div>
    
    </div>
  </div>
</div>
    </div>
  </div>
  <div class="row">
    <div class="col-9">
      <div class="container-fluid" style="padding-left:40px">
    <h4 class="mt-5" style="text-align:left;margin-left:10px">All Cast</h4>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			<div class="col" v-for="caster in this.movieCast.data.cast" :key="caster.id">
        <div class="card" style="width: 10rem;height:20rem;">
  <img :src="'https://image.tmdb.org/t/p/original'+caster.profile_path" v-if="caster.profile_path !== null" class="card-img-top" alt="..."  style="height:13rem">
  <img src="../../assets/unknown.png" alt="" v-if="caster.profile_path === null" style="height:13rem"> 
  <div class="card-body">
    <h5 class="card-title" style="color:black;font-size:14px;text-align:left"> {{ caster.original_name }}</h5>
    <p class="card-text" style="font-size:14px;color:black;font-family: SourceSansPro-Light;font-weight: 500;text-align:left"> {{ caster.character }} </p>
  </div>
</div>
			</div>
    </div>
</div>
      </div>
      <div class="col-3">
        <h6 style="margin-top:120px;margin-left:20px;text-align:left">Status</h6>
        <h6 style="text-align:left;margin-left:20px;font-family:SourceSansPro-Light"> {{movieDetails.data.status }} </h6>
        <h6 style="text-align:left;margin-left:20px;"> Orginal Language </h6>
        <h6 style="text-align:left;margin-left:20px;font-family:SourceSansPro-Light"> {{movieDetails.data.spoken_languages[0].english_name }} </h6>
        <h6 style="text-align:left;margin-left:20px;"> Budget </h6>
        <h6 style="text-align:left;margin-left:20px;font-family:SourceSansPro-Light"> {{currency }} </h6>
        <h6 style="text-align:left;margin-left:20px;"> Revenue </h6>
        <h6 style="text-align:left;margin-left:20px;font-family:SourceSansPro-Light"> {{ revenue }} </h6>
       
      </div>
  </div>
<div class="row">
  <div class="col">
    <div class="container-fluid" style="padding-left:40px" >
    <h4 class="mt-5" style="text-align:left"> <a href="" class="cast-crew-link" style=""> Full Cast & Crew </a> </h4>
    <!-- <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			<div class="col" v-for="crew in this.movieCast.data.crew" :key="crew.id">
        <div class="card" style="width: 10rem;height:18rem;">
  <img :src="'https://image.tmdb.org/t/p/original'+crew.profile_path" v-if="crew.profile_path !== null" class="card-img-top" alt="..."  style="height:13rem">
  <img src="../../assets/unknown.png" alt="" v-if="crew.profile_path === null" style="height:13rem"> 
  <div class="card-body">
    <h5 class="card-title" style="color:black;font-size:14px;text-align:left"> {{ crew.original_name }}</h5>
    <p class="card-text" style="font-size:14px;color:black;font-family: SourceSansPro-Light;font-weight: 500;text-align:left"> {{ crew.name }} </p>
  </div>
</div>
			</div>
    </div> -->
</div>
  </div>
  
</div>
  
</div>
</template>

<script>

export default {
  components: {},
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
      return formatter.format(this.movieDetails.data.budget);
    },
    revenue() {
       var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(this.movieDetails.data.revenue);
    },

    backgroundImage() {
      return {
        "background-image":
          "url(https://image.tmdb.org/t/p/original" +
          this.movieDetails.data.backdrop_path +
          ")",
      };
    },
  },
  created() {
    this.getData();
    this.getCast();
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
<style>
.card-body {
  height: 100%;
  color: white;
}
.card-title {
  font-size: 35.2px;
}
.certification {
  border-style: solid;
  border-width: thin;
  border-color: gray;
  padding-left: 5px;
}
.genresLink {
  text-decoration: none;
  color: white;
}
.genresLink:hover {
  color: gray !important;
}
.rating {
  width: 60px;
  height: 60px;
  border-style: solid;
  border-color: white;
  border-radius: 50%;
  padding: 16px;
  float: left;
  list-style-type: none;
  margin-left: -35px;
  text-align: center!important;
  vertical-align: middle!important;
}
.rating:hover {
  transform: scale(1.2);
  border-color: greenyellow;
  color: greenyellow;
}
.add-list {
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 12px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float: left;
  list-style-type: none;
  margin-right: 20px;
}
.add-list .tooltiptext {
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
.add-list:hover .tooltiptext {
  visibility: visible;
}

.favorite {
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 12px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float: left;
  list-style-type: none;
  margin-right: 20px;
}
.favorite .tooltiptext {
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
.favorite:hover .tooltiptext {
  visibility: visible;
}

.add-to-watch-list {
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 12px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float: left;
  list-style-type: none;
  margin-right: 20px;
}
.add-to-watch-list .tooltiptext {
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
.add-to-watch-list:hover .tooltiptext {
  visibility: visible;
}

.rate {
  width: 55px;
  height: 55px;
  background-color: #062541;
  padding: 12px;
  border-radius: 50%;
  border-style: solid;
  border-color: #062541;
  float: left;
  margin-right: 20px;
  list-style-type: none;
}
.rate .tooltiptext {
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
.rate:hover .tooltiptext {
  visibility: visible;
}

.card {
  margin-top: 0px !important;
  z-index: 99;
  position: relative;
}
.trailer {
  margin-top: 22px;
  float: left;
  list-style-type: none;
}
.trailer :link {
  text-decoration: none;
}
.trailer a {
  color: white;
}
.trailer a:hover {
  color: gray;
}

.background-img-top {
  z-index: -1;
  top: 0;
  filter: brightness(50%);
  background-position: right -200px top;
  height: 100%;
  position: absolute;
}
.score {
  list-style-type: none;
}
.header-info {
  float: left !important;
  padding: 8px;
}
.scrolling-wrapper {
  overflow-x: auto;
}

body {
  background-color: black;
  color: #fff;
  font-family: "system-ui";
}

h1 {
  font-weight: 800;
  font-size: 3em;
}

.subtitle {
  font-size: 1.25em;
  opacity: 0.65;
}

.card-block {
  height: 250px;
  background-color: #fff;
  border: none;
  background-position: center;
  background-size: cover;
  transition: all 0.2s ease-in-out !important;
  border-radius: 24px;
}
.card-block:hover {
  transform: translateY(-5px);
  box-shadow: none;
}
.fa-list{
  font-size: 14px;
  text-align: center!important;
  vertical-align: middle!important;
}
.fa-heart{
  font-size: 14px;
  text-align: center!important;
  vertical-align: middle!important;
}
.fa-bookmark{
  font-size: 14px;
  text-align: center!important;
  vertical-align: middle!important;
}
.fa-star{
  font-size: 14px;
  text-align: center!important;
  vertical-align: middle!important;
}
.cast-crew-link{
  text-decoration:none;
  color:black;
}
.cast-crew-link:hover{
  color:gray;
}
</style>
