let masCofKramer = [];
let masSvobCofKramer = [];
function GenerCooficientiKramera() {
    //alert("+");
    /*for(let i = 0; i <3; i++) {
        masCofKramer[i] = [];
        for(let j = 0; j <3; j++) {
            masCofKramer[i][j] = Math.floor(Math.random() * 11);
        }
        masSvobCofKramer[i] = masCofKramer[i][0] + masCofKramer[i][1] + masCofKramer[i][2]
    }*/
    /*for(let i = 0; i <3; i++) {
        masSvobCofKramer[i] = Math.floor(Math.random() * 11);
    }*/
    //=========================
    masCofKramer[0] = [];
    masCofKramer[0][0]=1;
    masCofKramer[0][1]=2;
    masCofKramer[0][2]=3;
    
    masCofKramer[1] = [];
    masCofKramer[1][0]=1;
    masCofKramer[1][1]=1;
    masCofKramer[1][2]=1;
    
    masCofKramer[2] = [];
    masCofKramer[2][0]=1;
    masCofKramer[2][1]=2;
    masCofKramer[2][2]=-1;
    
    masSvobCofKramer[0]=14;
    masSvobCofKramer[1]=6;
    masSvobCofKramer[2]=2;
    //==========================
    let D = ((masCofKramer[0][0] * masCofKramer[1][1] * masCofKramer[2][2]) + (masCofKramer[0][1] * masCofKramer[1][2] * masCofKramer[2][0]) + (masCofKramer[1][0] * masCofKramer[0][2] * masCofKramer[2][1])) - ((masCofKramer[0][2] * masCofKramer[1][1] * masCofKramer[2][0]) + (masCofKramer[0][0] * masCofKramer[1][2] * masCofKramer[2][1]) + (masCofKramer[1][0] * masCofKramer[0][1] * masCofKramer[2][2]))
    
    let Dx = ((masSvobCofKramer[0] * masCofKramer[1][1] * masCofKramer[2][2]) + (masCofKramer[0][1] * masCofKramer[1][2] * masSvobCofKramer[2]) + (masSvobCofKramer[1] * masCofKramer[0][2] * masCofKramer[2][1])) - ((masCofKramer[0][2] * masCofKramer[1][1] * masSvobCofKramer[2]) + (masSvobCofKramer[0] * masCofKramer[1][2] * masCofKramer[2][1]) + (masSvobCofKramer[1] * masCofKramer[0][1] * masCofKramer[2][2]))
    
    let Dy = ((masCofKramer[0][0] * masSvobCofKramer[1] * masCofKramer[2][2]) + (masSvobCofKramer[0] * masCofKramer[1][2] * masCofKramer[2][0]) + (masCofKramer[1][0] * masCofKramer[0][2] * masSvobCofKramer[2])) - ((masCofKramer[0][2] * masSvobCofKramer[1] * masCofKramer[2][0]) + (masCofKramer[0][0] * masCofKramer[1][2] * masSvobCofKramer[2]) + (masCofKramer[1][0] * masSvobCofKramer[0] * masCofKramer[2][2]))
    
    let Dz = ((masCofKramer[0][0] * masCofKramer[1][1] * masSvobCofKramer[2]) + (masCofKramer[0][1] * masSvobCofKramer[1] * masCofKramer[2][0]) + (masCofKramer[1][0] * masSvobCofKramer[0] * masCofKramer[2][1])) - ((masSvobCofKramer[0] * masCofKramer[1][1] * masCofKramer[2][0]) + (masCofKramer[0][0] * masSvobCofKramer[1] * masCofKramer[2][1]) + (masCofKramer[1][0] * masCofKramer[0][1] * masSvobCofKramer[2]))
    
    let x = Dx/D;
    let y = Dy/D;
    let z = Dz/D;
    
    if (D == 0) {
        alert("D = " + D + " (Система имеет бесконечно много решений или несовместна (не имеет решений). В этом случае правило Крамера не поможет, нужно использовать метод Гаусса.)");
    }
    else{
        alert("+");
        //alert("D: " + D);
        //alert("Dx: " + Dx);
        //alert("Dy: " + Dy);
        //alert("Dz: " + Dz);
        //alert("x: " + x);
        //alert("y: " + y);
        //alert("z: " + z);
        //alert("masCofKramer: " + masCofKramer);
        //alert("masSvobCofKramer:" + masSvobCofKramer);
    }
}

function Reshenie() {
    //alert("++");
    let mas_0_0 = document.getElementById("input0_0");
    mas_0_0.value = masCofKramer[0][0];
    let mas_0_0 = document.getElementById("input0_1");
    mas_0_0.value = masCofKramer[0][1];
    let mas_0_0 = document.getElementById("input0_2");
    mas_0_0.value = masCofKramer[0][2];
}

let mas = [];
let td_main;
function myKlick1() {
    //td_main.innerHTML="";
    //переменные для массива
    let x = 0;
    z4g.innerHTML="";
    td_main = document.createElement("td");
    //z4g.appendChild(td_main);
    for(let i = 0; i <10; i++) {
        mas[i] = [];
        let trr = document.createElement("tr");
        trr.setAttribute("id", String(i));
        //z4g.appendChild(trr);
        td_main.appendChild(trr);
        //alert(getC)
        
        for(let j = 0; j <10; j++) {
            let tdd = document.createElement("td");
            tdd.setAttribute("id", String(j));
            //trr.append(tdd);
            mas[i][j] = Math.floor(Math.random() * 11);
            let child_input = document.createElement("input");
            //tdd.append(child_input);
            child_input.setAttribute("size", "5")
            child_input.setAttribute("id", String(x))
            //child_input.value = i + ", " + j;
            //child_input.value = child_input.getAttribute("id");
            child_input.value = mas[i][j];
            //document.getElementById(tdd.id).append(child_input);
            //tdd.append(child_input);
            //trr.append(child_input);
            trr.appendChild(child_input);
            x++;
        }
  }
  
  z4g.appendChild(td_main);
  //myBt_1.append(myInput);
  
  
  //let arr = new Array();
	//arr = [];
  
  /*let z4_g = document.getElementById("z4g");
  
  let parent_div = document.createElement("div");
  parent_div.id = "parent"
  z4_g.appendChild(parent_div);

  let x = 0;
  for(let i = 0; i <10; i++) {
    let thh = document.createElement("th");
    thh.setAttribute("id", String(i));
  	for(let j = 0; j <10; j++) {
      let child_input = document.createElement("input");
      child_input.setAttribute("size", "5")
      child_input.setAttribute("id", String(x))
      //child_input.value = i + ", " + j;
      child_input.value = child_input.getAttribute("id");
      document.getElementById(parent_div.id).appendChild(child_input);
      x++;
    }
  }*/
}

function myKlick2() {
    z4g.innerHTML="";
    let k = 0;
    td_main = document.createElement("td");
    //z4g.appendChild(td_main);
    for(let x = 0; x<10;x++){
    for(let i = 0;i<10;i++){
        for(let j = 0; j<10;j++){
            if ( i % 2 == 0){
                if(mas[i][j] < mas[i][j+1]){
                    k = mas[i][j];
                    mas[i][j] = mas[i][j+1];
                    mas[i][j+1] = k;
                }
            }
            else{
                if(mas[i][j] > mas[i][j+1]){
                    k = mas[i][j];
                    mas[i][j] = mas[i][j+1];
                    mas[i][j+1] = k;
                }
            }
        }
    }
    }
    
    
    //alert("+++++");
    for(let i = 0; i <10; i++) {
        //mas[i] = [];
        let trr = document.createElement("tr");
        trr.setAttribute("id", String(i));
        td_main.appendChild(trr);
        //alert("+++++");
        //alert("+++++");
        for(let j = 0; j <10; j++) {
            let tdd = document.createElement("td");
            tdd.setAttribute("id", String(j));
            let child_input = document.createElement("input");
            child_input.setAttribute("size", "5")
            child_input.value = mas[i][j];
            trr.appendChild(child_input);
        }
    }
    z4g.appendChild(td_main);
    
    /*let x = 0;
    z4g.innerHTML="";
    td_main = document.createElement("td");
    //for(let x = 0; x<10;x++){
    for(let i = 0;i<10-1;i++){
        for(let j = 0; j<10-i;j++){
            if ( i % 2 == 0){
                if(mas[i][j] < mas[i][j+1]){
                    k = mas[i][j];
                    mas[i][j] = mas[i][j+1];
                    mas[i][j+1] = k;
                }
            }
            /*else{
                if(mas[i][j] > mas[i][j+1]){
                    k = mas[i][j];
                    mas[i][j] = mas[i][j+1];
                    mas[i][j+1] = k;
                }
            }*/
        //}
    //}
    //}
    /*alert(mas[1][1])
    for(let i = 0; i <10; i++) {
        mas[i] = [];
        let trr = document.createElement("tr");
        trr.setAttribute("id", String(i));
        td_main.appendChild(trr);
        for(let j = 0; j <10; j++) {
            let tdd = document.createElement("td");
            tdd.setAttribute("id", String(j));
            let child_input = document.createElement("input");
            child_input.setAttribute("size", "5")
            child_input.setAttribute("id", String(x))
            child_input.value = mas[i][j];
            trr.appendChild(child_input);
            x++;
        }
  }
  
  z4g.appendChild(td_main);*/
}
            
function myFunctionWindow() {
                let c = 0;
                let j = 0;
                let cells = document.getElementById("z3_1");
                for (let i in window) {
                    cells.append(j + ": " + i + " | ");
                    c = c + 1;
                    if (c < 2) {
                        cells.append("\n");
                        c = 0;
                        j = j + 1;
                    }
                }
            }

function myFunctionDocument() {
                let c = 0;
                let j = 0;
                let cells = document.getElementById("z3_2");
                for (let i in document) {
                    cells.append(j + ": " + i + " | ");
                    c = c + 1;
                    if (c < 2) {
                        cells.append("\n");
                        c = 0;
                        j = j + 1;
                    }
                }
            }

function myFunctionLocation() {
                let c = 0;
                let j = 0;
                let cells = document.getElementById("z3_3");
                for (let i in location) {
                    //let elem = j + ": " + i + " | ";
                    cells.append(j + ": " + i + " | ");
                    //document.write(j + ": " + i + " | ");
                    //document.getElementById("z3").value+=j + ": " + i + " | ";
                    c = c + 1;
                    if (c < 2) {
                        cells.append("\n");
                        c = 0;
                        j = j + 1;
                    }
                }
            }

function myFunctionNavigator() {
                let c = 0;
                let j = 0;
                let cells = document.getElementById("z3_4");
                for (let i in navigator) {
                    //let elem = j + ": " + i + " | ";
                    cells.append(j + ": " + i + " | ");
                    c = c + 1;
                    if (c < 2) {
                        cells.append("\n");
                        c = 0;
                        j = j + 1;
                    }
                }
            }