<template>
  <div class="home">
     <div class="small">
    
    <chartjs-doughnut  :datasets="datasets" :option="option"></chartjs-doughnut>

  </div>
  </div>
</template>

<script>


  export default {
   
    data () {
      return {

        datasets : [
          {
            data : [10,10,10,70],
            backgroundColor : ["Green", "Yellow", "Red"]
          }
        ],
        option: {
          title : {
            display: true,
            position: "bottom",

          }
        },
        details : []
      }
    },
    methods:{
      getData(){
      this.$axios.movieDetail("/movie/566525?api_key=cd703389e9411def3fc33f6ab53dc8df&language=en-US")
      .then((res) =>{
        this.details = res
        console.log(res);
        //this.datasets.data.push(res.data.vote_average)
        
        console.log(this.datasets.data[0])
      })
    },
    
    },
    mounted(){
      const score = this.details.data.vote_average * 10
      this.renderChart({
        datasets:[{
          data: score
        }]
      })
    },
    computed:{
      
    },
    created(){
      this.getData()
    }
    
    
  }
</script>
<style>
 .small {

    max-width: 600px;
    margin:  150px auto;
  }
</style>