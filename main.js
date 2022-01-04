/*=============================================================================
Variables
=============================================================================*/
var nameSave = "Player Name";
var effort = 0, money = 0, fanCount = 0;
var totalEffort = 0, totalMoney = 0, totalFanCount = 0;
var effortRate = 1;
var payRate = 12;
var fanRate = 0;

var beatRate = 3;
var songsWritten = 0, songsRecorded = 0, songsUploaded = 0;
var qwritten = 0, qrecorded = 0;
var updateFanRate = 0;


var play = 60, write = 120, record = 240, upload = 360;
var beat = 600, video = 720, social = 480, show = 840;
function onEffortClicks(){
	effort += effortRate;
	totalEffort += effortRate;
}
function onCollectPay(){
	if(effort >= 60 && effort != 0){
		money += payRate;
		totalMoney += payRate;
		effort -= 60;
	}
}

function nameChange(){
	let name = prompt("Enter Your Stage Name", "New Name");
	nameSave = name;
}


/*=============================================================================
Stats Section
=============================================================================*/

/*=============================================================================
Store Upgrades
=============================================================================*/
var micPrice = 20;
function buyMic(){
	if (money >= micPrice) {
		money -= micPrice;
		micPrice = Math.floor(Math.pow(micPrice, 1.1));
		fanRate = Math.floor(Math.pow(micPrice, 0.2))
	}
}
var softwarePrice = 85;
function buySoftware(){
	if (money >= softwarePrice) {
		money -= softwarePrice;
		softwarePrice = Math.floor(Math.pow(softwarePrice, 1.2));
		fanRate = Math.floor(Math.pow(softwarePrice, 0.4))
	}
}
var clothesPrice = 230;
function buyClothes(){
	if (money >= clothesPrice) {
		money -= clothesPrice;
		clothesPrice = Math.floor(Math.pow(clothesPrice, 1.3));
	}
}
var guitarPrice = 750;
function buyGuitar(){
	if (money >= guitarPrice) {
		money -= guitarPrice;
		guitarPrice = Math.floor(Math.pow(guitarPrice, 1.1));
	}
}
var cameraPrice = 980;
function buyCamera(){
	if (money >= cameraPrice) {
		money -= cameraPrice;
		cameraPrice = Math.floor(Math.pow(cameraPrice, 1.2));
	}
}
var keysPrice = 4080;
function buyKeys(){
	if (money >= keysPrice) {
		money -= keysPrice;
		keysPrice = Math.floor(Math.pow(keysPrice, 1.3));
	}
}
var pcPrice = 20000;
function buyPC(){
	if (money >= pcPrice) {
		money -= pcPrice;
		pcPrice = Math.floor(Math.pow(pcPrice, 1.1));
	}
}
var carPrice = 23000000;
function buyCar(){
	if (money >= carPrice) {
		money -= carPrice;
		carPrice = Math.floor(Math.pow(carPrice, 1.2));
	}
}
var midiPrice = 953000;
function buyMidi(){
	if (money >= midiPrice) {
		money -= midiPrice;
		midiPrice = Math.floor(Math.pow(midiPrice, 1.3));
	}
}
var autotunePrice = 4040400;
function buyAutotune(){
	if (money >= autotunePrice) {
		money -= autotunePrice;
		autotunePrice = Math.floor(Math.pow(autotunePrice, 1.1));
	}
}
var housePrice = 23000000;
function buyHouse(){
	if (money >= housePrice) {
		money -= housePrice;
		housePrice = Math.floor(Math.pow(housePrice, 1.2));
	}
}


/*=============================================================================
Music Events
=============================================================================*/


function onPlay(){
	if(effort >= play){
		effort -= play;
		effortRate += 0.25;
		play = Math.ceil(Math.pow(play, 1.05));
	}
}
function onWrite(){
	if(effort >= write){
		effort -= write;
		effortRate += 1;
		write = Math.ceil(Math.pow(write, 1.05));
		qwritten += 1;
		songsWritten += 1;
	}
}
function onRecord(){
	if(effort >= record){
		effort -= record;
		effortRate += 2;
		record = Math.ceil(Math.pow(record, 1.05));
		qwritten -= 1;
		qrecorded += 1;
		songsRecorded += 1;
	}
}

function onUpload(){
	if(effort >= upload){
		effort -= upload;
		effortRate += 5;
		upload = Math.ceil(Math.pow(upload, 1.05));
		updateFanRate = Math.floor(Math.random() * (fanRate));
		qrecorded -= 1;
		songsUploaded += 1;
	}
}

function onPromote(){
	if(effort >= social){
		effort -= social;
		effortRate -= 10;
		social = Math.ceil(Math.pow(social, 1.05));
		fanCount += (fanCount * 1.5); // change Later to use rand
	}
}

function onProduce(){
	if(effort >= beat){
		effort -= beat;
		effortRate += 15;
		beat = Math.ceil(Math.pow(beat, 1.05));
		fanCount += (fanCount * 1.8); // change Later to use rand
	}
}

function onVideo(){
	if(effort >= video){
		effort -= video;
		effortRate += 25;
		video = Math.floor(Math.pow(video, 1.025));
		fanCount += (fanCount * 2); // change Later to use rand
	}
}

function onTour(){
	if(effort >= show){
		effort -= show;
		effortRate += 50;
		show = Math.floor(Math.pow(show, 1.025));
		fanCount += (fanCount * 2.5); // change Later to use rand
	}
}

/*=============================================================================
Game Data
=============================================================================*/
function saveGame(){
	var saveData = {
		nameSave: nameSave,
		effort: effort,
		totalEffort: totalEffort,
		effortRate: effortRate,
		money: money,
		totalMoney: totalMoney,
		fanCount: fanCount,
		totalFanCount: totalFanCount,
		qwritten: qwritten,
		qrecorded: qrecorded,
		fanRate: fanRate,
		updateFanRate: updateFanRate,

		songsWritten: songsWritten,
		songsRecorded: songsRecorded,
		songsUploaded: songsUploaded,

		micPrice: micPrice,
		softwarePrice: softwarePrice,
		clothesPrice: clothesPrice,
		guitarPrice: guitarPrice,
		cameraPrice: cameraPrice,
		keysPrice: keysPrice,
		pcPrice: pcPrice,
		carPrice: carPrice,
		midiPrice: midiPrice,
		autotunePrice: autotunePrice,
		housePrice: housePrice,

		play: play,
		write: write,
		record: record,
		upload: upload,
		social: social,
		beat: beat,
		video: video,
		show:show
	};
	localStorage.setItem("saveData", JSON.stringify(saveData));
}

function loadGame(){
	var saveData = JSON.parse(localStorage.getItem("saveData"));
	if (typeof saveData.nameSave !== "undefined") nameSave = saveData.nameSave;
	if (typeof saveData.effort !== "undefined") effort = saveData.effort;
	if (typeof saveData.totalEffort !== "undefined") totalEffort = saveData.totalEffort;
	if (typeof saveData.effortRate !== "undefined") effortRate = saveData.effortRate;
	if (typeof saveData.money !== "undefined") money = saveData.money;
	if (typeof saveData.totalMoney !== "undefined") totalMoney = saveData.totalMoney;
	if (typeof saveData.fanCount !== "undefined") fanCount = saveData.fanCount;
	if (typeof saveData.totalFanCount !== "undefined") totalFanCount = saveData.totalFanCount;
	if (typeof saveData.qwritten !== "undefined") qwritten = saveData.qwritten;
	if (typeof saveData.qrecorded !== "undefined")qrecorded = saveData.qrecorded;
	if (typeof saveData.fanRate !== "undefined") fanRate = saveData.fanRate;
	if (typeof saveData.updateFanRate !== "undefined") updateFanRate = saveData.updateFanRate;

	if (typeof saveData.songsWritten !== "undefined") songsWritten = saveData.songsWritten;
	if (typeof saveData.songsRecorded !== "undefined") songsRecorded = saveData.songsRecorded;
	if (typeof saveData.songsUploaded !== "undefined") songsUploaded = saveData.songsUploaded;

	if (typeof saveData.micPrice !== "undefined") micPrice = saveData.micPrice;
	if (typeof saveData.softwarePrice !== "undefined") softwarePrice = saveData.softwarePrice;
	if (typeof saveData.clothesPrice !== "undefined") clothesPrice = saveData.clothesPrice;
	if (typeof saveData.guitarPrice !== "undefined") guitarPrice = saveData.guitarPrice;
	if (typeof saveData.cameraPrice !== "undefined") cameraPrice = saveData.cameraPrice;
	if (typeof saveData.keysPrice !== "undefined") keysPrice = saveData.keysPrice;
	if (typeof saveData.pcPrice !== "undefined") pcPrice = saveData.pcPrice;
	if (typeof saveData.carPrice !== "undefined") carPrice = saveData.carPrice;
	if (typeof saveData.midiPrice !== "undefined") midiPrice = saveData.midiPrice;
	if (typeof saveData.autotunePrice !== "undefined") autotunePrice = saveData.autotunePrice;
	if (typeof saveData.housePrice !== "undefined") housePrice = saveData.housePrice;

	if (typeof saveData.play !== "undefined") play = saveData.play;
	if (typeof saveData.write !== "undefined") write = saveData.write;
	if (typeof saveData.record !== "undefined") record = saveData.record;
	if (typeof saveData.upload !== "undefined") upload = saveData.upload;
	if (typeof saveData.social !== "undefined") social = saveData.social;
	if (typeof saveData.beat !== "undefined") beat = saveData.beat;
	if (typeof saveData.video !== "undefined") video = saveData.video;
	if (typeof saveData.show !== "undefined") show = saveData.show;
}

function resetGame(){
	if (confirm("Are you sure you want to reset your game?")){
		var saveData = {};
		localStorage.setItem("saveData", JSON.stringify(saveData));
		location.reload();
	}
}

window.onload = function(){
	loadGame();
}

/*=============================================================================
Helper Functions
=============================================================================*/
function fanGen(){
	if (fanRate != 0)
		increase = Math.floor(Math.random() * (fanRate));
	if (upload > 360){
		var fanIncr = updateFanRate;
		fanCount += fanIncr;
		totalFanCount += fanIncr;
	}
}

function updateHtmlElements(){
	// Section One
	document.title = `$${totalMoney} Net Worth - Music Artist Sim`;
	document.getElementById('nameText').innerHTML = nameSave;
	document.getElementById('effortTotal').innerHTML = effort;
    document.getElementById('effortStat').innerHTML = totalEffort;
    document.getElementById('moneyTotal').innerHTML = money;
    document.getElementById('moneyStat').innerHTML = totalMoney;
	document.getElementById('fans').innerHTML = fanCount;
	document.getElementById('fansStat').innerHTML = totalFanCount;
	document.getElementById('joy').innerHTML = effortRate;
	document.getElementById('qwritten').innerHTML = qwritten;
	document.getElementById('qrecorded').innerHTML = qrecorded;

	// Stats Section
	document.getElementById('songsWritten').innerHTML = songsWritten;
	document.getElementById('songsRecorded').innerHTML = songsRecorded;
	document.getElementById('songsUploaded').innerHTML = songsUploaded;

	// Prices
	document.getElementById('micPrice').innerHTML = micPrice;
	document.getElementById('softwarePrice').innerHTML = softwarePrice;
	document.getElementById('clothesPrice').innerHTML = clothesPrice;
	document.getElementById('guitarPrice').innerHTML = guitarPrice;
	document.getElementById('cameraPrice').innerHTML = cameraPrice;
	document.getElementById('keysPrice').innerHTML = keysPrice;
	document.getElementById('pcPrice').innerHTML = pcPrice;
	document.getElementById('carPrice').innerHTML = carPrice;
	document.getElementById('midiPrice').innerHTML = midiPrice;
	document.getElementById('autotunePrice').innerHTML = autotunePrice;
	document.getElementById('housePrice').innerHTML = housePrice;
	
	// studio
	document.getElementById('play').innerHTML = play;
	document.getElementById('write').innerHTML = write;
	document.getElementById('record').innerHTML = record;
	document.getElementById('upload').innerHTML = upload;
	document.getElementById('beat').innerHTML = beat;
	document.getElementById('video').innerHTML = video;
	document.getElementById('social').innerHTML = social;
	document.getElementById('show').innerHTML = show;
}

function hideButton(conditional, bttnName){
	if (conditional == true){
		document.getElementById(bttnName).style.opacity='0.6';
		document.getElementById(bttnName).style.cursor='not-allowed';
		document.getElementById(bttnName).setAttribute('disabled', 'disabled');
	} else {
		document.getElementById(bttnName).style.opacity='1';
		document.getElementById(bttnName).style.cursor='pointer';
		document.getElementById(bttnName).removeAttribute('disabled');
	}
}

function checkConditionals(){
	// main section
	hideButton((effort < 60), 'paybtn');
	// store
	hideButton((money < micPrice), 'micBtn');
	hideButton((money < softwarePrice), 'softBtn');
	hideButton((money < clothesPrice), 'cloBtn');
	hideButton((money < guitarPrice), 'guiBtn');
	hideButton((money < cameraPrice), 'camBtn');
	hideButton((money < keysPrice), 'keyBtn');
	hideButton((money < pcPrice), 'pcBtn');
	hideButton((money < carPrice), 'carBtn');
	hideButton((money < midiPrice), 'midBtn');
	hideButton((money < autotunePrice), 'tunBtn');
	hideButton((money < housePrice), 'houBtn');
	// effort upgrades
	hideButton((effort < play), 'playbtn');
	hideButton((effort < write), 'writebtn');
	hideButton(((micPrice < 21) || (qwritten <= 0) || (effort < record)), 'recordbtn');
	hideButton(((softwarePrice < 86) || (micPrice <21) || (qrecorded <= 0) || (effort < upload)), 'uploadbtn');
	hideButton(((softwarePrice < 1000) || (effort < beat)), 'beatbtn');
	hideButton(((cameraPrice < 7000) || (effort < video)), 'videobtn');
	hideButton(((songsUploaded %5 == 0) || (effort < social)), 'socialbtn');
	hideButton(((songsUploaded %12 == 0) || (effort < show)), 'showbtn');
}
/*=============================================================================
Window Loops
=============================================================================*/
// Updating Screen
window.setInterval(function(){
	updateHtmlElements();
	checkConditionals();
}, 1);
// Fans per second
window.setInterval(function(){
	fanGen();
}, 1000);
// Save Loop
window.setInterval(function(){
	saveGame();
}, 10000);