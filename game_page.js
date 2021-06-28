player1Name = localStorage.getItem("player1Name")
player2Name = localStorage.getItem("player2Name")

player1score = 0
player2score = 0
document.getElementById("player1").innerHTML = player1Name + ":"
document.getElementById("player2").innerHTML = player2Name + ":"

document.getElementById("player1_points_lable").innerHTML = player1score
document.getElementById("player2_points_lable").innerHTML = player2score

document.getElementById("player_question").innerHTML = "question turn:" + player1Name
document.getElementById("player_answer").innerHTML = "answer turn:" + player2Name

function send(){
    get_word = document.getElementById("word").value 
    word = get_word.toLowerCase()
    console.log(get_word)

    charAt1 = word.charAt(1)
    console.log(charAt1)

    next = Math.floor(word.length/2);
    charAt2 = word.charAt(next)
    
    next2 = word.length-1
    charAt3 = word.charAt(next2)
    console.log(charAt3)

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_")
    console.log(remove_charAt3)
row1 = "<h4 id = 'word_display'> Q:"+ remove_charAt3+"</h4>"
row2 = "<br> Answer <input type = 'text' id='text_check_box'>"
row3 = "<br> <br> <button onclick = 'check()' class='btn btn-info'>Check</button>"
row = row1+row2+row3
document.getElementById("output").innerHTML = row
document.getElementById("word").value = ""
}
Question_player = "player1"
answer_player = "player2"
function check(){
    get_answer = document.getElementById("text_check_box").value
    answer = get_answer.toLowerCase()
if (answer == word){
    if(answer_player == "player1"){
        player1score=player1score +1
        document.getElementById("player1_points_lable").innerHTML = player1score;
    }
    else{
        player2score=player2score +1
        document.getElementById("player2_points_lable").innerHTML = player2score;
    }

}
if (Question_player == "player1"){
    Question_player = "player2"
    document.getElementById("player_question").innerHTML = "question turn:" + player2Name
} 
else{
    Question_player = "player1"
    document.getElementById("player_question").innerHTML = "question turn:" + player1Name
}
if (answer_player == "player1"){
    answer_player = "player2"
    document.getElementById("player_answer").innerHTML = "answer turn:" + player2Name
} 
else{
    answer_player = "player1"
    document.getElementById("player_answer").innerHTML = "answer turn:" + player1Name
}
document.getElementById("word").innerHTML = ""
}
