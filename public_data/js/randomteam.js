var normal_list, hard_list = [];
var nicks;
var nm_list, hd_list, res_list = [];

function listadd(difficulty) {
	if (document.getElementById('nickname').value == ""){
		alert("닉네임을 입력하세요");
	}else{
		$('#playerlist').show();
		$("#list").css('display','block');
		nicks = document.getElementById("nickname").value;
		$("#"+difficulty+"-list").append("<li onclick='$(this).remove(); tcountchk();'><a href='#' title='클릭하여 지우기'>"+nicks+"</a></li>");
		$("#nickname").val("");
	};
};

function tcountchk(){
	var currentVal = parseInt($('input[name='+fieldName+']').val());
	if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name='+fieldName+']').val(currentVal - 1);
    } else {
        // Otherwise put a 0 there
        $('input[name='+fieldName+']').val(0);
    }
}


function start(){
	$('#result').empty();

	res_list = [];
	
	$("#hard-list").children().each(function(){res_list.push($(this).text());});
	$("#normal-list").children().each(function(){res_list.push($(this).text());});
	
	$('#result').append('<thead><tr>');
	for( create = 1; create <= parseInt($('input[name='+fieldName+']').val()); create++ ){
		$('#result').append('<th>'+create+'팀</th>');
	};
	$('#result').append('</tr></thead>');

	for( hd = 0; hd < hard.length; hd++ ){
		res_list.push(randomNICK(hd_list, hd_list));
	};
	for( nm = 0; nm < normal.length; nm++ ){
		res_list.push(randomNICK(nm_list, nm_list));
	};
	let res_table = '<tbody>';
	while(res_list.length != 0){
		res_table += '<tr>';
		for( create = 1; create <= parseInt($('input[name='+fieldName+']').val()); create++ ){
			if (res_list[0] !== undefined){
				res_table += '<td>'+res_list[0]+'</td>';
				res_list.shift()
			}else{
				res_table += '<td></td>';
			};
		};
		res_table += '</tr>';
	};
	res_table += '</tbody>';
	$("#result").append(res_table);
	$('.result').show();
};

function randomNICK(a, c){
	var b = Math.floor(Math.random() * c.length);
	a = c[b];
	c.splice(b, 1);
	if( a == undefined ) a = "";
	return a;
};

jQuery(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
        	if ( currentVal >= $('li').length ){
        		alert("일반목록과 고급목록의 합을 넘을 수 없습니다.");
        	}else{
            	// Increment
            	$('input[name='+fieldName+']').val(currentVal + 1);
        	}
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});






