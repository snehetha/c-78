var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var members=["My Family Book","Subanaidu Gangineni","Madhu Babu nalluri","Rithesh","Aashitha nalluri","Mayuri nalluri"];
var i=0;
function next(){
    if(i==6){
        i=0;
    }
    document.getElementById("member").src=images[i];
 document.getElementById("name").innerHTML=members[i];
 i++; 
}