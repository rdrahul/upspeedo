// content.js

let SetSpeed = function ( speed ){
  let v = $('video[id^="video-content-"]') ;
  console.log(v.length);
  for ( let i =0 ;i<v.length;i++){
    v[i].playbackRate = speed;
    console.log("sett");
  }
  
};

chrome.runtime.onMessage.addListener(
    
    function(request, sender, sendResponse) {
   
      switch( request.message){
        
        case "speed_1.75" : SetSpeed( 1.75 ); break;
        case "speed_2" : SetSpeed( 2 ); break;
        case "speed_2.25" :SetSpeed( 2.25 ); break;
        case "speed_2.5" :SetSpeed( 2.5 ); break;
        case "speed_3" :SetSpeed( 3 ); break;

      }
    }
);