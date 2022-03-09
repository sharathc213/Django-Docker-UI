function starti(image) {
  let csf = $("input[name=csrfmiddlewaretoken]").val();
  var data = {
    image: image,
  };
  
  $.ajax({
    headers: { "X-CSRFToken": csf },
    mode: "same-origin", // Do not send CSRF token to another domain.
    beforeSend: function () {
      $(".preloader").css("visibility", "visible");
    },
    url: "/starti",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (data) {
      
      
      if (data.msg == "sucess") {
        alertify.success("Success");
      } else {
        alertify.error("Error");
      }
    },
    complete: function () {
      $(".preloader").css("visibility", "hidden");
    },
  });
}


function deletei(image) {
  let csf = $("input[name=csrfmiddlewaretoken]").val();
  var data = {
    image: image,
  };
  
  $.ajax({
    headers: { "X-CSRFToken": csf },
    mode: "same-origin", // Do not send CSRF token to another domain.
    beforeSend: function () {
      $(".preloader").css("visibility", "visible");
    },
    url: "/deletei",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (data) {
      getimages();
      
      
      if (data.msg == "sucess") {
        alertify.success("Success");
      } else {
        alertify.error("Error");
      }
    },
    complete: function () {
      $(".preloader").css("visibility", "hidden");
    },
  });
}

function stopc(container) {
  let csf = $("input[name=csrfmiddlewaretoken]").val();
  var data = {
    'container': container,
  };
  
  $.ajax({
    headers: { "X-CSRFToken": csf },
    mode: "same-origin", // Do not send CSRF token to another domain.
    beforeSend: function () {
      $(".preloader").css("visibility", "visible");
    },
    url: "/stopc",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (data) {
      getcontainers();
      
      if (data.msg == "sucess") {
        alertify.success("Success");
      } else {
        alertify.error("Error");
      }
    },
    complete: function () {
      $(".preloader").css("visibility", "hidden");
      
    },
  });
}

function deletec(container) {
  let csf = $("input[name=csrfmiddlewaretoken]").val();
  var data = {
    container: container,
  };
  
  $.ajax({
    headers: { "X-CSRFToken": csf },
    mode: "same-origin", // Do not send CSRF token to another domain.
    beforeSend: function () {
      $(".preloader").css("visibility", "visible");
    },
    url: "/deletec",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (data) {
      getcontainers();
      
      if (data.msg == "sucess") {
        alertify.success("Success");
      } else {
        alertify.error("Error");
      }
    },
    complete: function () {
      $(".preloader").css("visibility", "hidden");
    },
  });
}

function startc(container) {
  let csf = $("input[name=csrfmiddlewaretoken]").val();
  var data = {
    'container': container,
  };
  
  $.ajax({
    headers: { "X-CSRFToken": csf },
    mode: "same-origin", // Do not send CSRF token to another domain.
    beforeSend: function () {
      $(".preloader").css("visibility", "visible");
    },
    url: "/startc",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (data) {
      getcontainers();
      if (data.msg == "sucess") {
        alertify.success("Success");
      } else {
        alertify.error("Error");
      }
    },
    complete: function () {
      $(".preloader").css("visibility", "hidden");
    },
  });
};


function getcontainers(){
  console.log("hai");
  $.ajax({
    url: '/getcontainers',
    type: 'GET',
    beforeSend: function () {
      $(".preloader").css("visibility", "visible");
    },
    traditional: true,
    dataType: 'html',
    success: function(data){
      console.log(data);
      $('.containers').html("");
      $('.containers').append(data);
    },
    complete: function () {
      $(".preloader").css("visibility", "hidden");
    },
});   
};



function getimages(){
  $.ajax({
    url: '/getimages',
    type: 'GET',
    beforeSend: function () {
      $(".preloader").css("visibility", "visible");
    },
    traditional: true,
    dataType: 'html',
    success: function(data){
      $('.images').html("");
      $('.images').append(data);
    },
    complete: function () {
      $(".preloader").css("visibility", "hidden");
    },
});   
};

