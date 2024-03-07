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


const allergyCheckbox = document.getElementById('allergyCheckbox');
const otherCheckbox = document.getElementById('otherCheckbox');

allergyCheckbox.addEventListener('change', function() {
  if (allergyCheckbox.checked) {
    alert('Дякую за відгук!');
  }
});

otherCheckbox.addEventListener('change', function() {
  if (otherCheckbox.checked) {
    alert('Дякую за відгук!');
  }
});

