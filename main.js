window.onload = function() {

    // オブジェクトと変数の準備
    var count_disp = document.getElementById("num-count");
    var count_up_btn = document.getElementById("count-up");
    var count_down_btn = document.getElementById("count-down")
    var count_value = 0;
  
    count_up_btn.onclick = function (){
      count_value += 1;
      count_disp.innerHTML = count_value;
    };

    count_down_btn.onclick = function(){
      count_value -= 1;
      count_disp.innerHTML = count_value; 
    };
};