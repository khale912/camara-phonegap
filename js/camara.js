// JavaScript Document

  function takePhoto() {

    // Este es para probar en local
    //onCameraSuccess("images/test.jpeg");

    navigator.camera.getPicture(onCameraSuccess, onCameraError, {
      quality: 10,
      destinationType: Camera.DestinationType.FILE_URI
    })
  }

  function onCameraSuccess(imageURI) {
    console.log(imageURI)
    ic = document.getElementById('image')
    ic.src = imageURI

    var divBtnGoToForm = document.getElementById('btnGoToForm')
    divBtnGoToForm.innerHTML =  '<a href="#form" id="goToFormBtn" data-role="button" >Lista la foto</a>'
    $('#goToFormBtn').button('refresh')

    document.getElementById('photoBtn').value = 'Retomar foto'
    $('#photoBtn').button('refresh')
  }

  function checkImgData(){
    var c = document.getElementById('canvas')
    c.height = ic.naturalHeight
    c.width = ic.naturalWidth
    var ctx = c.getContext('2d')
    ctx.drawImage(ic, 0, 0, 375, 529)
    imageData = c.toDataURL()

    console.log(imageData)
  }

  function onCameraError(e) {
    console.log(e)
    navigator.notification.alert('onCameraError: ' + e)
  }