var content1 = {
	'four' : [
		[
		],
	]
};

$(function(){

	var add_tmp;
	for(var i in content1){
		for(var j in content1[i]){
			$('#template_'+content1[i][j][3]+' .img').attr('src',content1[i][j][1]);
			$('#template_'+content1[i][j][3]+' .img-href').attr('href',content1[i][j][2]);
			$('#template_'+content1[i][j][3]+' .title').attr('href',content1[i][j][2]);
			$('#template_'+content1[i][j][3]+' .title').html(content1[i][j][0]);
		
			add_tmp = $('#template_'+content1[i][j][3]).clone();
			console.log(add_tmp.html());
			add_tmp.css('display','block');
			$('#'+i).append(add_tmp.html());			
		}
	}
})