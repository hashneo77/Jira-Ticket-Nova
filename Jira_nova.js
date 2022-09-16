
let oai;
let temp;
function play() {
    var audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}

function ajaxCall() {
    oai = jQuery.ajax({
        url: "https://novacroft-sd.atlassian.net/rest/servicedesk/1/servicedesk/AP/queues/issue-counts/refresh",
        type: "POST",
        data: "[88]",
        async: false,
        accept: "application/json,text/javascript",
        contentType: "application/json",
        success: function () {
        }
    });
    setTimeout(function () {
    }, 1000);
    temp = 0;
    var count = JSON.parse(oai.responseText)['issueCounts'][88]['issueCount'];
    if (count != temp)
        play();
    temp = count;
}

