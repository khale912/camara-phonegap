
var licenseBool = false
var type = 'no_type'
var comment = 'no_comment'
var imageData = 'no_image'
var urlForm = 'http://www.aktio.co/eltopo/register.php'

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

  checkImgData()

  var toSend = {
    'image': imageData,
    'position': myPosition,
    'license': licenseBool,
    'type': type,
    'comment': document.getElementById('comment').value
  }

  console.log(toSend)

  $.ajax({
    type: 'POST',
    url: urlForm,
    data: toSend
  }).done(function(msg) {
    console.log(msg)
  })
}