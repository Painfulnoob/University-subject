document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = [];
var filter_words = ['시발', '병신', '개새끼'];

function search_message(){
	
	let search_str = document.querySelector("#search_txt");
	
	if(search_str.value.length === 0){
		alert("검색어가 비었습니다. 다시 입력해주세요.");
	} else {
		// 필터링
		let lower_case_str = search_str.value.toLowerCase();
		let words = lower_case_str.split(' ');
		let filtered_words = words.filter(word => !filter_words.includes(word));
		let filtered_str = filtered_words.join(' ');

		if (filtered_str.length === 0) {
			alert("검색어에 욕설이 포함되어 있습니다. 다시 입력해주세요.");
			return;
		}

		alert("검색을 수행합니다!");

		search_array.push(filtered_str);

		if (search_array.length > 10) {
			search_array.shift();
		}

		let text = document.getElementById("search_message").innerHTML = search_array.toString();
		document.querySelector("#form_main").submit();
	}
}
