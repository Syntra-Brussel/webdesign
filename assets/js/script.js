$(document).ready(function() {
    const params = new URLSearchParams(window.location.search)
    if (params.has('all')) {
        sessionStorage.setItem('all', params["all"]);
    }
console.log(params);
    let all = sessionStorage.getItem('all');
    if (all == 1) {
        $(".published-no").css("display", "block");
    }
});