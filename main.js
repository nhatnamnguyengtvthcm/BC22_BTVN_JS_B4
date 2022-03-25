

/* Bai 1 
    
*/


function smallestNum(max) {
    var smalest_num;
    var sum = 0;
    for (var i = 1; i < max; i ++){
        sum += i;
        if (sum >= max){
            smalest_num = i;
            break;
        }
    }
    return smalest_num;
}


document.getElementById("b1_btn").addEventListener("click", function(){
    var max = parseInt(document.getElementById("b1_num").value);
    var smalest_num = smallestNum(max);
    document.getElementById("b1_footer").innerHTML = "Số nguyên dương nhỏ nhất:" + smalest_num;
});


/* Bai 2
    
*/

function sumSquare(x, n){
    var sum = 0;
    for (var i = 1; i <= n; i ++){
        sum += Math.pow(x,i);
    }
    return sum;
}

document.getElementById("b2_btn").addEventListener("click", function(){
    var x = parseInt(document.getElementById("b2_num_1").value);
    var n = parseInt(document.getElementById("b2_num_2").value);
    var sum = sumSquare(x, n);
    document.getElementById("b2_footer").innerHTML = "Tổng:" + sum;
})

/* Bai 3
    
*/


function factorial(n){
    var sum = 1;
    for(var i = 1; i <= n; i ++){
        sum = sum * i;
    }
    return sum;
}

document.getElementById("b3_btn").addEventListener("click", function(){
    var sum = 0;
    var n = parseInt(document.getElementById("b3_num").value);
    sum = factorial(n);
    document.getElementById("b3_footer").innerHTML =  "Tồng giai thừa: "  + sum ;
})



/* Bai 4
    
*/


function createDiv(n){
    var content=document.createElement("div");
    
    for( var i = 0; i<n; i ++){
        var tag = document.createElement("div");
        var text = document.createTextNode("Thẻ div thứ: " + i);
        tag.appendChild(text);
        if(i%2 == 0){
            tag.style.backgroundColor = "red";
        }
        else{
            tag.style.backgroundColor = "blue";
        }
        content.appendChild(tag);
    }
    return content;
    document.getElementById("b4_footer").innerHTML =  content;
}


document.getElementById("b4_btn").addEventListener("click", function(){
    document.getElementById("b4_footer").innerHTML = "";
    var sum = 0;
    var n = parseInt(document.getElementById("b4_num").value);
    var content = createDiv(n);
    document.getElementById("b4_footer").appendChild(content);
})

document.getElementById("b5_btn").addEventListener("click", function(){
    var num = document.getElementById("b5_num").value * 1;
    var content = "";
    if (num < 2) {
        content = "khong có số nguyên tố nhỏ hơn 2";
    
    }
    else if (num == 2){
        content = "2";
    }
    else {
        for(var i=3; i < num;i++){
            var haft = i / 2;
            var is_snt = true;
            for(var j=2; j < haft; j++){
                if (i % j == 0){
                    is_snt = false; 
                    break;
                    
                }
               
            }
            if (is_snt == true){
                var temp = i + ";";
                content += temp;
            }
            
        }
    
    }
    document.getElementById("b5_footer").innerHTML = content;

})