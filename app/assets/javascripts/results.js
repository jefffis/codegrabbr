$(function(){
	//var more = $('#more');
	var copy = $('.simple');
	var copy_text = $('.copy-info');
	var selected = $('#selected');
	var selected_close = selected.next('span');
	var table = $('.table.extra');
	
	/*more.on('click',function(){
		var $this = $(this);
		$this.parent().next('div').fadeToggle();
	});*/
	
	copy.on('click',function(){
		var $this = $(this);
		var this_copy = $this.find('div').html();
		table.addClass('open');
		$('html,body').animate({scrollTop:0});
		selected.html(this_copy);

		// animate scroll if position fixed is not supported, i.e. iOS 4 and below
		if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) { 
			if(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {  
			    $('html,body').animate({scrollTop: 0});  
			} else if(/CPU like Mac OS X/i.test(navigator.userAgent)) {
			    $('html,body').animate({scrollTop: 0});
			} else {
			    //nada
			}
		}

	});
	
	selected_close.on('click',function(){
		table.removeClass('open');
	});

	// copyness
	/*ZeroClipboard.setMoviePath('/assets/ZeroClipboard.swf');
	var clip = new ZeroClipboard.Client();

	clip.addEventListener('mouseDown', function() {
		var selected = document.getElementById('selected');
		clip.setText(selected.innerHTML);
	});
	
	clip.addEventListener('complete',function(client,text) {
		alert('copied: ' + text);
	});

	clip.glue('selected');*/
});