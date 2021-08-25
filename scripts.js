let keys = document.querySelectorAll("div");

for(let i=1;i<15;i++)
{
    keys[i].onclick = function(){
        myAudioElement = new Audio(`notes/${i}.mp3`);

        myAudioElement.addEventListener("canplaythrough", event => {
            myAudioElement.play();
          });
            }
}