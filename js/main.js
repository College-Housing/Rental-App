$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Continue",
            previous: "Back",
            // finish: 'Submit Form'
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if ( newIndex >= 1 ) {
                $('.steps ul li:first-child a img').attr('src','images/step-1.png');
            } else {
                $('.steps ul li:first-child a img').attr('src','images/step-1-active.png');
            }

            if ( newIndex === 1 ) {
                $('.steps ul li:nth-child(2) a img').attr('src','images/step-2-active.png');
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src','images/step-2.png');
            }

            if ( newIndex === 2 ) {
                $('.steps ul li:nth-child(3) a img').attr('src','images/step-3-active.png');
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src','images/step-3.png');
            }

            if ( newIndex === 3 ) {
                $('.steps ul li:nth-child(4) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(4) a img').attr('src','images/step-4.png');
            }
						if ( newIndex === 4 ) {
                $('.steps ul li:nth-child(5) a img').attr('src','images/step-5-active.png');
                $('.actions ul').addClass('step-5');
            } else {
                $('.steps ul li:nth-child(5) a img').attr('src','images/step-5.png');
                $('.actions ul').removeClass('step-5');
            }

            return true;
        }
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })

    // Create Steps Image
    $('.steps ul li:first-child').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-1-active.png" alt=""> ').append('<span class="step-order"></span>');
    $('.steps ul li:nth-child(2').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-2.png" alt="">').append('<span class="step-order"></span>');
    $('.steps ul li:nth-child(3)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order"></span>');
		$('.steps ul li:nth-child(4)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-4.png" alt="">').append('<span class="step-order"></span>');
    $('.steps ul li:last-child a').append('<img src="images/step-5.png" alt="">').append('<span class="step-order"></span>');
    // Count input
    $(".quantity span").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.hasClass('plus')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });
})


///////////////my function/////////////////////////
var counter = 0;

function moreFields() {
	counter++;
	var newFields = document.getElementById('readroot').cloneNode(true);
	newFields.id = '';
	newFields.style.display = 'block';
	var newField = newFields.childNodes;
	for (var i=0;i<newField.length;i++) {
		var theName = newField[i].name
		if (theName)
			newField[i].name = theName + counter;
			// document.getElementsByClassName('rental-add-count').append(counter)
	}
	var insertHere = document.getElementById('writeroot');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}

// function incrementEntry(count){
//
// }
// window.onload = moreFields;
//////////////////////////////////////////////////////////////////////
// var counter2 = 0;
//
// function moreFields2() {
// 	counter2++;
// 	var newFields = document.getElementById('readroot2').cloneNode(true);
// 	newFields.id = '';
// 	newFields.style.display = 'block';
// 	var newField = newFields.childNodes;
// 	for (var i=0;i<newField.length;i++) {
// 		var theName = newField[i].name
// 		if (theName)
// 			newField[i].name = theName + counter2;
// 			// document.getElementsByClassName('rental-add-count').append(counter)
// 	}
// 	var insertHere = document.getElementById('writeroot2');
// 	insertHere.parentNode.insertBefore(newFields,insertHere);
// }
//
// // function incrementEntry(count){
// //
// // }
// // body.onload = moreFields2;
// window.onload = function() {
// 	moreFields();
// 	moreFields2();
// }
function addEntry2(){
	$("#readroot2:last").clone().appendTo("#writeroot2");
}
function addEntry1(){
	$("#readroot2:last").clone().appendTo("#writeroot");
}
