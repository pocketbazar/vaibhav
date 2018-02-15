$(function(){
    $('#demo').on('hide.bs.collapse', function () {
        $('#button').html('<span class="glyphicon glyphicon-collapse-down"></span> Product description');
    })
    $('#demo').on('show.bs.collapse', function () {
        $('#button').html('<span class="glyphicon glyphicon-collapse-up"></span> Product description');
    })
})