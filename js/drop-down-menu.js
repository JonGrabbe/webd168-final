var coll = document.getElementsByClassName("collapsible");
var contents = document.getElementsByClassName("content");

for (var i = 0; i < coll.length; i++) {
  var val = contents[i];
  coll[i].onclick = function () {
    //   this.classList.toggle("active");
    this.classList.toggle('menu-open');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
