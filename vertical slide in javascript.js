<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<style>
      body {
    background-color: #222222;
  }
  
  h1 {
    color: white;
    text-align: center;
    font-family: sans-serif;
    margin: 50px 0;
  }
  
  .slider-container {
    max-width: 500px;
    margin: 0 auto;
  }
  .slider-container .slick {
    position: relative;
    width: calc(100% - 60px);
    margin: 0 auto;
    background-color: #2b2b2b;
    border-radius: 10px;
    padding: 20px 30px;
  }
  .slider-container .slick .slide {
    border: none;
    color: rgba(255, 255, 255, 0.75);
  }
  .slider-container .slick .slide:focus {
    outline: none;
  }
  .slider-container .slick .slide p {
    display: block;
  }
  .slider-container .slick .slick-arrow {
    transform: rotate(90deg);
    top: initial;
    right: initial;
    left: -30px;
    bottom: 0;
    z-index: 1;
  }
  .slider-container .slick .slick-arrow.slick-prev {
    bottom: 30px;
  }
  .slider-container .slick .slick-arrow.slick-prev:before {
    transform: rotate(135deg);
  }
  .slider-container .slick .slick-arrow.slick-next:before {
    transform: rotate(-45deg);
  }
  .slider-container .slick .slick-arrow:before {
    transition: opacity 0.25s;
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
  }
  .slider-container .slick .slick-dots {
    position: absolute;
    width: 30px;
    left: -30px;
    top: 0;
  }
  .slider-container .slick .slick-dots li {
    margin: 0 auto;
    width: 30px;
    display: block;
  }
  .slider-container .slick .slick-dots li button {
    padding: 0;
  }
  .slider-container .slick .slick-dots li button:before {
    transition: opacity 0.25s;
    color: white;
  }
</style>      
<body>
    <h1>Vertical Slick Slider</h1>

<div class="slider-container">
  <div class="slick">
    <div class="slide">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus."</p>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nec eros at feugiat. Phasellus non metus purus. Suspendisse potenti. Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverra. Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverra"</p>
    </div>
    <div class="slide">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nec eros at feugiat. Phasellus non metus purus. Suspendisse potenti. Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverra. Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nec eros at feugiat. Phasellus non metus purus. Suspendisse potenti. Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverra. Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverra"</p>
    </div>
    <div class="slide">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus."</p>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nec eros at feugiat. Phasellus non metus purus. Suspendisse potenti. Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverra."</p>
      <p>Praesent finibus nibh quis consequat lobortis. Suspendisse ullamcorper mi et fermentum faucibus. Maecenas aliquet ac odio eu mattis. Aenean in blandit libero. Suspendisse viverra"</p>
    </div>
  </div>
</div>
</body>
<script src="main.js"></script>

<script>
  $(function () {
    $(".slick").slick({
      arrows: true,
      dots: true,
      vertical: true,
      verticalSwiping: true
    });
  
    // https://github.com/kenwheeler/slick/issues/1803
    var maxHeight = -1;
    $(".slick-slide").each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
  
    $(".slick-slide").each(function () {
      if ($(this).height() < maxHeight) {
        $(this).css(
          "margin",
          Math.ceil((maxHeight - $(this).height()) / 2) + "px 0"
        );
      }
    });
  });
  
</script>
</html>
