const resemble = require("../resemble");
const compareImages = require("resemblejs/compareImages");


async function getDiff() {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile("../backend/public/screenshots/pallete.js/image -- compare.png"),
        await fs.readFile("../backend/public/screenshots/pallete.js/image -- compare (1).png"),
        options
    );
    console.log('dsfdfsdffffffffffffff');
    await fs.writeFile("../backend/public/screenshots/pallete.js/output.png", data.getBuffer());
}



describe("compareImages", ()=>{
    test("Compare images basic", async () => {
        var diff = resemble("../backend/public/screenshots/pallete.js/image -- compare.png")
        .compareTo("../backend/public/screenshots/pallete.js/image -- compare (1).png")
        //.ignoreColors()
        .onComplete(function(data) {
            console.log(data);
            getDiff();
        });
    });
    test("Compare images basic", async () => {
        var diff = resemble("../backend/public/screenshots/pallete.js/image -- compare.png")
        .compareTo("../backend/public/screenshots/pallete.js/image -- compare (2).png")
        .ignoreColors()
        .onComplete(function(data1) {
            console.log(data1);
            /*{
                misMatchPercentage : 100, // %
                isSameDimensions: true, // or false
                dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
                getImageDataUrl: function(){}
            }*/
        });
    });
    test("Compare images basic", async () => {
        var diff = resemble("../backend/public/screenshots/pallete.js/image -- compare (1).png")
        .compareTo("../backend/public/screenshots/pallete.js/image -- compare (2).png")
        .ignoreColors()
        .onComplete(function(data2) {
            console.log(data2);
            /*{
                misMatchPercentage : 100, // %
                isSameDimensions: true, // or false
                dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
                getImageDataUrl: function(){}
            }*/
        });
    });
});

