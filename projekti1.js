//Take current time.
var today = new Date();
var date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
document.getElementById("day").innerHTML = date;

// Hide the item from list.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Create a close button.
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add new item to list
var count = 0;
function newToDo() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputt").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Write something!");
  } else {
    document.getElementById("Ull").appendChild(li);
  }
  document.getElementById("inputt").value = "";
  document.getElementById("Ull").appendChild(li);
  count++;
  document.getElementById("pTotal").innerHTML = count;

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// When clicking a list item add checked.
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
