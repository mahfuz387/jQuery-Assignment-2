$(function(){
       
      $( "#datepicker" ).datepicker(); 
        }) 

$("#password").keyup(function(){

  var pass=$("#password").val();
  if(pass.length<6){$("#smsemail").text("your password is weak");
  $("#smsemail").addClass(".red");

}
else{

  $("#password").removeClass(".red");
  $("#smsemail").text("Your password is strong");
}

 });

 $("#btn").click(function(){
   $("#password").val("");
  $("#username").val("");

 });

 $('.btn-gr').click(function () {
            var password = $("#password").val();
            var username = $("#username").val();
            if (password.length ==0 && username.length ==0){
                alert("please fillup the form");
                
            }
            
            else{
                window.location.href = 'subpage.html';
            }
        });


 
         
        var Txt_remain=50;
         $("span").html(Txt_remain + "<b> character remaining </b>");
 
         $("textarea").keyup(function(){
            var Length=$("textarea").val().length;
            var Remain=Txt_remain - Length;
            $("span").html(Remain + "<b> character remaining </b>");
            if (Length >=51) {
              $("span").html("<b> you can't type anything </b>");
              $("span").css("color","red");
              $("textarea").attr('readonly', 'true');
               
            }
         })
       $(function(){
     
     $("button").click(function(){
        var city_name = $("input").val();
        GoWeather(city_name);
      });
 
      function GoWeather(city_name){
            $.ajax({
         url:"http://api.apixu.com/v1/current.json?key=c3ab9039326a4858b74162720172603&q="+ city_name,

          datatype:"json",
          success:function(data){
           
            $("#city").text(data.location.name);
            $("#country").text(data.location.country);
             $("#temp").text(data.current.temp_c);   
          }
         
         })
      }

           
        }) 
    
       
       