let SendMessage = function( message ){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message":message});
    });
}

let ripple = function(id){
    // $(id).removeClass("rippleEffect");
    $(id).addClass("rippleEffect");
    setTimeout( () => {
        $(id).removeClass("rippleEffect");
    },600 );

}

$(document).ready(function(){

    
    $('#s1').click( function(){

        ripple("#s1");
        SendMessage("speed_1.75");
        // $('#s1').addClass('rippleEffect'); 
     });
        
    $('#s2').click( function(){        SendMessage("speed_2"); ripple("#s2"); });
    $('#s3').click( function(){        SendMessage("speed_2.25");ripple("#s3");});
    $('#s4').click( function(){        SendMessage("speed_2.5");ripple("#s4");});
    $('#s5').click( function(){        SendMessage("speed_3");ripple("#s5");});
    
});


