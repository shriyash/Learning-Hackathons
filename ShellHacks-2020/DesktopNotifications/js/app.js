function doNotify(){
  console.log("does this work??")
  
  Notification.requestPermission().then(function (result){

    var myNotification = new Notification('Electron Notification', {
      'body': 'Hi, this is a native HTML5 notification',
      'icon': 'http://placekitten.com/g/300/300',
    });
  });
}
