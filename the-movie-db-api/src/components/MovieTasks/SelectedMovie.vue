<template>
    <div>
<!-- Playlist Wrapper Start -->
<div class="wrapper position white shadow cf">

  <!-- Header Start -->
  <div class="row">

    <!-- Thumbnail Start -->
    <div class="col-3 tablet-col-persist shadow2">
      <img class="thumbnail" :src="'https://image.tmdb.org/t/p/original'+this.movieDetails.data.poster_path" style="height:324px"/>
    </div>
    <!-- Thumbnail End -->

    <!-- About Start  -->
    <div class="col-9 tablet-col-persist padding-20 lh">

      <!-- Title Start -->
      <h4> {{this.movieDetails.data.original_title}} <span class="label orange-red border">{{this.movieDetails.data.release_date.split("-")[0]}}</span></h4>
      <!-- Title End -->

      <!-- Rating Start -->
      <div class="rating">
        <span>☆</span><span>☆</span><span class="a">☆</span><span  class="a">☆</span><span  class="a">☆</span>
      </div>
      <!-- Rating End -->

      <!-- Info Start -->
      <p><span class="text-strong">Duration:</span>{{duration}}</p>
      <p><span class="text-strong">Release Date:</span> {{releaseDate}} </p>
      <!-- <p><span class="text-strong">Director:</span> Jon Favreau</p>
      <p><span class="text-strong">Writers:</span> Justin Marks (screenplay), Rudyard Kipling (book)</p>
      <p><span class="text-strong">Starts:</span> Neel Sethi, Bill Murray, Ben Kingsley</p> -->
      <!-- Info End -->

      <!-- Genre Start -->
      <div class="pull-left width-100 margin-top" v-for="movie in this.movieDetails.data.genres" :key="movie.id">
        <!-- <a href="#1" class="label orange-red hover-tooltip"> -->
                    {{movie.name}}
             
             
         
        <!-- </a> -->
        <!-- <a href="#2" class="label orange-red hover-tooltip">
          <span class="tooltip top text-capitalize">View Adventure</span>
          Adventure
        </a>
        <a href="#3" class="label orange-red hover-tooltip">
          <span class="tooltip top text-capitalize">View Comedy</span>
          Comedy
        </a> -->
      </div>
      <!-- Genre End -->

    </div>
    <!-- About End -->
  </div>
  <!-- Header End -->

  <!-- Table Start -->
  <div class="row padding-20">

  <table class="hover">
    <thead>
      <tr class="text-13">
        <th class="-padding-left">Tmb</th>
        <th>Cast Name</th>
        <th>Playing</th>
        <th></th>
      </tr>
    </thead>
    <tbody v-for="caster in this.movieCast.data.cast" :key="caster.id">

      <!-- Tr Start -->
      <tr>
        <td class="w35 -padding-left">
          <img class="thumbnail" :src="'https://image.tmdb.org/t/p/original'+caster.profile_path" v-if="caster.profile_path!==null" style="height:140px;width:110px"/>
          <img class="thumbnail" src="../../assets/unknown.png" alt="" v-if="caster.profile_path===null" style="height:140px;width:110px">
          
        </td>
        <td>{{caster.name}}</td>
        <td>{{caster.character}}</td>
        <td class="text-right">
          <!-- Action Start -->
          <div class="action">
            <a href="#" class="btn icon s orange-red border rounded hover-tooltip">
              <span class="tooltip top">View More</span>
              <i class="fa fa-external-link"></i>
            </a>
            <a href="#" class="btn icon s orange-red border rounded hover-tooltip">
              <span class="tooltip top">Bookmark</span>
              <i class="fa fa-bookmark-o"></i>
            </a>
          </div>
          <!-- Action End -->
        </td>
      </tr>
      <!-- Tr End -->

      

    </tbody>
  </table>

  </div>
  <!-- Table End -->

  <!-- Storyline Start -->
  <div class="row padding-20 padding-top-10">
    <h6 class="text-strong">Related</h6>
    <div class="row">

      <!-- Related Left Start -->
      <div class="col-6 tablet-col-persist">
        <div class="col-gutter-10 cf">
          <div class="col-3 tablet-col-persist">
            <a class="pull-left" href="#">
              <img class="thumbnail" src="#" />
            </a>
          </div>
          <div class="col-3 tablet-col-persist">
            <a class="pull-left" href="#">
              <img class="thumbnail" src="#" />
            </a>
          </div>
          <div class="col-3 tablet-col-persist">
            <a class="pull-left" href="#">
              <img class="thumbnail" src="#" />
            </a>
          </div>
          <div class="col-3 tablet-col-persist">
            <a class="pull-left" href="#">
              <img class="thumbnail" src="#" />
            </a>
          </div>
        </div>
      </div>
      <!-- Related Left End -->

      <!-- Box Office Start -->
      <div class="col-6 tablet-col-persist padding-left-20">
        <h5 class="padding-v-10">Box Office</h5>
        <p><span class="text-strong text-orange-red">Budget:</span> $175,000,000 (estimated)</p>
        <p><span class="text-strong text-orange-red">Opening Weekend:</span> $103,261,464 (USA)</p>
        <p><span class="text-strong text-orange-red">Gross:</span> $202,218,804 (USA) (26 April 2016)</p>
      </div>
      <!-- Box Office End -->

    </div>
  </div>
  <!-- Storyline End -->

</div>
<!-- Playlist Wrapper End -->
    </div>
</template>

<script>
export default {
    name: "SelectedMovie",
    data(){
        return{
            movieDetails : [],
            movieCast : []
        }
    },
    methods:{
        getData(){
            var movieID = this.$route.params.id
            //console.log("https://api.themoviedb.org/3/movie/"+movieID+"?api_key=cd703389e9411def3fc33f6ab53dc8df&language=en-US");
            this.$axios.movieDetail("/movie/"+movieID+"?api_key=cd703389e9411def3fc33f6ab53dc8df&language=en-US")
            .then((res) => {
                this.movieDetails = res
                console.log(this.movieDetails);
            })
        },
        getCast(){
            var movieID = this.$route.params.id
            this.$axios.movieCast("/movie/"+movieID+"/credits?api_key=cd703389e9411def3fc33f6ab53dc8df")
            .then((res) => {
                this.movieCast = res
                console.log(this.movieCast);
            })
        }

        
    },
    computed:{
        duration(){
            var hour = Math.floor((this.movieDetails.data.runtime)/60)
            var min = (this.movieDetails.data.runtime - hour*60)

            return " "+hour+"h "+min+" min"
        },
        releaseDate(){

            var year = this.movieDetails.data.release_date.split("-")[0]
            var month = this.movieDetails.data.release_date.split("-")[1]
            var day = this.movieDetails.data.release_date.split("-")[2]
            var date = new Date(year,month,day)
            let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
            let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
            let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
            return da +" "+ mo +" "+ " "+ ye
        },
        // genres(){
        //     var genres = []
        //     for (let index = 0; index < this.movieDetails.data.genres.length; index++) {
        //         genres.append(this.movieDetails.data.genres[index].name) 
                
        //     }
        //     return genres
        // }
    },
    created(){
        this.getData();
        this.getCast();
    }
}
</script>
<style>
/*
  Modulr.css
  ---------------------
  @desc: Modular CSS Framework
  @author: Decorator.io
  @twitter: https://www.twitter.com/_uloga
  @source: http://www.decorator.io/modulr
\--------------------------------------------*/

/* __ inspired by google play __ */

body{
  background: #eee;
}

/* __ content edits __ */

.wrapper{
  width: 680px;
}
.thumbnail{
  float: left;
  width: 100%;
  
}
.lh p,
.lh .margin-top{
  padding-left: 2px;
}
.w35{
  width: 35px;
}

/* __ rating __ */

.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: left;
  margin: 2px 0 5px 0;
}
.rating a, 
.rating span{
  font-size: 21px;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1em;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
   color: #FF5722;
   cursor: pointer;
}
.rating .a{
  color: #FF5722;
}

/* __ table edits __ */

.action{
  visibility: hidden;
}
table tr:hover .action{
  visibility: visible;
}
table td, table th {
  border-top: 1px solid #eee;
  padding: 8px;
}

/* __ modifiers __ */

.shadow{
  box-shadow: 0 0 6px rgba(0,0,0,0.27);
}
.shadow2{
  box-shadow: 0 0 4px #8d8d8d;
}
.position{
  margin: 50px auto;
}
</style>