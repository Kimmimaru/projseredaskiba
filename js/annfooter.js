function displayText() {
    var text = document.getElementById("text");
    text.style.display = "block";
}

function add() {
    if (document.getElementById("dadname") == undefined) {
        var frm = document.getElementById("frm");
        var f = document.createElement("input");
        f.type = "text";
        f.id = "dadname";
        frm.insertBefore(f, frm[2]);
    }
}
function del() {
    document.getElementById("dadname").remove();
}


function submitFeedback() {
    var feedbackForm = document.getElementById("frm");
    var feedbackRadios = feedbackForm.elements["feedback"];
    var selectedFeedback = null;
    
    for (var i = 0; i < feedbackRadios.length; i++) {
      if (feedbackRadios[i].checked) {
        selectedFeedback = feedbackRadios[i].value;
        break;
      }
    }
    
    if (selectedFeedback !== null) {
      feedbackForm.style.display = "none";
      alert("Дякуємо за відгук!");
    } else {
      alert("Будь ласка, виберіть відгук!");
    }
  }