const section = document.querySelectorAll("section");
const pointBtn = document.querySelectorAll(".pointWrap li");
const totalNum = section.length;
let pageNum = 0;

for (let i = 0; i < pointBtn.length; i++) {
	console.log(i);
	pointBtn[i].onclick = function () {
		pageNum = i;
		pageChangeFunc();

		window.scrollTo({
			top: section[pageNum].offsetTop,
			behavior: "smooth",
		});
	};
}

window.addEventListener("scroll", scroll);

function scroll() {
	const scroll = this.scrollY;

	for (let i = 0; i < totalNum; i++) {
		const sectionTop = section[i].offsetTop; // 섹션의 시작
		const sectionBottom =
			section[i].offsetTop + section[i].offsetHeight; //섹션의 마지막
		const windowHeight = window.outerHeight / 1.5; //전체 화면의 반

		if (
			scroll > sectionTop - windowHeight &&
			scroll < sectionBottom - windowHeight
		) {
			pageNum = i;
			break;
		}
	}
	pageChangeFunc();
}

//페이지 변경
function pageChangeFunc() {
	for (var i = 0; i < totalNum; i++) {
		section[i].classList.remove("active");
		pointBtn[i].classList.remove("active");
	}
	section[pageNum].classList.add("active");
	pointBtn[pageNum].classList.add("active");
}

//페이지 로드되면 바로 실행
pageChangeFunc();
