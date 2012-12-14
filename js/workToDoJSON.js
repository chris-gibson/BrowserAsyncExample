
var input;
self.addEventListener('message', function(e){
   input = e.data;

    xmlReq = new XMLHttpRequest();
    xmlReq.open('GET',input.url,false);
    xmlReq.send();
    response = xmlReq.responseText;

    self.postMessage({'datum': response});

},false);