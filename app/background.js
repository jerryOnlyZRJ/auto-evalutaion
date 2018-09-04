function autoEva() {
	var iframeDoc = window.frames["iframeautoheight"].contentDocument;
	iframeDoc.querySelectorAll("td input").forEach(function(ele) {
		ele.value = 90 + Math.floor(Math.random() * 10);
	});
	iframeDoc.querySelectorAll("[value='95']").forEach(function(ele) {
		ele.selected = "true";
	});
	iframeDoc.querySelectorAll("td textarea").forEach(function(ele) {
		ele.value = "好";
	});
}

document.querySelectorAll('.sub')[2].querySelector('li:nth-child(3)').addEventListener('click', function() {
	setTimeout(autoEva, 1000)
})