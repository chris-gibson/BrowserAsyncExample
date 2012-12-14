
function doWork(){

    for(var i = 0; i<20; i++)
    {
        var theWorker = new Worker('js/workToDoTimer.js');
        theWorker.addEventListener('message', function(e){
            console.log("Worker " + e.data.workerNumber + " is " + e.data.status);
        }, false);

        theWorker.postMessage({'workerNumber':i,'status': 10});
    }

}
