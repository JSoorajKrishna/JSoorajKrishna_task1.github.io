let keys = document.querySelectorAll("div");
let embed = document.querySelector("embed");

for(let i=1;i<15;i++)
{
    keys[i].onclick = function(){
        embed.setAttribute("src",`notes/${i}.mp3`);
    }
}