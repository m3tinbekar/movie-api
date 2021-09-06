<template>
    <div class="container">
        <div class="row">
        <div class="card" style="width: 20rem;"  v-for="movie in movies.data.results" :key="movie.id">
  <img :src="'https://image.tmdb.org/t/p/original'+movie.poster_path" class="card-img-top" alt="..." style="height:477px!important">
  <div class="card-body">
    <h5 class="card-title">{{movie.title}} </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    <nav class="Page navigation example">
      <v-pagination v-model="currentPage"
                    :page-count="200"
                    :classes="bootstrapPaginationClasses"
                    :labels="customLabels"
                    @change="onChange"></v-pagination>
    </nav>
    </div>
    </div>
</template>

<script>
import vPagination from '../components/Pagination.vue'
export default {
    
    name : "Movie",
    components:{
        vPagination,
    },
    data(){
        return {
            movies:[],
            currentPage: 1,
      bootstrapPaginationClasses: { // http://getbootstrap.com/docs/4.1/components/pagination/
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      },
      customLabels: {
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last'
      }
        }
    },
    methods:{ 
        getData() {
            this.$axios.movie("/movie/550?api_key=cd703389e9411def3fc33f6ab53dc8df")
            .then((res) => {
                console.log(res)


            })
        },
        tryData(){
            this.$axios.try("/discover/movie?api_key=cd703389e9411def3fc33f6ab53dc8df&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+this.currentPage+"&with_watch_monetization_types=flatrate")
            .then((res) =>{
                console.log(res)
                this.movies = res

            })
        },
        onChange: function () {
            this.tryData();

    }

    },
    created() {
        //this.getData();
        this.tryData();
    }
}
</script>
<style>
.row {
    --bs-gutter-x: none!important;
}
</style>