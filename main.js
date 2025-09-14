document.addEventListener('click', function playOnFirstClick()
{
    let audio = document.getElementById("song");
    audio.volume = 0.25;
    audio.play();
},
    {
        once: true
    });

document.addEventListener('DOMContentLoaded', function ()
{
    document.addEventListener('contextmenu', function (e)
    {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function (e)
    {
        if (e.key === 'F12')
        {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.key === 'I')
        {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.key === 'J')
        {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.key === 'u')
        {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.key === 'C')
        {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.key === 's')
        {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.key === 'p')
        {
            e.preventDefault();
            return false;
        }
    });
});
let UnityInstance = null;
let codeError = false;
const codeinput = document.getElementById("code-input");
const gameButton = document.getElementById("gameButton");
const sfx = document.getElementById("sfx");
const song = document.getElementById("song");
const inputok = document.getElementById("input-ok");
const mainDivElement = document.getElementById("main-div");
const gameDivElement = document.getElementById("game-div");
const gameScripts = document.getElementById("game-scripts");

codeinput.onkeydown = CheckCode;
inputok.onclick = CheckCode;

gameButton.onclick = LoadGame;
function LoadGame()
{
    UnityInstance?.Quit();
    gameScripts.innerHTML = ``;
    mainDivElement.style.display = "none";
    gameDivElement.style.display = "flex";
    var script = document.createElement('script');
    script.src = 'gameinit.js';
    script.type = 'text/javascript';

    gameScripts.appendChild(script);
}
function GameOver(jumpScare)
{
    if (jumpScare)
    {
        LoadGame();
        gameDivElement.style.display = "none";
        Jumpscare(() =>
        {
            gameDivElement.style.display = "flex";
        });
    }
    else
    {
        window.location.reload();
    }
}
function CheckCode(e)
{
    if (codeError)
    {
        return;
    }
    if (codeinput.value.length > 0 && (!e.key || e.key == "Enter"))
    {
        if (codeinput.value == [+!+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[],
        +!+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[],
        +[],
        +!+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[],
        +!+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[],
        +!+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[],
        +!+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[],
        +!+[]].join(''))
        {
            window.location.href = "https://example.org/";
        }
        else
        {
            Jumpscare();
        }
        codeinput.value = "";
    }
}
function Jumpscare(after = null)
{
    document.body.style.animation = "none";
    document.body.style.backgroundImage = "url('res/img/bg_code.png')";
    codeError = true;

    sfx.play();
    sfx.volume = 0.5;

    setTimeout(() =>
    {
        document.body.style.backgroundImage = null;
        document.body.style.animation = null;
        codeError = false;
        if (after != null)
        {
            after();
        }
    }, 1000);
}