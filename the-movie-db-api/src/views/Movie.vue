<template>
    <div>
        <ul>
            <li v-for="movie in movies.data.results" :key="movie.id">
                <p> {{movie.title}} </p>
            </li>
        </ul>
     <p class="text-success">Current page: <strong>{{ currentPage }}</strong></p>
    <nav class="mb-4">
      <v-pagination v-model="currentPage"
                    :page-count="200"
                    :classes="bootstrapPaginationClasses"
                    :labels="customLabels"
                    @change="onChange"></v-pagination>
    </nav>
    </div>
</template>

<script>
import vPagination from '../components/vue-plain-pagination.vue'
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
        this.getData();
        this.tryData();
    }
}
</script>