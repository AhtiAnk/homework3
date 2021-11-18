/* $(function() {     
 
    $.get("https://api.npoint.io/f521ff02ec59f351a347", function(json_obj) { 
          for (obj of json_obj) { 
      
             let div = $('<div class= "flexbox-item">');
             let head = $('<h3>'); 
             let time = $('<span>').text(obj.create_time);
             let box = $('<div class= "imageBox">');
             let comment = $('<p>').text(obj.post_heading); 
      
             div.append(head); 
             head.append(time);
             head.append('<img src="res/images/profile.png">');
             div.append(box);
             if (obj.image !== ""){
                box.append($('<img/>').attr('src',  'data:image/jpg;base64,' + obj.image));
               }
             div.append(comment);
             div.append('<img class = "like" src="res/images/like.png"></img>'); 
      
             $('.container-1').append(div) 
          } 
      }) 
  }); */

/*Read from JSON file with server*/
/* $(function () {
  $.get("JSON/obj.json", function (json_obj) {
    for (obj of json_obj) {
      let div = $('<div class= "flexbox-item">');
      let head = $("<h3>");
      let time = $("<span>").text(obj.create_time);
      let box = $('<div class= "imageBox">');
      let comment = $("<p>").text(obj.post_heading);

      div.append(head);
      head.append(time);
      head.append('<img src="res/images/profile.png">');
      div.append(box);
      if (obj.image !== "") {
        box.append(
          $("<img/>").attr("src", "data:image/jpg;base64," + obj.image)
        );
      }
      div.append(comment);
      div.append('<img class = "like" src="res/images/like.png"></img>');

      $(".container-1").append(div);
    }
  });
});
 */