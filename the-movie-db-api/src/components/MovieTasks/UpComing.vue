<template>
    <div class="container">
        <div class="row">
        <div class="card" style="width: 15rem;"  v-for="movie in movies.data.results" :key="movie.id">
            <a :href="'movie/'+movie.id" @click="onClick">
                 <img :src="'https://image.tmdb.org/t/p/original'+movie.poster_path" class="card-img-top" alt="..."  style="height:357px!important">
            </a>
 
  <div class="card-body">
    <h5 class="card-title" style="width:215px;height:50px;font-size:15px;font-weight:bold">{{movie.title}} </h5>

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    <nav class="Page navigation example">
      <v-pagination v-model="currentPage"
                    :page-count="500"
                    :classes="bootstrapPaginationClasses"
                    :labels="customLabels"
                    @change="onChange"></v-pagination>
    </nav>
    </div>
    </div>
</template>

<script>
import vPagination from "../Pagination.vue"
export default {
    name:"now_playing",
    components:{vPagination},
    data(){
        return{
            movies: [],
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
    methods : {
        getData(){
            this.$axios.movieUpComing("/movie/upcoming?api_key=cd703389e9411def3fc33f6ab53dc8df&language=en-US&page="+this.currentPage)
            .then((res) =>{
                this.movies = res
                console.log(res);
            })
        },
        onChange: function () {
            window.scrollTo(0, 0);
            this.getData();

    },
     onClick(){

        },
    
    },
    created(){
        this.getData();
    }
}
</script>