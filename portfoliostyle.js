/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     console.log("hi")
//     document.getElementById("myDropdown").classList.toggle("show", true);
//   }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    console.log(event.target)
    if (!event.target.matches('.dropIt')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    else {
        document.getElementById("myDropdown").classList.toggle("show", true);
    }
}