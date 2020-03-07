function test(){
	let xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://ehall.sustech.edu.cn/xhxsfw/sys/xsjwxx/educational/getMyScoreInfo.do", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	xhttp.send("json=json&pageSize=100&pageNumber=1");
	let responseText = xhttp.responseText;
	let data = JSON.parse(responseText);
}
