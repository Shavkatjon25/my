const a1=document.querySelector(".b1");
const a2=document.querySelector(".b2");
const a3=document.querySelector(".b3");
const a4=document.querySelector(".b4");
const a5=document.querySelector(".b5");
const a6=document.querySelector(".b6");
function not(){
    a1.style.display="none";
    a1.children[0].style.display="none";
    a1.children[1].style.display="none";
    a1.children[2].style.display="none";
    a2.style.display="none";
    a2.children[0].style.display="none";
    a2.children[1].style.display="none";
    a2.children[2].style.display="none";
    a3.style.display="none";
    a3.children[0].style.display="none";
    a3.children[1].style.display="none";
    a3.children[2].style.display="none";
    a4.style.display="none";
    a4.children[0].style.display="none";
    a4.children[1].style.display="none";
    a4.children[2].style.display="none";
    a5.style.display="none";
    a5.children[0].style.display="none";
    a5.children[1].style.display="none";
    a5.children[2].style.display="none";
    a6.style.display="none";
    a6.children[0].style.display="none";
    a6.children[1].style.display="none";
    a6.children[2].style.display="none";
}
not();
const savol1=document.getElementById("savo1");
function nt(){
    not();
    a1.style.display="block "
    savol1.style.display="block"
}
const savol=document.querySelector(".savol");
savol.addEventListener("click", function(){nt()})
const boshlash=document.querySelector(".bosh");
boshlash.addEventListener("click", function(){
    const arr=["Dushanba", "Seshanba","Chorshanba","Payshanba","Juma","Shanba","Yakshanba"]
    const kun=prompt("Kunni kiriting");
    const domEl=document.getElementById("javob");
    domEl.textContent=arr[kun-1];
})
const co1=document.getElementById("kod1");
co1.style.display="none";
const cod2=document.querySelector(".kod");
cod2.addEventListener("click", function(){
    not();
    co1.style.display="block";
    a1.style.display="block";
})
const bow=document.querySelector(".bosh");
bow.addEventListener("click",function(){
    not();
    const javob1=document.getElementById("javob");
    javob1.style.display="block";
    a1.style.display="block";
})
const savol2=document.querySelector(".savol2");
const kod2=document.querySelector(".kod2");
const bosh2=document.querySelector(".bosh2");
const mat=document.getElementById("matn2");
mat.style.display="none"
savol2.addEventListener("click", function(){
    not();
    mat.style.display="block";
    a2.style.display="block";
})

const bow2=document.querySelector(".bosh2");
bow2.addEventListener("click", function(){
    const javob2=document.querySelector(".javob2");
    not();
    a2.style.display="block";
    javob2.style.display="block";
    javob2.textContent="";
    let narx=prompt("Narxni kiriting");
    for(let i=1;i<=10;i++){
        javob2.textContent=javob2.textContent+narx*i*0.1+";   ";
    }
})
kod2.addEventListener("click", function(){
    not();
    a2.style.display="block";
    const co2=document.getElementById("co4");
    co2.style.display="block"
})

const savol3=document.querySelector(".savol3");
savol3.addEventListener("click", function(){
    not();
    a3.style.display="block";
    a3.children[0].style.display="block";
})
const kod3=document.querySelector(".kod3");
kod3.addEventListener("click", function(){
    not();
    a3.style.display="block";
    a3.children[1].style.display="block";
})
const javob3=document.querySelector(".bosh3")
javob3.addEventListener("click", function(){
    not();
    a3.style.display="block";
    a3.children[2].style.display="block";
    let arrSoni=prompt("Massiv elementlar soni");
    let arr=[];
    for(let i=1;i<=arrSoni;i++){
        let tf=true;
        let element=prompt(i+"-element");
        for(let j=0;j < arr.length;j++){
            if(arr[j]==element){tf=false}
        }
        if(!tf){continue;}
        arr.push(element);
    }

    a3.children[2].textContent=arr.length;

})



//4
const savol4=document.querySelector(".savol4");
savol4.addEventListener("click", function(){
    not();
    a4.style.display="block";
    a4.children[0].style.display="block";
})
const kod4=document.querySelector(".kod4");
kod4.addEventListener("click", function(){
    not();
    a4.style.display="block";
    a4.children[1].style.display="block";
})
const javob4=document.querySelector(".bosh4")
javob4.addEventListener("click", function(){
    not();
    a4.style.display="block";
    a4.children[2].style.display="block";
    

})







// //5
const savol5=document.querySelector(".savol5");
savol5.addEventListener("click", function(){
    not();
    a5.style.display="block";
    a5.children[0].style.display="block";
})
const kod5=document.querySelector(".kod5");
kod5.addEventListener("click", function(){
    not();
    a5.style.display="block";
    a5.children[1].style.display="block";
})
const javob5=document.querySelector(".bosh5")
javob5.addEventListener("click", function(){
    not();
    a5.style.display="block";
    a5.children[2].style.display="block";
    let aylanaSoni=prompt("Aylanalar sonini kiriting: ");
    let uzunlik=[];
    for(let i=0;i<aylanaSoni;i++){
        let radyus=prompt(i+1+"-aylana radyusi:");
        uzunlik.push(2*radyus*Math.PI);
    }
    a5.children[2].textContent="";
    for(let i=0;i<aylanaSoni;i++){
       a5.children[2].textContent+=i+1+"-aylana uzunligi: "+uzunlik[i].toFixed(2)+";    "; 
    }

    

})







// 6
const savol6=document.querySelector(".savol6");
savol6.addEventListener("click", function(){
    not();
    a6.style.display="block";
    a6.children[0].style.display="block";
})
const kod6=document.querySelector(".kod6");
kod6.addEventListener("click", function(){
    not();
    a6.style.display="block";
    a6.children[1].style.display="block";
})
const javob6=document.querySelector(".bos6")
javob6.addEventListener("click", function(){
     not();
    a6.style.display="block";
    a6.children[2].style.display="block";
     let mtn=prompt("Qavslarga o'ralgan matnni kiriting:");
    let qavs1=[];
    qavs1=mtn.split("(");
    let qavs2=[];
    qavs2=mtn.split(")");
    let qavs3=[];
    qavs3=mtn.split("{");
    let qavs4=[];
    qavs4=mtn.split("}");
    let qavs5=[];
    qavs5=mtn.split("[");
    let qavs6=[];
    qavs6=mtn.split("]");
    if(qavs1.length==qavs2.length && qavs3.length==qavs4.length && qavs5.length==qavs6.length){a6.children[2].textContent=0;}
    else{a6.children[2].textContent=-1;}
    
})







