

/* Bai 1 
    
*/

function getEle(id){
    return document.getElementById(id);
}

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


getEle("b1_btn").addEventListener("click", function(){
    var max = parseInt(getEle("b1_num").value);
    var smalest_num = smallestNum(max);
    getEle("b1_footer").innerHTML = "Số nguyên dương nhỏ nhất:" + smalest_num;
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

getEle("b2_btn").addEventListener("click", function(){
    var x = parseInt(getEle("b2_num_1").value);
    var n = parseInt(getEle("b2_num_2").value);
    var sum = sumSquare(x, n);
    getEle("b2_footer").innerHTML = "Tổng:" + sum;
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

getEle("b3_btn").addEventListener("click", function(){
    var sum = 0;
    var n = parseInt(getEle("b3_num").value);
    sum = factorial(n);
    getEle("b3_footer").innerHTML =  "Tồng giai thừa: "  + sum ;
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
    getEle("b4_footer").innerHTML =  content;
}


getEle("b4_btn").addEventListener("click", function(){
    getEle("b4_footer").innerHTML = "";
    var sum = 0;
    var n = parseInt(getEle("b4_num").value);
    var content = createDiv(n);
    getEle("b4_footer").appendChild(content);
})

getEle("b5_btn").addEventListener("click", function(){
    var num = getEle("b5_num").value * 1;
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
            for(var j=2; j <= haft; j++){
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
    getEle("b5_footer").innerHTML = content;

});


/* 

    Bài tập buổi 7-8
*/
var array = []
getEle("b6_btn").addEventListener("click", function(){
    item = document.createElement("div");
    var num =  getEle("b6_num").value * 1;
    array.push(num);
    item.innerHTML = num;
    item.classList.add("item");
    console.log(item);  
    document.getElementsByClassName("array")[0].appendChild(item);
});

getEle("b7_btn").addEventListener("click", function(){
    var sum =0;
    array.forEach(element => {
        if(element > 0){
            sum += element;
        }
    });
    getEle("b7_content").innerHTML = sum;
});

getEle("b8_btn").addEventListener("click", function(){
    var total =0;
    array.forEach(element => {
        if(element > 0){
            total += 1;
        }
    });
    getEle("b8_content").innerHTML = total;
});


getEle("b9_btn").addEventListener("click", function(){
    var min = array[0];
    for (var i = 1; i < array.length; i++)
        if (array[i] < min ){
            min = array[i];
        }
        getEle("b9_content").innerHTML = min;  
});

getEle("b10_btn").addEventListener("click", function(){
    var stt = 0;
    var min = -1;
    for (var i = 1; i < array.length; i++){
        if(array[i] > 0){
            min = array[i];
            stt = i;
            break;
        }
    }
        
    if (min != -1){
        for(var j = stt; j < array.length; j++){
            if (array[j] > 0 && array[j]  < min){
                min = array[j] ;
            }
        }
        getEle("b10_content").innerHTML = min;  
    }
    else {
        getEle("b10_content").innerHTML = "không có số dương trong mảng";
    }
    
});

getEle("b11_btn").addEventListener("click", function(){
    var lastest_even = -1;
    for (var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            lastest_even = array[i];
        }
    }
   
    getEle("b11_content").innerHTML = lastest_even;
    
    
});

getEle("b12_btn").addEventListener("click", function(){
    // var arr_div = document.getElementByClassName("array");
    document.getElementsByClassName("array")[0].innerHTML = "";
    var num_1 = (getEle("b12_num_1").value) * 1;
    var num_2 = (getEle("b12_num_2").value)  * 1;
    var temp = array[num_1];
    array[num_1] = array[num_2];
    array[num_2] = temp;
    array.forEach(element => {
        item = document.createElement("div");
        item.innerHTML = element;
        item.classList.add("item");
        console.log(item);  
        document.getElementsByClassName("array")[0].appendChild(item);
    });
    
});


getEle("b13_btn").addEventListener("click", function(){
    // var arr_div = document.getElementByClassName("array");
    document.getElementsByClassName("array")[0].innerHTML = "";
    for(var i = 0; i < array.length-1; i++){
        for(var j= i +1; j < array.length; j ++ ){
            if (array[i] > array[j]){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    array.forEach(element => {
        item = document.createElement("div");
        item.innerHTML = element;
        item.classList.add("item");
        // console.log(item);  
        document.getElementsByClassName("array")[0].appendChild(item);
    });
    
});


getEle("b14_btn").addEventListener("click", function(){
    // var arr_div = document.getElementByClassName("array");
    var content = -1;
    
    for(var i = 0; i < array.length; i++){
        if(array[i] < 2){
            continue;
        } 
        if (array[i] == 2){
            content = "2";
            break;
        }
        var haft = array[i] / 2;
        var is_snt = true;
        for(var j=2; j <= haft; j++){
            if (array[i] % j == 0){
                is_snt = false;
                break;
            }
        }
        if(is_snt == true){
            content = array[i]; 
            break;
        }
       
    }
    getEle("b14_content").innerHTML = content;
});  


getEle("b15_btn").addEventListener("click", function(){
    var count = 0;
    array.forEach(element => {
        var temp = element - parseInt(element);
        if (temp !=0){
            count += 1;
        }
    });
    getEle("b15_content").innerHTML = count;
});
   
getEle("b16_btn").addEventListener("click", function(){
    var pos_count = 0;
    var nev_count = 0;
    var content;
    array.forEach(element => {
        if(element > 0){
            pos_count+=1;
        }
        else if (element < 0){
            nev_count+=1;
        }
        
    });
    if(pos_count > nev_count){
        content = "Số Dương nhiều hơn";
    }
    else if(pos_count < nev_count){
        content = "Số Âm nhiều hơn";
    }
    else {
        content = "Số âm và số dương cân bằng"
    }
    getEle("b16_content").innerHTML = content;
})
  

