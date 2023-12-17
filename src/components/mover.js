<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .slider-container {
      overflow: hidden;
      position: relative;
      width: 300px;
      margin: 20px auto;
    }

    .slider {
      display: flex;
      transition: transform 0.3s ease-in-out;
    }

    .slide {
      min-width: 100%;
      box-sizing: border-box;
      flex: 0 0 auto;
    }

    .slider-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 24px;
    }

    .slider-btn-left {
      left: 0;
      display: none;
    }

    .slider-btn-right {
      right: 0;
    }
  </style>
</head>
<body>

<div class="slider-container">
  <div class="slider">
    <div class="slide">1</div>
    <div class="slide">2</div>
    <div class="slide">3</div>
    <!-- Add more slides as needed -->
  </div>
  <div class="slider-btn slider-btn-left" onclick="moveSlider('left')">❮</div>
  <div class="slider-btn slider-btn-right" onclick="moveSlider('right')">❯</div>
</div>

<script>
  var slider = document.querySelector('.slider');
  var sliderBtnLeft = document.querySelector('.slider-btn-left');
  var sliderBtnRight = document.querySelector('.slider-btn-right');
  var currentIndex = 0;

  function moveSlider(direction) {
    var slideWidth = slider.querySelector('.slide').offsetWidth;

    if (direction === 'left' && currentIndex > 0) {
      currentIndex--;
    } else if (direction === 'right' && currentIndex < slider.children.length - 1) {
      currentIndex++;
    }

    var translateXValue = -currentIndex * slideWidth;
    slider.style.transform = 'translateX(' + translateXValue + 'px)';

    updateButtonVisibility();
  }

  function updateButtonVisibility() {
    if (currentIndex === 0) {
      sliderBtnLeft.style.display = 'none';
    } else {
      sliderBtnLeft.style.display = 'block';
    }

    if (currentIndex === slider.children.length - 1) {
      sliderBtnRight.style.display = 'none';
    } else {
      sliderBtnRight.style.display = 'block';
    }
  }

  updateButtonVisibility();
</script>

</body>
</html>
