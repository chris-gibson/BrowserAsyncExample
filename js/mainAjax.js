
var data;
function doWork() {

    var url = 'https://graph.facebook.com/search';
    var searches = ['dogs', 'cats','bees'];

    $.each(searches, function(index, value){
        var parameters = '?q=' + value + '&type=post';

        var resource = url+parameters;

        $('#result').append('<br>' + resource);


        $.ajax({
            url: resource,
            type:'GET',
            dataType:'json',
            success: function(data) {
                this.data = data;
                console.log(data);
            },
            error: function(){
                alert(error);
            }
        });




    });




}