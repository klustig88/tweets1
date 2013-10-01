$(document).ready(function() {

  $('#tweetit').submit(function(e){
    e.preventDefault();
    $('#submit').prop('disabled', true)

    var data = $("#mytweet").serialize();
    console.log(data);
    var url = $(this).attr("action")
    console.log(url);
    $.post(url, data, function(response){
      $('#hi').html(response);
      $('#submit').prop('disabled', false)
    });

  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
