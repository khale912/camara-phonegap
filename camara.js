// JavaScript Document

var licenseBool = false;
var type = "no_type";
var ic = 'no_image';
var urlForm = "http://www.aktio.co/eltopo/register.php";

function takePhoto() {
  navigator.camera.getPicture(onCameraSuccess, onCameraError, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA
  });
}

function onCameraSuccess(imageData) {
  ic = document.getElementById('imageContainer');
  ic.src = "data:image/jpeg;base64," + imageData;
  document.getElementById('photoBtn').value = 'Retomar foto';
  $("#photoBtn").button('refresh');
}

function onCameraError(e) {
  console.log(e);
  navigator.notification.alert("onCameraError: " + e);
}

function sendInfo() {
  if ($("#license").is(":checked")) {
    licenseBool = true;
  }
  if ($("#homeType").is(":checked")) {
    type = "home";
  } else if ($("#buildingType").is(":checked")) {
    type = "building";
  } else if ($("#mallType").is(":checked")) {
    type = "mall";
  }
  var toSend = {
    "image": ic,
    "position": {
      "latitude": document.getElementById('latitude').value,
      "longitude": document.getElementById('longitude').value
    },
    "license": licenseBool,
    "type": type
  };
  //console.log(toSend);

  $.ajax({
    type: "POST",
    url: urlForm,
    data: toSend
  }).done(function(msg) {
    console.log(JSON.parse(msg));
  });
}