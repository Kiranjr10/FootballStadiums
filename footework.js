function welcomeMessage() {
    alert("Welcome to Footework!");
}

/* Validation for the comment box */
function validateComment() {
    var name = document.getElementById("userName").value;
    var message = document.getElementById("userMessage").value;

    if (name == "" || message == "") {
        alert("Please fill in both name and message!");
        return false;
    }
    return true;
}


// Simple console log for basic tracking
console.log("Footework Loaded Successfully!");

/* Real-time Search Logic for Clubs */
function filterClubs() {
    var input = document.getElementById("clubSearch");
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName("club-card");

    for (var i = 0; i < cards.length; i++) {
        var h2 = cards[i].getElementsByTagName("h2")[0];
        var txtValue = h2.textContent || h2.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function changeTheme() {
    var homeSection = document.getElementById("home");
    homeSection.style.backgroundColor = "darkred";
}
