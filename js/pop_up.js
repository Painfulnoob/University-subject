function popup() {
	window.open("../pop_up/pop_up.html", "팝업테스트", "width=400, height=300, top=10, left=10");
}
function show_clock(){
	let currentDate = new Date();
	let divClock = document.getElementById('divClock');
	let msg = "현재 시간 : ";
	if(currentDate.getHours()>12){
		msg += "오후";
		msg += currentDate.getHours()-12+"시";
	}
	else {
		msg += "오전";
		msg += currentDate.getHours()+"시";
	}
	
	msg += currentDate.getMinutes()+"분";
	msg += currentDate.getSeconds()+"초";
	divClock.innertext = msg;
	
    if (currentDate.getMinutes()>58) {    //정각 1분전 빨강색 출력
        divClock.style.color="red";
        }
        setTimeout(show_clock, 1000);  //1초마다 갱신
}