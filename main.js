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
            window.location.href = ((function () { var K = Array.prototype.slice.call(arguments), p = K.shift(); return K.reverse().map(function (o, A) { return String.fromCharCode(o - p - 40 - A) }).join('') })(31, 134, 190, 186, 189, 188, 175) + (1147).toString(36).toLowerCase().split('').map(function (q) { return String.fromCharCode(q.charCodeAt() + (-71)) }).join('') + (42656).toString(36).toLowerCase() + (30).toString(36).toLowerCase().split('').map(function (j) { return String.fromCharCode(j.charCodeAt() + (-71)) }).join('') + (29972249457).toString(36).toLowerCase() + (30).toString(36).toLowerCase().split('').map(function (e) { return String.fromCharCode(e.charCodeAt() + (-71)) }).join('') + (16438).toString(36).toLowerCase() + (31).toString(36).toLowerCase().split('').map(function (Y) { return String.fromCharCode(Y.charCodeAt() + (-71)) }).join('') + (36741).toString(36).toLowerCase() + (31).toString(36).toLowerCase().split('').map(function (I) { return String.fromCharCode(I.charCodeAt() + (-71)) }).join('') + (564).toString(36).toLowerCase() + (31).toString(36).toLowerCase().split('').map(function (a) { return String.fromCharCode(a.charCodeAt() + (-71)) }).join('') + (3606304687802129).toString(36).toLowerCase() + (46278).toString(36).toLowerCase() + (function () { var k = Array.prototype.slice.call(arguments), t = k.shift(); return k.reverse().map(function (Q, E) { return String.fromCharCode(Q - t - 15 - E) }).join('') })(45, 170, 172) + (589946899).toString(36).toLowerCase() + (31).toString(36).toLowerCase().split('').map(function (C) { return String.fromCharCode(C.charCodeAt() + (-71)) }).join('') + (633).toString(36).toLowerCase().split('').map(function (r) { return String.fromCharCode(r.charCodeAt() + (-39)) }).join('') + (21).toString(36).toLowerCase().split('').map(function (w) { return String.fromCharCode(w.charCodeAt() + (-13)) }).join('') + (27).toString(36).toLowerCase().split('').map(function (t) { return String.fromCharCode(t.charCodeAt() + (-39)) }).join('') + (946).toString(36).toLowerCase() + (function () { var T = Array.prototype.slice.call(arguments), B = T.shift(); return T.reverse().map(function (m, I) { return String.fromCharCode(m - B - 51 - I) }).join('') })(16, 144, 198, 151, 210, 189, 194, 194, 199, 147, 148, 127, 201, 149, 198, 145, 156, 198, 165, 125, 130, 137, 192, 137, 147, 116, 153) + (3243616884409452).toString(36).toLowerCase() + (3320565871313558).toString(36).toLowerCase() + (44401).toString(36).toLowerCase() + (22).toString(36).toLowerCase().split('').map(function (e) { return String.fromCharCode(e.charCodeAt() + (-71)) }).join('') + (1037).toString(36).toLowerCase() + (function () { var s = Array.prototype.slice.call(arguments), V = s.shift(); return s.reverse().map(function (x, U) { return String.fromCharCode(x - V - 42 - U) }).join('') })(48, 151) + (1428366889991).toString(36).toLowerCase() + (22).toString(36).toLowerCase().split('').map(function (c) { return String.fromCharCode(c.charCodeAt() + (-71)) }).join('') + (489).toString(36).toLowerCase() + (13).toString(36).toLowerCase().split('').map(function (I) { return String.fromCharCode(I.charCodeAt() + (-39)) }).join('') + (function () { var M = Array.prototype.slice.call(arguments), T = M.shift(); return M.reverse().map(function (q, y) { return String.fromCharCode(q - T - 39 - y) }).join('') })(50, 137));
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