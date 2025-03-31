window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var carousels = bulmaCarousel.attach('.carousel', options);

    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    bulmaSlider.attach();
})

function changeRobot(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('robot-video-1'),
    document.getElementById('robot-video-2'),
    document.getElementById('robot-video-3'),
    document.getElementById('robot-video-4'),
    document.getElementById('robot-video-5'),
    document.getElementById('robot-video-6')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.robot-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.robot-selector .button[onclick*="${name}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }
}

function changeHuman(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('human-video-1'),
    document.getElementById('human-video-2'),
    document.getElementById('human-video-3'),
    document.getElementById('human-video-4'),
    document.getElementById('human-video-5'),
    document.getElementById('human-video-6')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.human-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.human-selector .button[onclick*="${name}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }
}

function changeGame(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('game-video-1'),
    document.getElementById('game-video-2'),
    document.getElementById('game-video-3'),
    document.getElementById('game-video-4'),
    document.getElementById('game-video-5'),
    document.getElementById('game-video-6')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.game-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.game-selector .button[onclick*="${name}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  changeRobot('Robot #1', [
    './static/videos/robot/1-1.mp4',
    './static/videos/robot/1-2.mp4',
    './static/videos/robot/1-3.mp4',
    './static/videos/robot/1-4.mp4',
    './static/videos/robot/1-5.mp4',
    './static/videos/robot/1-6.mp4'
  ]);
});

document.addEventListener('DOMContentLoaded', (event) => {
  changeHuman('Human #1', [
    './static/videos/human/1-1.mp4',
    './static/videos/human/1-2.mp4',
    './static/videos/human/1-3.mp4',
    './static/videos/human/1-4.mp4',
    './static/videos/human/1-5.mp4',
    './static/videos/human/1-6.mp4'
  ]);
});

document.addEventListener('DOMContentLoaded', (event) => {
  changeGame('Game #1', [
    './static/videos/game/1-1.mp4',
    './static/videos/game/1-2.mp4',
    './static/videos/game/1-3.mp4',
    './static/videos/game/1-4.mp4',
    './static/videos/game/1-5.mp4',
    './static/videos/game/1-6.mp4'
  ]);
});