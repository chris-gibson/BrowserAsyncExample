
function doWork(){
    var url = 'https://graph.facebook.com/search';
    var searches = ['dogs', 'cats','bees'];

    $.each(searches, function(index, value){
        var parameters = '?q=' + value + '&type=post';

        var theWorker = new Worker('js/workToDoJSON.js');
        theWorker.addEventListener('message', function(e){
            console.log("Data " + e.data.datum);
            $('#result').append('<br>' + resource);
        }, false);

        var resource = url+parameters;

//        console.log(theWorker);
//        console.dir(theWorker);
        theWorker.postMessage({'url': resource});
    });

}
