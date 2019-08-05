const $heart = document.querySelector('.heart'),
      $stars = document.querySelectorAll('.star');

$heart.addEventListener('click', clickHeart);

$stars.forEach(function($star, key) {
    $star.addEventListener('click', function() {
        clickStars(key);
    });
});

function clickHeart() {
    this.classList.toggle('-active');
}

function clickStars(index) {
    $stars.forEach(function($star, key) {
        $star.classList.remove('-active');

        if(key <= index) {
            $star.classList.add('-active');
        }
    });
}