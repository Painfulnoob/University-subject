function session_set() {
  let id = document.querySelector("#floatingInput");
  let password = document.querySelector("#floatingPassword");
  let random = new Date();

  const obj = {
    id: id.value,
    otp: random,
  };

  if (sessionStorage) {
    const objString = JSON.stringify(obj);
    let en_text = encrypt_text(objString);
    sessionStorage.setItem("Session_Storage_test", objString);
    sessionStorage.setItem("Session_Storage_encrypted", en_text);
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function session_get() {
  if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_encrypted");
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function session_check() {
  if (sessionStorage.getItem("Session_Storage_test")) {
    alert("이미 로그인 되었습니다.");
    location.href = 'index_login.html';
  }
}

function session_del() {
  if (sessionStorage) {
    sessionStorage.removeItem("Session_Storage_test");
    alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function session_join_set() {
  let f_name = document.querySelector("#firstName").value;
  let l_name = document.querySelector("#lastName").value;
  let b_day = document.querySelector("#birthdayDate").value;
  let gender = document.querySelector("#inlineRadioOptions");
  let email = document.querySelector("#emailAddress").value;
  let p_number = document.querySelector("#phoneNumber").value;
  let class_check = document.querySelector(".select form-control-lg");
  let random = new Date();

  const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
  console.log(newSignUp.fullName); // John Doe
  console.log(newSignUp.contactInfo); // johndoe@email.com 123-456-7890

  if (sessionStorage) {
    const objString = JSON.stringify(newSignUp); // 객체 -> JSON 문자열 변환
    let en_text = encrypt_text(objString); // 암호화
    sessionStorage.setItem("Session_Storage_object", objString);
    sessionStorage.setItem("Session_Storage_encrypted", en_text);
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function createSession() {
  let id = document.querySelector("#floatingInput");
  let password = document.querySelector("#floatingPassword");
  let random = new Date();

  const obj = {
    id: id.value,
    otp: random,
  };

  if (sessionStorage) {
    const objString = JSON.stringify(obj);
    let en_text = encrypt_text(objString);
    sessionStorage.setItem("Session_Storage_test", en_text);
  } else {
    alert("세션 스토리지 지원 x");
  }
}

function getSession() {
  if (sessionStorage) {
    let en_text = sessionStorage.getItem("Session_Storage_test");
    let objString = decrypt_text(en_text);
    return JSON.parse(objString);
  } else {
    alert("세션 스토리지 지원 x");
    return null;
  }
}

function checkLoginTime() {
  let sessionData = getSession();
  if (sessionData) {
    let loginTime = new Date(sessionData.otp);
    let currentTime = new Date();
    let sessionTimeout = 5 * 60 * 1000; // 5분을 밀리초로 변환
    if (currentTime - loginTime > sessionTimeout) {
      // 로그인 시간이 지났을 경우
      logout();
    } else {
      // 로그인 시간 유지 중
      // 추가적인 작업을 수행하거나 필요한 로직을 구현할 수 있습니다.
    }
  } else {
    // 세션 데이터가 없는 경우 (비로그인 상태)
    // 로그인 페이지로 이동하거나 필요한 로직을 구현할 수 있습니다.
  }
}

// 페이지 로드 시 로그인 시간 체크 수행
window.onload = checkLoginTime;

function session_join_get() {
  if (sessionStorage) {
    const objString = sessionStorage.getItem("Session_Storage_object");
    if (objString) {
      const de_text = decrypt_text(objString); // 복호화
      const obj = JSON.parse(de_text); // JSON 문자열 -> 객체 변환
      console.log(obj);
    } else {
      console.log("세션 스토리지에 가입 정보가 없습니다.");
    }
  } else {
    console.log("세션 스토리지를 지원하지 않습니다.");
  }
}
