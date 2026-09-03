const explorebutton = 
document.querySelector(".hero button");
explorebutton.addEventListener("click",
    function () {
        document.getElementById("explore").scrollIntoView({
            behavior : "smooth"
        });
    });
    const mapsButton = 
    document.getElementById("mapsButton");
    mapsButton.addEventListener("click",
        function () {
            window.location.href = "maps/maps.html";
        });
        const teamsButton = 
        document.getElementById("teamsButton");
        teamsButton.addEventListener("click",
            function () {
                window.location.href = "teams/team.html";
            });
    const weaponsbutton =
       document.getElementById("weaponsbutton");
       weaponsbutton.addEventListener("click",
           function () {
            window.location.href = "weapons.html";
        });
         const modesbutton =
       document.getElementById("modesbutton");
       modesbutton.addEventListener("click",
           function () {
            window.location.href = "gamemode.html";
        });
       
   
