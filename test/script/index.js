import {speak_hello} from './speakHello.js';
import {speak_bye} from './speackGoodbye.js';
var list=["zinb","ayoub","adam","jalal","rocmine","Jihan","jamila","jour","tour"]; 
 
let myVariable; 




 for(let i=0; i<list.length;i++){
    if (list[i].startsWith("j") || list[i].startsWith("J")  ) {
        speak_bye(list[i]); 
        
      } 
      else {
        speak_hello(list[i]);
      }



 }




