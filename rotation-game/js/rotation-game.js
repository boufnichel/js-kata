var container = document.createElement("div");
container.id="btns";
container.className="btns";

for (let index = 1; index < 10 ; index++) {
	let mybutton = document.createElement("button");
	
	mybutton.id = "btn" + index;
	if(index == 5){
		mybutton.addEventListener("click", rotate);
	} else {
		mybutton.setAttribute("disabled", true);
	}
	mybutton.innerHTML=index;
	mybutton.className="cbutton";
	
	
	container.appendChild(mybutton);
}

document.body.appendChild(container);

function rotate() {
    [btn1.innerHTML,
     btn2.innerHTML,
     btn3.innerHTML,
     btn4.innerHTML,
     btn6.innerHTML,
     btn7.innerHTML,
     btn8.innerHTML,
     btn9.innerHTML] = [btn4.innerHTML,
         btn1.innerHTML,
         btn2.innerHTML,
         btn7.innerHTML,
         btn3.innerHTML,
         btn8.innerHTML,
         btn9.innerHTML,
         btn6.innerHTML];
}

