
function doWork() {

    var url = 'https://graph.facebook.com/search';
    var searches = ['dogs', 'cats','bees'];

    $.each(searches, function(index, value){
        var parameters = '?q=' + value + '&type=post';

        var resource = url+parameters;

        $('#result').append('<br>' + resource);

        xmlReq = new XMLHttpRequest();
        xmlReq.open('GET',resource,false);
        xmlReq.send();

//        $.ajax({
//            url: resource,
//            type:'GET',
//            dataType:'json',
//            success: function(data) {
//                console.log(data);
//            },
//            error: function(){
//                alert(error);
//            }
//        });

        var response = xmlReq.responseText;

        console.log(response);


    });




}