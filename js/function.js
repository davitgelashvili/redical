$(window).on('load',function(){
	$(".loading").hide();
});
$(document).ready(function(){
	$(".menuburger").toggle(function() {
		$(this).addClass("menuburger_close");
		$(".menubar ul").css("width","100%");
	},function(){
		$(this).removeClass("menuburger_close");
		$(".menubar ul").css("width","0%");
	});

	$("label.label").focusin(function() {
		$(this).addClass("label_active");
	});
	$("label.label").focusout(function() {
		$(this).removeClass("label_active");
	});

	$(".optional > h4").click(function() {
		$(this).hide();
		$(".optional_form").slideToggle("slow");
	});
});
function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
$("#imgInp").change(function() {
  readURL(this);
});


$("form").submit(function(){
	var a1 = $("label.label_in:nth-of-type(1) > input").val();
	var a2 = $("label.label_in:nth-of-type(2) > input").val();
	var a3 = $("label.label_in:nth-of-type(3) > input").val();
	var a6 = $("label.label_in:nth-of-type(6) > input").val();
	if (a1 == null || a1 == '') {
		alert("შეიყვანეთ ყველა ინფორმაცია რაც * არის აღნიშნული!");
	} else if(a2 == null || a2 == '') {
		alert("შეიყვანეთ ყველა ინფორმაცია რაც * არის აღნიშნული!");
	} else if(a3 == null || a3 == '') {
		alert("შეიყვანეთ ყველა ინფორმაცია რაც * არის აღნიშნული!");
	} else if(a6 == null || a6 == '') {
		alert("შეიყვანეთ ყველა ინფორმაცია რაც * არის აღნიშნული!");
	} else{
		console.log(a1 + 
					' / ' + 
					a2 + 
					' / ' + 
					a3 + 
					' / ' + 
					a6);
	}
});