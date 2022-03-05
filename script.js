(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "03/07/",
      birthday = dayMonth + yyyy;
  today = mm + "/" + dd + "/" + yyyy;
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    
        const now = new Date().getTime(),
              distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's Drop!";
          document.getElementById("countdown").style.display = "none";
          clearInterval(x);
        }
      }, 0)
  }());
window.onload = function(){
  var anchors = document.getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++){
    anchors[i].setAttribute('target', '_blank');
  }
}
