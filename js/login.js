function login_check() {
  var email = document.querySelector("#floatingInput").value;
  var password = document.querySelector("#floatingPassword").value;

  var emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;

  if (!emailPattern.test(email)) {
    alert("유효한 이메일 형식이 아닙니다.");
    return false; // 유효성 검사 실패 시 false 반환
  }

  if (!passwordPattern.test(password)) {
    alert("유효한 패스워드 형식이 아닙니다.");
    return false; // 유효성 검사 실패 시 false 반환
  }

  return true; // 유효성 검사 통과 시 true 반환
}

function login() {
  // login_check 함수 호출하여 유효성 검사 수행
  if (!login_check()) {
    return; // 유효성 검사 실패 시 함수 종료
  }

  // 유효성 검사 통과 후 로그인 절차 진행
  let form = document.querySelector("#form_main");
  let id = document.querySelector("#floatingInput");
  let password = document.querySelector("#floatingPassword");
  let check = document.querySelector("#idSaveCheck");

  form.action = "../index_login.html";
  form.method = "get";

  if (check.checked == true) {
    alert("쿠키를 저장합니다.");
    setCookie("id", id.value, 1);
    alert("쿠키 값: " + id.value);
  } else {
    setCookie("id", id.value, 0);
  }

  if (id.value.length === 0 || password.value.length === 0) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
  } else {
    session_set();
    form.submit();
  }
}
function logout() {
  session_del();
  location.href = '../index.html';
}

function get_id() {
  if (true) {
    decrypt_text();
  } else {
    var getParameters = function (paramName) {
      var returnValue;
      var url = location.href;
      var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
      for (var i = 0; i < parameters.length; i++) {
        var varName = parameters[i].split('=')[0];

        if (varName.toUpperCase() == paramName.toUpperCase()) {
          returnValue = parameters[i].split('=')[1];
          return decodeURIComponent(returnValue);
        }
      }
    };
    alert(getParameters('id') + '님 반갑습니다!');
  }
}
// 로그인 횟수 저장 함수
function login_count() {
  // 기존 쿠키의 카운트 값을 얻는다.
  var count = getCookie("login_cnt");

  if (count) {
    // 쿠키 값이 존재하면 값을 증가시킨다.
    count = parseInt(count) + 1;
  } else {
    // 쿠키 값이 존재하지 않으면 초기값을 1로 설정한다.
    count = 1;
  }

  // 쿠키의 값을 +1 업데이트한다.
  setCookie("login_cnt", count, 1);

  // 업데이트된 카운트 값을 출력하거나 사용할 수 있다.
  console.log("로그인 횟수: " + count);
}

// 로그아웃 횟수 저장 함수
function logout_count() {
  // 기존 쿠키의 카운트 값을 얻는다.
  var count = getCookie("logout_cnt");

  if (count) {
    // 쿠키 값이 존재하면 값을 증가시킨다.
    count = parseInt(count) + 1;
  } else {
    // 쿠키 값이 존재하지 않으면 초기값을 1로 설정한다.
    count = 1;
  }

  // 쿠키의 값을 +1 업데이트한다.
  setCookie("logout_cnt", count, 1);

  // 업데이트된 카운트 값을 출력하거나 사용할 수 있다.
  console.log("로그아웃 횟수: " + count);
}

function addJavascript(jsname) {
  var th = document.getElementsByTagName('head')[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', jsname);
  th.appendChild(s);
}

addJavascript('/js/security.js');
addJavascript('/js/session.js');
addJavascript('/js/cookie.js');
