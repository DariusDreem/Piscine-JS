export const pick = () => {
    let hslText = document.createElement("div"); // renamed from "hsl"
    hslText.className = "text hsl";
    hslText.style.top = `50%`;
    hslText.style.left = `50%`;
    hslText.style.textAlign = `center`;
    document.querySelector("body").append(hslText);

    let hueText = document.createElement("div"); // renamed from "hue"
    hueText.className = "text hue";
    document.querySelector("body").append(hueText);

    let luminosityText = document.createElement("div"); // renamed from "luminosity"
    luminosityText.className = "text luminosity";
    document.querySelector("body").append(luminosityText);

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    document.querySelector("body").append(svg);
    let axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
    axisX.id = "axisX";

    let axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
    axisY.id = "axisY";

    svg.appendChild(axisX);
    svg.appendChild(axisY);
    document.addEventListener("mousedown", (e) => {
        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = hslText.textContent; // renamed from "hsl"
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    });
    document.addEventListener("mousemove", (e) => {
        let x = Math.round((e.clientX / window.innerWidth) * 360);
        let y = Math.round((e.clientY / window.innerHeight) * 100);
        axisX.setAttributeNS(null, "x1", `${e.clientX}`);
        axisX.setAttributeNS(null, "x2", `${e.clientX}`);
        axisX.setAttributeNS(null, "y1", "0");
        axisX.setAttributeNS(null, "y2", "100%");
        axisY.setAttributeNS(null, "x1", "0");
        axisY.setAttributeNS(null, "x2", "100%");
        axisY.setAttributeNS(null, "y1", `${e.clientY}`);
        axisY.setAttributeNS(null, "y2", `${e.clientY}`);
        hueText.textContent = "hue\n" + x; // renamed from "hue"
        luminosityText.textContent = y + "\nluminosity"; // renamed from "luminosity"
        hslText.textContent = "hsl(" + x + ",50%," + y + "%)"; // renamed from "hsl"
        document.body.style.background = "hsl(" + x + ",50%," + y + "%)";
    });
};
