// gameinit.js

// 1. Create and append the Unity Loader script
var loaderScript = document.createElement('script');
loaderScript.src = 'game/Build/game.loader.js';

// 2. Define what happens AFTER the loader script is loaded
loaderScript.onload = function ()
{
    // This code runs only after game.loader.js has fully executed

    // Mobile Device Check and Viewport Setup
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    {
        gameDivElement.style.display = "none";
        Jumpscare(() =>
        {
            window.location.reload();
        });
    }
    else
    {

        // Initialize the Unity Game
        createUnityInstance(document.querySelector("#unity-canvas"), {
            arguments: [],
            dataUrl: "game/Build/game.data",
            frameworkUrl: "game/Build/game.framework.js",
            codeUrl: "game/Build/game.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "Feugravite",
            productName: "777 Drum Kit Game",
            productVersion: "1.0.0",
            matchWebGLToCanvasSize: true,
            devicePixelRatio: 1,
        }).then((unityInstance) =>
        {
            UnityInstance = unityInstance;
        }).catch(function (error)
        {
            console.error('Error creating Unity instance:', error);
        });
    }
};

// 3. Handle any errors loading the script
loaderScript.onerror = function ()
{
    console.error('Failed to load the Unity loader script: Build/game.loader.js');
};

gameScripts.appendChild(loaderScript);