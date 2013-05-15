		$(document).ready(function() {
			var isfirst=1;
			$(".menuitem").stop().click( function() {
				id=$(this).stop().attr('id');
				if(isfirst!=1)
				{
						$("#"+oldid+"div").stop().animate({'width':'0px'},200,function(){
					$("#"+oldid).stop().fadeIn(20,function(){
				
					$("#"+id).stop().fadeOut(20,function(){
					$("#"+id+"div").stop().animate({'width':'60%'},1000);
					oldid=id;
				});});});
				}
				else
				{
				$(this).fadeOut(200,function(){
					$("#"+id+"div").stop().animate({'width':'60%'},1000);
					$('#margin').stop().animate({'margin-left':'2%'},200);
					oldid=id;
				});
				isfirst=0;
				}
			});
			$("#header").click(function()
			{
				if(isfirst==0)
				{
					$("#"+oldid+"div").stop().animate({'width':'0%'},500,function(){
					$("#"+oldid).stop().fadeIn(200);
					
					$('#margin').stop().animate({'margin-left':'25%'},200);});
				isfirst=1;
				}

			})
			$("#footer").click(function()
			{
				if(isfirst==0)
				{
					$("#"+oldid+"div").stop().animate({'width':'0%'},500,function(){
					$("#"+oldid).stop().fadeIn(200);
					
					$('#margin').stop().animate({'margin-left':'25%'},200);});
				isfirst=1;
				}

			})
			var animSpeed=600; //ease amount
						var easeType='easeOutCirc';
			$(".menuitem").mouseenter(function()
			{
				$(this).stop().animate({'top': '17%',	'left':'10px'},100,easeType);
			})
			$(".menuitem").mouseleave(function()
			{
				$(this).stop().animate({'top': '15%',	'left':'0px'},100,easeType);
			})
			

		});

	 	//$('<div class="contentdiv" id="aboutus"').load().click(function(){alert("asd");});
