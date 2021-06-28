function login(){
    player1_name = document.getElementById("player1_user").value
    player2_name = document.getElementById("player2_user").value
    localStorage.setItem("player1Name",player1_name)
    localStorage.setItem("player2Name",player2_name)
    window.location = "game_page.html"
}