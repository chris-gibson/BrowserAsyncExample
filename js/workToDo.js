
var input;
self.addEventListener('message', function(e){
   input = e.data;

    xmlReq = new XMLHttpRequest();
    xmlReq.open('GET',input.url,false);
    xmlReq.send();
    response = xmlReq.responseText;

    self.postMessage({'datum': response});

//    var seconds = input.status;
//    var workerNumber = input.workerNumber;
//
//    var i = 0;
//    var myInterval = setInterval(function(){
//        i++;
//        self.postMessage({'workerNumber': workerNumber, 'status': i + ' seconds' });
//        if(i>=10)
//        {
//            self.postMessage({'workerNumber': workerNumber, 'status': 'finished'})
//            clearInterval(myInterval);
//        }
//    }, 1000);

},false);