// JavaScript Document

var licenseBool = false
var type = "no_type"
var comment = "no_comment"
var ic = 'no_image'
var urlForm = "http://www.aktio.co/eltopo/register.php"

function takePhoto() {
  navigator.camera.getPicture(onCameraSuccess, onCameraError, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
  })
}

function onCameraSuccess(imageData) {
  console.log(imageData)
  ic = document.getElementById('imageContainer');
  ic.src = "data:image/jpeg;base64," + imageData;

  document.getElementById('photoBtn').value = 'Retomar foto'
  $("#photoBtn").button('refresh')
}

function onCameraError(e) {
  console.log(e)
  navigator.notification.alert("onCameraError: " + e)
}

function sendInfo() {
  if ($("#license").is(":checked")) {
    licenseBool = true
  }else{
    licenseBool = false
  }
  if ($("#homeType").is(":checked")) {
    type = "home"
  } else if ($("#buildingType").is(":checked")) {
    type = "building"
  } else if ($("#mallType").is(":checked")) {
    type = "mall"
  } else {
    type = "no_type"
  }
  var toSend = {
    "image": ic,
    "position": {
      "latitude": document.getElementById('latitude').value,
      "longitude": document.getElementById('longitude').value
    },
    "license": licenseBool,
    "type": type,
    "comment": document.getElementById('comment').value
  }
  console.log(toSend)

  $.ajax({
    type: "POST",
    url: urlForm,
    data: toSend
  }).done(function(msg) {
    console.log(msg)
  })
}