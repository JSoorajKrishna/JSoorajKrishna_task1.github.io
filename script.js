let keys = document.querySelectorAll("div");
let embed = document.querySelector("embed");
let section = document.querySelector("section");

let clicked = false;

section.onclick = function(){
    clicked = true;
}

for(let i=1;i<17;i++)
{
    keys[i].onclick = function(){
    let nota = keys[i].getAttribute("id");
    if(clicked)
        {if(i==6)
            i=5;
        if(i==14)
            i=13;
        console.log(i);
        embed.setAttribute("src",`notes/${i}.mp3`);
        clicked = false;
        }
    }
}