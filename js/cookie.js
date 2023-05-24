function setCookie(name, value, expiredays) {
	var date = new Date();
	date.setDate(date.getDate() + expiredays);
	document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";
}


function getCookie(name) {
	var cookie = document.cookie;
	console.log("쿠키를 요청합니다.");
	if (cookie != "") {
		var cookie_array = cookie.split("; ");
		for ( var index in cookie_array) {
			var cookie_name = cookie_array[index].split("=");
			
			if (cookie_name[0] =="id") {
				return cookie_name[1];
			}
		}
	}
	return ;
}
function deleteCookie(cookieName){
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);
	document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();	
}
function init(){
	let id = document.querySelector("#floatingInput");
	let check = document.querySelector("#idSaveCheck");
	let get_id = getCookie("id");
	
	if(get_id) {
		id.value = get_id;
		check.checked = true;
	}
	session_check();
	}
function session_set(){
	let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    if (sessionStorage) {
        let en_text = encrypt_text(password.value);
        sessionStorage.setItem("Session_Storage_test", en_text);
		
	}else{
		alert("로컬 스토리지 지원 x");
	}
}