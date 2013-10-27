// JavaScript Document


function takePhoto() {
  navigator.camera.getPicture(onCameraSuccess, onCameraError, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
  });
}

function onCameraSuccess(imageURL) {
  //Get a handle to the image container div
  ic = document.getElementById('imageContainer');
  //Then write an image tag out to the div using the
  //URL we received from the camera application. 
  ic.innerHTML = '<img src="' + imageURL + '" width="100%" />';
  msg = document.getElementById('mensaje');
  msg.innerHTML = '';
  document.getElementById('photoBtn').value = 'Retomar foto';
  $("#photoBtn").button('refresh');
}

function onCameraError(e) {
  console.log(e);
  navigator.notification.alert("onCameraError: " + e);
}