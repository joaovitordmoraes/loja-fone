const $heart = document.querySelector('.heart'),
      $star1 = document.querySelector('.star.-first'),
      $star2 = document.querySelector('.star.-second'),
      $star3 = document.querySelector('.star.-third'),
      $star4 = document.querySelector('.star.-fourth'),
      $star5 = document.querySelector('.star.-last');

$heart.addEventListener('click', handleClick);

function handleClick() {
    $heart.classList.toggle('-active');
}

$star1.addEventListener('click', ratingClick1);
$star2.addEventListener('click', ratingClick2);
$star3.addEventListener('click', ratingClick3);
$star4.addEventListener('click', ratingClick4);
$star5.addEventListener('click', ratingClick5);

function ratingClick1() {
    if(!this.classList.contains('-active')) {
        this.src = 'images/star-full.png';
        $star2.src = 'images/star-empty.png';
        $star3.src = 'images/star-empty.png';
        $star4.src = 'images/star-empty.png';
        $star5.src = 'images/star-empty.png';
        this.classList.add('-active');
    } else {
        this.src = 'images/star-empty.png';
        this.classList.remove('-active');
    }
}

function ratingClick2() {
    if(!this.classList.contains('-active')) {
        $star1.src = 'images/star-full.png';
        this.src = 'images/star-full.png';
        $star3.src = 'images/star-empty.png';
        $star4.src = 'images/star-empty.png';
        $star5.src = 'images/star-empty.png';
        this.classList.add('-active');
    } else {
        $star1.src = 'images/star-empty.png';
        this.src = 'images/star-empty.png';
        $star3.src = 'images/star-empty.png';
        $star4.src = 'images/star-empty.png';
        $star5.src = 'images/star-empty.png';
        this.classList.remove('-active');
    }
}

function ratingClick3() {
    if(!this.classList.contains('-active')) {
        $star1.src = 'images/star-full.png';
        $star2.src = 'images/star-full.png';
        this.src = 'images/star-full.png';
        $star4.src = 'images/star-empty.png';
        $star5.src = 'images/star-empty.png';
        this.classList.add('-active');
    } else {
        $star1.src = 'images/star-empty.png';
        $star2.src = 'images/star-empty.png';
        this.src = 'images/star-empty.png';
        $star4.src = 'images/star-empty.png';
        $star5.src = 'images/star-empty.png';
        this.classList.remove('-active');
    }
}

function ratingClick4() {
    if(!this.classList.contains('-active')) {
        $star1.src = 'images/star-full.png';
        $star2.src = 'images/star-full.png';
        $star3.src = 'images/star-full.png';
        this.src = 'images/star-full.png';
        $star5.src = 'images/star-empty.png';
        this.classList.add('-active');
    } else {
        $star1.src = 'images/star-empty.png';
        $star2.src = 'images/star-empty.png';
        $star3.src = 'images/star-empty.png';
        this.src = 'images/star-empty.png';
        $star5.src = 'images/star-empty.png';
        this.classList.remove('-active');
    }
}

function ratingClick5() {
    if(!this.classList.contains('-active')) {
        $star1.src = 'images/star-full.png';
        $star2.src = 'images/star-full.png';
        $star3.src = 'images/star-full.png';
        $star4.src = 'images/star-full.png';
        this.src = 'images/star-full.png';
        this.classList.add('-active');
    } else {
        $star1.src = 'images/star-empty.png';
        $star2.src = 'images/star-empty.png';
        $star3.src = 'images/star-empty.png';
        $star4.src = 'images/star-empty.png';
        this.src = 'images/star-empty.png';
        this.classList.remove('-active');
    }
}

