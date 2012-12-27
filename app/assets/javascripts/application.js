// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery

$(function(){
    var results = $('#results');
    var form = $('form');
    var search = $('input');
    var clear = $('#clear');
    var load = $('#load'); 

    search.on('keyup',function(){
        var $this = $(this);
        var query = $this.val();
        var url = form.attr('action').split('?');
        //alert(query);
        var url_full = url[0] + '?query=' + query;
        //alert(url_full);
        clear.show();
        load.show();

        if(query===''){
            //results.html('<p>Type somthin&rsquo; homey.</p>');
            results.html('').fadeOut();
            load.hide();
        }else{
            $.ajax({
                url: url_full, type: 'get', dataType: 'html',
                processData: false,
                success: function(data){
                    load.hide();
                    results.html($(data).find('#search')).fadeIn();
                    $.getScript('/assets/results.js');
                    //$.getScript('/assets/zeroclipboard.js');
                }
            });
        }
    });
    
    // prevent users from submitting form by hitting enter
    form.on('submit',function(){
        return false;
    });
    
    clear.on('click',function(){
        var $this = $(this);
        search.val('');
        results.html('').fadeOut();
        $this.hide();
    });

});