function skillsMember() {
    var member = document.getElementById("member").value;
    if (member == "yes") {
        document.getElementById("member").innerHTML = "You are a member";
    } else {
        document.getElementById("member").innerHTML = "You are not a member";
    }
}