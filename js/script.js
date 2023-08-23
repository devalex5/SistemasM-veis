const botao = document.getElementsByClassName("botao")[0];
const link = document.getElementsByClassName("link")[0]

function resetar(){
        link.src="https://66.media.tumblr.com/tumblr_mbtmdarRVe1rfjowdo1_500.gif"
        link.style.width = "300px"  
        botao.removeEventListener("click", resetar)
        botao.addEventListener("click", troca)
}

function troca(){
    link.src= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/777e5caa-78ba-40ef-84d3-4b8c9345647d/dalmo2r-d85ee5e0-da10-4639-a24f-e400b73efd9e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3N2U1Y2FhLTc4YmEtNDBlZi04NGQzLTRiOGM5MzQ1NjQ3ZFwvZGFsbW8yci1kODVlZTVlMC1kYTEwLTQ2MzktYTI0Zi1lNDAwYjczZWZkOWUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AFbLqTbQi4fw3QIoL6dSikj77-tVO1_RtZ1goS7iyfs"
    link.style.width = "400PX"
    botao.removeEventListener("click", troca)
    botao.addEventListener("click", resetar)

    
}
botao.addEventListener("click", troca)


