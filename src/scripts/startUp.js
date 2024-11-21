function positions(){
    const filter = document.getElementById("filter");
    const logo = document.getElementById("ur_logo").getBoundingClientRect();
    const gameSelect = document.getElementById("gameSelect");
    const fusionCalc = document.getElementById("fusionScreen");

    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const logoHeight = logo.height;
    const logoWidth = logo.width;

    console.log(logoWidth);
    console.log(logoHeight);
    filter.style.top = logoHeight  + "px";
    filter.style.width = logoWidth + "px";
    filter.style.height = screenHeight-logoHeight + "px";

    gameSelect.style.left = logoWidth + "px";
    gameSelect.style.width = screenWidth-logoWidth + "px";
    gameSelect.style.height = logoHeight + "px";

    fusionCalc.style.left = logoWidth + "px";
    fusionCalc.style.top = logoHeight + "px";
    fusionCalc.style.width = screenWidth-logoWidth + "px";
    fusionCalc.style.height = screenHeight-logoHeight + "px";
}