$(document).ready(function() {
    const params = new URLSearchParams(window.location.search)
    if (params.has('all')) {
        all = params.get("all");
        if (all == "") {
            all = 1;
        }
        sessionStorage.setItem('all', all);
    }

    let all = sessionStorage.getItem('all');
    if (all == 1) {
        $(".published-no").css("display", "block");
    }
});