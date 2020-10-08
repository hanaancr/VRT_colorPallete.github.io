$( document ).ready(function() {    
    const numberOfPaletteColors = 5;

    $( "#generate_palette" ).click(function() {        
        setPalette(randomPalette(numberOfPaletteColors));        
    });    
    
    $( "#clear_palette" ).click(function() {        
        clearPalette();        
    });        
});

function randomPalette(numberOfPaletteColors){
    const maxHSB = 359;
    const numberOfHSBColors = 360;
    var randomNumber = Math.floor(Math.random() * maxHSB);
    var integerHueValues = new Array();    
    var hueValues = new Array();    

    integerHueValues[0] = randomNumber;
    hueValues[0] = randomNumber/maxHSB;

    for (i=1;i < numberOfPaletteColors;i++) {
        integerHueValues[i] = integerHueValues[i-1] + (numberOfHSBColors/numberOfPaletteColors);

        if (integerHueValues[i] > maxHSB) {
            integerHueValues[i] = integerHueValues[i] - maxHSB;
        }

        hueValues[i] = integerHueValues[i] / maxHSB;
    }

    console.log(integerHueValues);
    
    return hueValues;
}

function setPalette(hueValues) {
    const saturation = 0.5;
    const value = 0.5;

    var rgbColor1 = hsvToRgb(hueValues[0], saturation, value);
    var rgbColor2 = hsvToRgb(hueValues[1], saturation, value);
    var rgbColor3 = hsvToRgb(hueValues[2], saturation, value);
    var rgbColor4 = hsvToRgb(hueValues[3], saturation, value);
    var rgbColor5 = hsvToRgb(hueValues[4], saturation, value);    

    $( "#color1" ).css("background-color", "rgb(" + rgbColor1[0] + "," + rgbColor1[1] + "," + rgbColor1[2] + ")");    
    $( "#color2" ).css("background-color", "rgb(" + rgbColor2[0] + "," + rgbColor2[1] + "," + rgbColor2[2] + ")");
    $( "#color3" ).css("background-color", "rgb(" + rgbColor3[0] + "," + rgbColor3[1] + "," + rgbColor3[2] + ")");
    $( "#color4" ).css("background-color", "rgb(" + rgbColor4[0] + "," + rgbColor4[1] + "," + rgbColor4[2] + ")");
    $( "#color5" ).css("background-color", "rgb(" + rgbColor5[0] + "," + rgbColor5[1] + "," + rgbColor5[2] + ")");        

    $("textarea#css-rules").val(
        ".website-background{ color: "+ rgbToHex(rgbColor1) + ";}" + "\n" + "\n" +
        ".element-text{ color: "+ rgbToHex(rgbColor2) + ";}" + "\n" + "\n" +
        ".element-border{ color: "+ rgbToHex(rgbColor3) + ";}" + "\n" + "\n" +
        ".element-background{ color: "+ rgbToHex(rgbColor4) + ";}" + "\n" + "\n" +
        ".header{ color: "+ rgbToHex(rgbColor5) + ";}"                 
    );
}

function clearPalette() {
    $( "#color1" ).css("background-color", "rgb(255, 255, 255)");    
    $( "#color2" ).css("background-color", "rgb(255, 255, 255)");
    $( "#color3" ).css("background-color", "rgb(255, 255, 255)");
    $( "#color4" ).css("background-color", "rgb(255, 255, 255)");
    $( "#color5" ).css("background-color", "rgb(255, 255, 255)");        

    $("textarea#css-rules").val(
        ".website-background{ color: "+ "#FFFFFF" + ";}" + "\n" + "\n" +
        ".element-text{ color: "+ "#FFFFFF" + ";}" + "\n" + "\n" +
        ".element-border{ color: "+ "#FFFFFF" + ";}" + "\n" + "\n" +
        ".element-background{ color: "+ "#FFFFFF" + ";}" + "\n" + "\n" +
        ".header{ color: "+ "#FFFFFF" + ";}"                 
    );
}

function generateRules(){

}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(rgbColor) {    
    console.log("rgbcolor: "+ rgbColor);
    return "#" + componentToHex(Math.floor(rgbColor[0])) + 
            componentToHex(Math.floor(rgbColor[1])) + 
            componentToHex(Math.floor(rgbColor[2]));
}