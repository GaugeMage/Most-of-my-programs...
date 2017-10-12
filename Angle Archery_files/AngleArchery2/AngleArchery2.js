// AngleArchery2.js
// Note: load this at the bottom of the HTML page!
form2.style.display = "none";
//x.value = "0 seconds";
form3.style.display = "none";
//The Javascript
//The Name thing
//The sprites
var scene;
var bow;
scene = new Scene();
arrow = new Sprite (scene, "Arrow.png", 125, 125);
arrow.setMoveAngle(270);
arrow.setSpeed(0);
arrow.changeXby(500);
arrow.changeYby(50);
arrow.restart = function(){
    this.show();
    this.setSpeed(0);
    this.setBoundAction(DIE);
    this.setPosition(bow.x, bow.y);
    this.setSpeed(0);
}
bow = new Sprite (scene, "Oblivion_SteelBow.png", 250, 250);
bow.setAngle(270);
bow.setSpeed(0);
bow.changeXby(500);
bow.changeYby(50);
target1 = new Sprite (scene, "target1.png", 50, 50);
target1.setSpeed(0);
target1.x = Math.random() * scene.width;
target1.y = Math.random() * scene.width;
target2 = new Sprite (scene, "target1.png", 50, 50);
target2.setSpeed(0);
target2.x = Math.random() * scene.width;
target2.y = Math.random() * scene.width;
target3 = new Sprite (scene, "target1.png", 50, 50);
target3.setSpeed(0);
target3.x = Math.random() * scene.width;
target3.y = Math.random() * scene.width;
gTarget = new Sprite (scene, "GoldenTarget.png", 50, 50);
gTarget.setSpeed(0);
gTarget.x = Math.random() * scene.width;
gTarget.y = Math.random() * scene.width;
bTarget = new Sprite (scene, "bluetarget.png", 50, 50);
bTarget.setSpeed(0);
bTarget.x = Math.random() * scene.width;
bTarget.y = Math.random() * scene.width;
grTarget = new Sprite (scene, "GreenTarget.png", 50, 50);
grTarget.setSpeed(0);
grTarget.x = Math.random() * scene.width;
grTarget.y = Math.random() * scene.width;
scene.start();

function figureName(){
    var txtName = document.getElementById("txtName");
    var userName = txtName.value;
    alert("Let's play " + userName + "!");
    txtName.style.display = "none";
    degrees.style.display = "none";
    var output = document.getElementById("output");
    var output2 = document.getElementById("output2");
    var output3 = document.getElementById("output3");
    output.innerHTML = " " + degrees.value;
    output2.innerHTML = " " + txtName.value;
    output3.innerHTML = " " + score.value;
    score.value = Number(0);
    form1.style.display = "none";
    form2.style.display = "block";
    form10.style.display = "none";
    document.body.style.background = "black";
    document.body.style.color = "white";
    setTimeout(function(){alert("The timer will start now")}, 1000);
    var sc = document.getElementById('score');
    var x = document.getElementById('txt');
    var t1 = setTimeout(function(){x.value = "1"}, 1000);
    var t2 = setTimeout(function(){x.value = "2"}, 2000);
    var t3 = setTimeout(function(){x.value = "3"}, 3000);
    var t4 = setTimeout(function(){x.value = "4"}, 4000);
    var t5 = setTimeout(function(){x.value = "5"}, 5000);
    var t6 = setTimeout(function(){x.value = "6"}, 6000);
    var t7 = setTimeout(function(){x.value = "7"}, 7000);
    var t8 = setTimeout(function(){x.value = "8"}, 8000);
    var t9 = setTimeout(function(){x.value = "9"}, 9000);
    var t10 = setTimeout(function(){x.value = "10"}, 10000);
    var t11 = setTimeout(function(){x.value = "11"}, 11000);
    var t12 = setTimeout(function(){x.value = "12"}, 12000);
    var t13 = setTimeout(function(){x.value = "13"}, 13000);
    var t14 = setTimeout(function(){x.value = "14"}, 14000);
    var t15 = setTimeout(function(){x.value = "15"}, 15000);
    var t16 = setTimeout(function(){x.value = "16"}, 16000);
    var t17 = setTimeout(function(){x.value = "17"}, 17000);
    var t18 = setTimeout(function(){x.value = "18"}, 18000);
    var t19 = setTimeout(function(){x.value = "19"}, 19000);
    var t20 = setTimeout(function(){x.value = "20"}, 20000);
    var t21 = setTimeout(function(){x.value = "21"}, 21000);
    var t22 = setTimeout(function(){x.value = "22"}, 22000);
    var t23 = setTimeout(function(){x.value = "23"}, 23000);
    var t24 = setTimeout(function(){x.value = "24"}, 24000);
    var t25 = setTimeout(function(){x.value = "25"}, 25000);
    var t26 = setTimeout(function(){x.value = "26"}, 26000);
    var t27 = setTimeout(function(){x.value = "27"}, 27000);
    var t28 = setTimeout(function(){x.value = "28"}, 28000);
    var t29 = setTimeout(function(){x.value = "29"}, 29000);
    var t30 = setTimeout(function(){x.value = "30"}, 30000);
    var t31 = setTimeout(function(){x.value = "31"}, 31000);
    var t32 = setTimeout(function(){x.value = "32"}, 32000);
    var t33 = setTimeout(function(){x.value = "33"}, 33000);
    var t34 = setTimeout(function(){x.value = "34"}, 34000);
    var t35 = setTimeout(function(){x.value = "35"}, 35000);
    var t36 = setTimeout(function(){x.value = "36"}, 36000);
    var t37 = setTimeout(function(){x.value = "37"}, 37000);
    var t38 = setTimeout(function(){x.value = "38"}, 38000);
    var t39 = setTimeout(function(){x.value = "39"}, 39000);
    var t40 = setTimeout(function(){x.value = "40"}, 40000);
    var t41 = setTimeout(function(){x.value = "41"}, 41000);
    var t42 = setTimeout(function(){x.value = "42"}, 42000);
    var t43 = setTimeout(function(){x.value = "43"}, 43000);
    var t44 = setTimeout(function(){x.value = "44"}, 44000);
    var t45 = setTimeout(function(){x.value = "45"}, 45000);
    var t46 = setTimeout(function(){x.value = "46"}, 46000);
    var t47 = setTimeout(function(){x.value = "47"}, 47000);
    var t48 = setTimeout(function(){x.value = "48"}, 48000);
    var t49 = setTimeout(function(){x.value = "49"}, 49000);
    var t50 = setTimeout(function(){x.value = "50" && alert("10 secoonds left")}, 50000);
    var t51 = setTimeout(function(){x.value = "51"}, 51000);
    var t52 = setTimeout(function(){x.value = "52"}, 52000);
    var t53 = setTimeout(function(){x.value = "53"}, 53000);
    var t54 = setTimeout(function(){x.value = "54"}, 54000);
    var t55 = setTimeout(function(){x.value = "55"}, 55000);
    var t56 = setTimeout(function(){x.value = "56"}, 56000);
    var t57 = setTimeout(function(){x.value = "57"}, 57000);
    var t58 = setTimeout(function(){x.value = "58"}, 58000);
    var t59 = setTimeout(function(){x.value = "59"}, 59000);
    var t60 = setTimeout(function(){x.value = "60" && alert("Time is up!!")}, 60000);	
}

var figureNameButton = document.getElementById("figureName");
figureNameButton.onclick = figureName;

var update = function() {
    output.innerHTML = " " + degrees.value;
    output3.innerHTML = "Score:" + score.value;
    scene.clear();
    target1.update();
    target2.update();
    target3.update();
    gTarget.update();
    bTarget.update();
    grTarget.update();
    arrow.update();
    if (keysDown[K_A]){
        arrow.changeAngleBy(-5);
        degrees.value -= Number(5);
    } // end if
    if (keysDown[K_D]){
        arrow.changeAngleBy(5);
        degrees.value -= Number(-5);
    } // end if
    
    if (keysDown[K_W]){
        arrow.changeSpeedBy(50);
    } // end ifs
    
    if (keysDown[K_SPACE]){
        arrow.restart();
    } // end ifs
    //The bow
    bow.update();
    if (keysDown[K_A]){
        bow.changeAngleBy(-5);        
    }
    if (keysDown[K_D]){
        bow.changeAngleBy(5);        
    }
    if(target1.collidesWith(bow)){
        target1.x = Math.random() * scene.width;
        target1.y = Math.random() * scene.width;
        arrow.restart();
    }
    if(target2.collidesWith(bow)){
        target2.x = Math.random() * scene.width;
        target2.y = Math.random() * scene.width;
        arrow.restart();
    }
    if(target3.collidesWith(bow)){
        target3.x = Math.random() * scene.width;
        target3.y = Math.random() * scene.width;
        arrow.restart();
    }
    if(gTarget.collidesWith(bow)){
        gTarget.x = Math.random() * scene.width;
        gTarget.y = Math.random() * scene.width;
        arrow.restart();
    }
    if(grTarget.collidesWith(bow)){
        grTarget.x = Math.random() * scene.width;
        grTarget.y = Math.random() * scene.width;
        arrow.restart();
    }
    if(bTarget.collidesWith(bow)){
        bTarget.x = Math.random() * scene.width;
        bTarget.y = Math.random() * scene.width;
        arrow.restart();
    }
    if(arrow.collidesWith(target1)){
        output.style.display = "none";
        var answer = prompt("What degrees was it at?");
        target1.x = Math.random() * scene.width;
        target1.y = Math.random() * scene.width;
        arrow.restart();
        output.style.display = "block";
    }
    if(arrow.collidesWith(target2)){
        output.style.display = "none";
        var answer = prompt("What degrees was it at?");
        target2.x = Math.random() * scene.width;
        target2.y = Math.random() * scene.width;
        arrow.restart();
        output.style.display = "block";
    }
    if(arrow.collidesWith(target3)){
        output.style.display = "none";
        var answer = prompt("What degrees was it at?");
        target3.x = Math.random() * scene.width;
        target3.y = Math.random() * scene.width;
        arrow.restart();
        output.style.display = "block";
    }
    if(arrow.collidesWith(grTarget)){
        output.style.display = "none";
        var grAnswer = prompt("What degrees was it at?");
        grTarget.x = Math.random() * scene.width;
        grTarget.y = Math.random() * scene.width;
        output.style.display = "block";
    }
    if(arrow.collidesWith(gTarget)){
        output.style.display = "none";
        var gAnswer = prompt("What degrees was it at?");
        gTarget.x = Math.random() * scene.width;
        gTarget.y = Math.random() * scene.width;
        arrow.setSpeed(5);
        output.style.display = "block";
    }
    if(arrow.collidesWith(bTarget)){
        output.style.display = "none";
        var bAnswer = prompt("What degrees was it at?");
        bTarget.x = Math.random() * scene.width;
        bTarget.y = Math.random() * scene.width;
        arrow.restart();
        output.style.display = "block";
    }
    if(grAnswer == degrees.value){
        score.value -= Number(-20);
        var oAnswer = prompt("Is it obtuse?")
    }
    if (oAnswer == "Yes" || oAnswer == "yes" && degrees.value < Number(180) && degrees.value > Number(90)){
        score.value -= Number(-20);
        arrow.setSpeed(0);
    }
    if (oAnswer == "No" || oAnswer == "no" && degrees.value < Number(90) || degrees.value > Number(180)){
        score.value -= Number(-20);
        arrow.setSpeed(0);
        var onAnswer = prompt("What type of angle is it?");
    }
    if(onAnswer == "Acute" || onAnswer == "acute" && degrees.value < 90){
        score.value -= Number(-20);
    }
    if(onAnswer == "Right" || onAnswer == "right" && degrees.value == 90){
        score.value -= Number(-20);
    }
    if(onAnswer == "Reflex" || onAnswer == "reflex" && degrees.value > 180){
        score.value -= Number(-20);
    }
    if(gAnswer == degrees.value){
        score.value -= Number(-20);
        var acAnswer = prompt("Is it acute?")
    }
    if(acAnswer == "Yes" || acAnswer == "yes" && degrees.value < Number(90) && degrees.value > Number(0)){
        score.value -= Number(-20);
        arrow.setSpeed(0);
    }
    if(acAnswer == "No" || acAnswer == "no" && degrees.value > Number(90)){
        score.value -= Number(-20);
        arrow.setSpeed(0);
        var acnAnswer = prompt("What type of angle is it?");
    }
    if(acnAnswer == "Obtuse" || acnAnswer == "obtuse" && degrees.value > Number(90) && degrees.value < Number(180)){
        score.value -= Number(-20);
    }
    if(acnAnswer == "Reflex" || acnAnswer == "reflex" && degrees.value > 180){
        score.value -= Number(-20);
    }
    if(acnAnswer == "Right" || acnAnswer == "right" && degrees.value == 90){
        score.value -= Number(-20);
    }
    if(bAnswer == degrees.value){
        score.value -= Math.floor(Math.random() * Number(-100));
        var rAnswer = prompt("Is it reflex?");
    }
    if(rAnswer == "Yes" || rAnswer == "yes" && degrees.value > Number(180)){
        score.value -= Number(-20);
    }
    if(rAnswer == "No" || rAnswer == "no" && degrees.value < Number(180)){
        score.value -= Number(-20);
        var rnAnswer = prompt("What type of angle is it");
    }
    if(rnAnswer == "Acute" || rnAnswer == "acute" && degrees.value < Number(90)){
        score.value -= Number(-20);
    }
    if(rnAnswer == "Obtuse" || rnAnswer == "obtuse" && degrees.value < Number(180) && degrees.value > Number(90)){
        score.value -= Number(-20);
    }
    if(rnAnswer == "Right" || rnAnswer == "right" && degrees.value == Number(90)){
        score.value -= Number(-20);
    }
    if(answer == degrees.value){
        score.value -= Number(-1);
        alert("Correct. You now have " + score.value + "!");
    }
    if(score.value > Number(100)){
        alert("You are now on level 2!");
        score.value = Number(0);
    }
    if(score.value > Number(200)){
        alert("You are now on level 3!");
        score.value = Number(0);
    }
    if(score.value > Number(300)){
        alert("You are now on level 4!");
        score.value = Number(0);
    }
    if(score.value > Number(400)){
        alert("You are now on level 5!");
        score.value = Number(0);
    }
    if(score.value > Number(500)){
        alert("You have beat the Game");
        score.value = Number(0);
    }
}//End update