var bulb =0;
function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="on.png.jpg";
        bulb=1;
    }
    else{
        document.getElementById("image").src="off.png.jpg";
        bulb=0;
    }
}