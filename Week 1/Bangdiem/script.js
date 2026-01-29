function calculate() {
  let s1 = parseFloat(document.getElementById("sem1").value);
  let s2 = parseFloat(document.getElementById("sem2").value);
  let year = parseFloat(document.getElementById("year").value);

    let resultText = document.getElementById("result-text");
  if (isNaN(s1) || isNaN(s2)) {
    alert("Vui lòng nhập điểm hợp lệ!");
    return;
  }

    let average;
    switch (year) { 
        case 1:
            average = (s1 + (s2)) / 3
            average = parseFloat(average)
            document.getElementById('result-text').value = average
            break;
        case 2:
            average = (s1 * 2 + (s2 * 3)) / 5
            average = parseFloat(average)
            document.getElementById('result-text').value = average
            break;
        case 3:
            average = (s1 * 3 + (s2 * 4)) / 7
            average = parseFloat(average)
            document.getElementById('result-text').value = average
            break;
    }
    if (average >= 9) {
        resultText.innerText = "Hoc sinh gioi";
    }
    if(average >= 7 && average < 9){
        resultText.innerText = "Hoc sinh kha";
    }
    if(average >= 5 && average < 7){
        resultText.innerText = "Hoc sinh trung binh";
    }

  document.getElementById("summary").value = average.toString();
}

function cancel() {
  document.getElementById("sem1").value = "";
  document.getElementById("sem2").value = "";
  document.getElementById("year").value = "1";
  document.getElementById("summary").value = "";
  document.getElementById("result-text").innerText = "";
}
