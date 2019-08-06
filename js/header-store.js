const $searchIcon = document.querySelector('.search-icon'),
      $searchBar = document.querySelector('.search');

$searchIcon.addEventListener('click', () => {
    $searchBar.classList.toggle('-active');

    if($searchBar.classList.contains('-active')) {
        $searchIcon.src = 'images/close.png';
    } else {
        $searchIcon.src = 'images/search.png';
    }
});

