// make table as an array //      
      var z;
      var mytable = [ [0, 1, 2, 3, 4],
                      [5, 6, 7, 8, 9],
                      [10, 11, 12, 13, 14],
                      [15, 16, 17, 18, 19],
                      [20, 21, 22, 23, 24] ];

      function checkmytable(x,y) {
        z = mytable[x][y];    
        var right = z+1; 
        var left = z-1; 
        var top = z-5; 
        var bottom = z+5;
       
if ( z==0 ){checkColor(z);checkColor(right);checkColor(bottom);check();}                       
else if ( z==1 ){checkColor(z);checkColor(left);checkColor(right);checkColor(bottom);check();}
else if ( z==2 ){checkColor(z);checkColor(left);checkColor(right);checkColor(bottom);check();}
else if ( z==3 ){checkColor(z);checkColor(left);checkColor(right);checkColor(bottom);check();}
else if ( z==4 ){checkColor(z);checkColor(left);checkColor(bottom);check();}        
else if ( z==5 ){checkColor(z);checkColor(right);checkColor(top);checkColor(bottom);}
else if ( z==6 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==7 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==8 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==9 ){checkColor(z); checkColor(left); checkColor(bottom); checkColor(top);check();}       
else if ( z==10 ){checkColor(z);checkColor(right);checkColor(top); checkColor(bottom);check();}
else if ( z==11 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==12 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==13 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==14 ){checkColor(z);checkColor(left);checkColor(bottom);checkColor(top);check();}     
else if ( z==15 ){checkColor(z);checkColor(right);checkColor(top); checkColor(bottom);}
else if ( z==16 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==17 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==18 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);checkColor(bottom);check();}
else if ( z==19 ){checkColor(z);checkColor(left);checkColor(bottom); checkColor(top); check();}        
else if ( z==20 ){checkColor(z);checkColor(right);checkColor(top);check();}
else if ( z==21 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);check();}
else if ( z==22 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);check();}
else if ( z==23 ){checkColor(z);checkColor(left);checkColor(right);checkColor(top);check();}
else if ( z==24 ){checkColor(z);checkColor(left);checkColor(top);check();};        
       
    function checkColor(z){
    if ( (document.getElementsByTagName("td")[z].style.backgroundColor !== "black") )
       {  document.getElementsByTagName("td")[z].style.backgroundColor = "black";  }          
       else { document.getElementsByTagName("td")[z].style.backgroundColor = "white";  } }
       
    function checkColor(right){       
    if ( document.getElementsByTagName("td")[right].style.backgroundColor !== "black" )
       { document.getElementsByTagName("td")[right].style.backgroundColor = "black";  }
    else { document.getElementsByTagName("td")[right].style.backgroundColor = "white"; } }
         
    function checkColor(left){       
    if ( document.getElementsByTagName("td")[left].style.backgroundColor !== "black" )
       { document.getElementsByTagName("td")[left].style.backgroundColor = "black";  }
    else { document.getElementsByTagName("td")[left].style.backgroundColor = "white"; } }
        
    function checkColor(top){       
    if ( document.getElementsByTagName("td")[top].style.backgroundColor !== "black" )
       { document.getElementsByTagName("td")[top].style.backgroundColor = "black";  }
    else { document.getElementsByTagName("td")[top].style.backgroundColor = "white"; } }
       
    function checkColor(bottom){       
    if ( document.getElementsByTagName("td")[bottom].style.backgroundColor !== "black" )
       { document.getElementsByTagName("td")[bottom].style.backgroundColor = "black";  }
    else { document.getElementsByTagName("td")[bottom].style.backgroundColor = "white"; } } }
      
function check() { if (        
          (document.getElementsByTagName("td")[0].style.backgroundColor == "black") && 
          (document.getElementsByTagName("td")[1].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[2].style.backgroundColor == "black") && (document.getElementsByTagName("td")[3].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[4].style.backgroundColor == "black") && 
          (document.getElementsByTagName("td")[5].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[6].style.backgroundColor == "black") && (document.getElementsByTagName("td")[7].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[8].style.backgroundColor == "black") && 
          (document.getElementsByTagName("td")[9].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[10].style.backgroundColor == "black") && (document.getElementsByTagName("td")[11].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[12].style.backgroundColor == "black") && 
          (document.getElementsByTagName("td")[13].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[14].style.backgroundColor == "black") && (document.getElementsByTagName("td")[15].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[16].style.backgroundColor == "black") && 
          (document.getElementsByTagName("td")[17].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[18].style.backgroundColor == "black") && (document.getElementsByTagName("td")[19].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[20].style.backgroundColor == "black") && 
          (document.getElementsByTagName("td")[21].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[22].style.backgroundColor == "black") &&
          (document.getElementsByTagName("td")[23].style.backgroundColor == "black") && 
          (document.getElementsByTagName("td")[24].style.backgroundColor == "black") ) 
          {alert("You har the winner")} };        