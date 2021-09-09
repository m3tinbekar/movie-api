<template>
  <div>
    
    <nav class="navbar navbar-expand-lg navbar-dark"  style="background-color: #062541;">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="/movie">Movie</a>
        </li> -->
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movie
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/movies/popular">Popular</a></li>
            <li><a class="dropdown-item" href="/movies/now_playing">Now Playing</a></li>
            <li><a class="dropdown-item" href="/movies/up_coming">Up Coming</a></li>
            <li><a class="dropdown-item" href="/movies/top_rated">Top Rated</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tv Show
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/tv/popular">Popular</a></li>
            <li><a class="dropdown-item" href="#">Airing Today</a></li>
            <li><a class="dropdown-item" href="#">On TV</a></li>
            <li><a class="dropdown-item" href="#">Top Rated</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" style="height:40px">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
        

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="btn-group dropstart">
          <a class="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../assets/account.png" alt="" style="weight:32px;height:32px;">
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><a class="dropdown-item" href="#" style="font-size:15px">Login</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
        
      </ul>
        
      </form>
    </div>
  </div>
</nav>
  </div>
</template>
