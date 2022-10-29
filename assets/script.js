//text effect
//styling title text
const nama = document.querySelector('header h1');
const huruf = [...nama.textContent].map ( (h) => {
	return `<span>${h}</span>`
	}).join('');

nama.innerHTML = huruf;

//contact
function github(){
		alert('syamsu7');
}
function instagram(){
		alert('@syamsunuryaman');
}
function email(){
		alert('muhamadsyamsu6@gmail.com');
}
function WA(){
		alert('0881023001546');
}
