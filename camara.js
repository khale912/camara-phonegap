// JavaScript Document

var licenseBool = false
var type = 'no_type'
var comment = 'no_comment'
var imageData = 'no_image'
var urlForm = 'http://www.aktio.co/eltopo/register.php'

  function takePhoto() {
    navigator.camera.getPicture(onCameraSuccess, onCameraError, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI
    })
  }

  function onCameraSuccess(imageURI) {
    console.log(imageURI)
    ic = document.getElementById('image')
    ic.src = imageURI

    document.getElementById('photoBtn').value = 'Retomar foto'
    $('#photoBtn').button('refresh')
  }

  function onCameraError(e) {
    console.log(e)
    navigator.notification.alert('onCameraError: ' + e)
  }

  function sendInfo() {
    if ($('#license').is(':checked')) {
      licenseBool = true
    } else {
      licenseBool = false
    }
    if ($('#homeType').is(':checked')) {
      type = 'home'
    } else if ($('#buildingType').is(':checked')) {
      type = 'building'
    } else if ($('#mallType').is(':checked')) {
      type = 'mall'
    } else {
      type = 'no_type'
    }

    var c = document.getElementById('canvas')
    c.height = ic.naturalHeight
    c.width = ic.naturalWidth
    var ctx = c.getContext('2d')
    ctx.drawImage(ic, 0, 0)
    imageData = c.toDataURL()

    console.log(imageData)

    var toSend = {
      'image': imageData,
      'position': {
        'latitude': document.getElementById('latitude').value,
        'longitude': document.getElementById('longitude').value
      },
      'license': licenseBool,
      'type': type,
      'comment': document.getElementById('comment').value
    }

    $.ajax({
      type: 'POST',
      url: urlForm,
      data: toSend
    }).done(function(msg) {
      console.log(msg)
    })
  }