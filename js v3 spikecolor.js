if (window.location.href == "https://starve.io/" || window.location.href == "https://www.starve.io/"){
    window.location = "https://starve.io/?id=1";
}
const $ = window.jQuery;
let Pass = document.createElement('div');
let inputPass = document.createElement('input');
let RememberPass = document.createElement('input');
let RememberPassLabel = document.createElement('label');
Pass.innerHTML = `<br><br><br><br><br><br><br><br>Enter Key`;
RememberPass.type = "checkbox";
RememberPass.name = "Remember";
RememberPass.style = `position:relative;`;
RememberPassLabel.for = "Remember";
RememberPassLabel.innerHTML = "Remeber key";
Pass.style =
    `
  font-size:2em;
  display:inline-block;
  background-color:transparent;
  text-align:center;
  font-family:Baloo Paaji;
  color:cyan;
  position:absolute;
  width:100%;
  height:100%;
  top:0%;
  left:0%;
  z-index:9999;
  opacity:1;
  user-select:none;
  `;
inputPass.style = `position:relative;border:none;margin-left:10px;font-family:Baloo Paaji;background-color:white;color:black;`;
inputPass.maxLength="20";
const QnlwYXNzaW5nIHBybw = ["nigger"];//<massive enter keys
for (var i=0;i<QnlwYXNzaW5nIHBybw.length;i++){
if (localStorage.getItem('AutoPassword') == QnlwYXNzaW5nIHBybw[i]) {
    inputPass.style.color = "Cyan";
    inputPass.style.fontFamily = "Baloo Paaji";
    inputPass.value = "Submitting...";
    Login();
}
}
document.onkeydown = function(event) {
    if (event.keyCode == 13) {
         if (inputPass.value.includes(QnlwYXNzaW5nIHBybw[0]) === false&&inputPass.value.includes(QnlwYXNzaW5nIHBybw[1]) === false&&inputPass.value.includes(QnlwYXNzaW5nIHBybw[2]) === false&&inputPass.value.includes(QnlwYXNzaW5nIHBybw[3]) === false&&inputPass.value.includes(QnlwYXNzaW5nIHBybw[4]) === false/**Massive count = count keys*/){
            inputPass.style.color = "red";
            inputPass.value = "Wrong key!";
                     location.reload();
            setTimeout (function(){
                inputPass.value = null;
                inputPass.style.color = null;
            },1000)
        }
            for (var i=0;i<QnlwYXNzaW5nIHBybw.length;i++){
        if (inputPass.value == QnlwYXNzaW5nIHBybw[i]){
            Login();
        }else{
            setTimeout (function(){
                inputPass.value = null;
            },1000)
        }}
            }}
if (localStorage.getItem('Remember') == 'Yes') {
    RememberPass.checked = true;
};
if (localStorage.getItem('Remember') == 'No') {
    RememberPass.checked = false;
};
setInterval(function() {
    for (var i=0;i<QnlwYXNzaW5nIHBybw.length;i++){
        if (RememberPass.checked == true && inputPass.value == QnlwYXNzaW5nIHBybw[i]) {
            localStorage.setItem('AutoPassword', QnlwYXNzaW5nIHBybw[i]);
        }
    }
    if (RememberPass.checked == true) {
        localStorage.setItem('Remember', 'Yes');
    }
    if (RememberPass.checked == false) {
        localStorage.setItem('Remember', 'No');
    };
}, 10)
document.body.appendChild(Pass);
Pass.appendChild(inputPass);
Pass.appendChild(RememberPass);
Pass.appendChild(RememberPassLabel);
//
function Login() {
                    alert("All the textures were loaded successfully! :)");
     setInterval(()=>{ // 444 = lava dragon // 230 = plane // 146 = emerald machine // 19 = reidite sword // 32 = reidite pickaxe // 34 = reidite spear // 39 = reidite hammer // 60 = lava helmet // 63 = lava sword // 82 = pilot // reidite sword = 19 // 81 = turban //
O[44][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/967718946369314817/2.png"; // reidite_helmet
    O[44][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/967718946369314817/2.png";
     O[19][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/967711898470604820/3.png"; // reidite_sword
         O[19][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/967711898470604820/3.png";
               O[146][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/967736187093659669/1.png"; // emerald machine
                      O[146][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/967736187093659669/1.png";
                         O[34][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/967711898030178334/1.png"; //reidite spear
                           O[34][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/967711898030178334/1.png";
                             O[39][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/967711898877456424/1.png"; //reidite hammer
                           O[39][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/967711898877456424/1.png";
                                  O[60][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/968222948248928306/73ccf59a24afe730.png"; //lava helm
                                         O[60][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/968222948248928306/73ccf59a24afe730.png";
                                                O[63][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/968222947699462154/0835d07cca7f4bf7.png"; //lava sword
                                              O[63][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/968222947699462154/0835d07cca7f4bf7.png";
       O[17][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/968222947959533578/8e03b5e1e25188f9.png"; //lava spear
                                              O[17][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/968222947959533578/8e03b5e1e25188f9.png";
                                                              O[82][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/968560712047808642/4.png"; //Pilot hat
                                                                O[82][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/968560712047808642/4.png";
       O[81][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/968560712299454464/3.png"; //Ninja
       O[81][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/968560712299454464/3.png";
                       O[76][1].src = "https://cdn.discordapp.com/attachments/965021405823529040/968563753765437480/2.png"; // reidite shield
                       O[76][0].src = "https://cdn.discordapp.com/attachments/965021405823529040/968563753765437480/2.png";
},500)
setInterval(function(){
$("body").css('cursor', 'url(https://cdn.discordapp.com/attachments/965021405823529040/967711898680311858/spectral_set.png), default'); //just cursor
$("#game_canvas").css('cursor', 'url(https://cdn.discordapp.com/attachments/965021405823529040/967711898680311858/spectral_set.png), default');
$("button").css('cursor', 'url(https://cdn.discordapp.com/attachments/965021405823529040/967711898680311858/spectral_set.png), default');
$("li").css('cursor', 'url(https://cdn.discordapp.com/attachments/965021405823529040/967711898680311858/spectral_set.png), default');
    },10)
    setTimeout (function(){
inputPass.value = "";
Pass.remove();
    },300)
}
