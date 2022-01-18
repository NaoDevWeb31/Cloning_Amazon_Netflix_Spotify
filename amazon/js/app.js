// $(function () {
//     $("#nav-search-select").change(function () {
//         var selectedText = $(this).find("option:selected").text();
//         $("#nav-search").find(".nav-search-label").html(selectedText);
//     });
// });

let select = document.getElementById("nav-search-select");
let searchNav = document.getElementById("nav-search");

select.addEventListener("change", e => {
    var selectedOption = e.target.selectedOptions[0].text;
    // console.log(selectedOption);
    searchNav.querySelector(".nav-search-label").innerHTML = selectedOption;
});
