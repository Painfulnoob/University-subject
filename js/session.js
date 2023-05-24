function session_set(){
	let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let random = new Date();
	
	const obj = {
		id : id.value,
		otp : random
	}
	
    if (sessionStorage) {
		const objString = JSON.stringify(obj);
        let en_text = encrypt_text(objString);
		sessionStorage.setItem("Session_Storage_test", objString);
        sessionStorage.setItem("Session_Storage_test", en_text);
	} else {
		alert("로컬 스토리지 지원 x");
	}
}
function session_get(){
	if (sessionStorage) {
		return sessionStorage.getItem("Session_Storage_encrypted");
	} else {
		alert("세션 스토리지 지원 x");
	}
}
function session_check(){
	if (sessionStorage.getItem("Session_Storage_test")){
		alert("이미 로그인 되었습니다.");
		location.href='index_login.html';
	}
}
function session_del() {
	if (sessionStorage) {
		sessionStorage.removeItem("Session_Storage_test");
		alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
	} else {
		alert( " 세션 스토리지 지원 x");
	}
}