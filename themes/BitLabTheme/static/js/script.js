function openLinkOnExternalBrowser(url) {
    var link = document.createElement("a");
    link.href = url;
    // ANB!02/03/20 href risolve in automatico l'URL assoluto
    let absURL = link.href;
    if (isADA()) {
        globalExternalInteropObject.ExploreToUrl(absURL);
    } else {
        window.open(absURL, "_blank");
    }
}

function navigateBack() {
    window.history.back();
}

function navigateForward() {
    window.history.forward();
}

function detectIsItalian() {
    return /\bit\b/.test(navigator.language);
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                callback(allText);
            }
        }
    }
    rawFile.send(null);
}
// replaceAll non è supportato seriamente ancora
function string_ReplaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
}

function fixImgSrcRelativePaths(htmlContentToFix, mdRelativeDirectory) {
    return string_ReplaceAll(htmlContentToFix, "<img src=\"./", "<img src=\"" + mdRelativeDirectory);
}