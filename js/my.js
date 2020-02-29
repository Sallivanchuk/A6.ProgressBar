let terpenie = 0;

  $("#button[type=button1]").click(clickButton1);
  $("#button[type=button2]").click(clickButton3);
  $("#button[type=button3]").click(clickButton7);

function clickButton1(){
	if (terpenie < 100) {
		terpenie += 1;
	}
	$("#my-progress-bar").prop("style", "width: " + terpenie + "%");
	$("#my-progress-bar").text(terpenie + "%"); 	
}

function clickButton3(){
	if (terpenie < 98){
		terpenie += 3;
	}else{terpenie = 100
	}	
	$("#my-progress-bar").prop("style", "width: " + terpenie + "%");	
	$("#my-progress-bar").text(terpenie + "%");

}

function clickButton7(){
	if (terpenie < 94){
		terpenie += 7;
	}else{terpenie = 100
	}	
	$("#my-progress-bar").prop("style", "width: " + terpenie + "%");
	$("#my-progress-bar").text(terpenie + "%");
}







