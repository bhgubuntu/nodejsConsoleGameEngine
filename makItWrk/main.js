var cmnds = {};
cmnds.echo = function (text) {
    console.log(text);
    write(text);
}

cmnds.method2 = function (param) {
    console.log(param);
};

cmnds.method3 = function (param) {
    console.log(param);
};

function write(txt){
    let x = "";
    if (document.getElementById("mnFrm").value !== null){
        x = document.getElementById("mnFrm").value;
        x = x + "\\\n";
    }
    x = x + txt;
}

function rnCmnd(cmnd, param1, param2, param3, param4){
    //console.log("does cmnd exist" + cmnd in cmnds)
    /*if (cmnds.hasOwnProperty(cmnd)) {


    }   else {
        write("invalid command")
    }*/
    cmnds[cmnd](param1, param2, param3, param4);
}

function hsWhitSpc(s) {
    return s.indexOf(' ') >= 0;
}

function cpyCmnd() {
    let v = document.getElementById("cmnd").value
    let prms = []
    if (v !== "echo"){
        if (hsWhitSpc(v) >= 1 ){
            prms = v.split(' ');
        }
    }

    console.log(prms);
    clrCmnd()
    rnCmnd(v, prms[1], prms[2], prms[3], prms[4])
}

function clrCmnd() {
    document.getElementById("cmnd").value = null;
}

$("#cmnd").on('keyup', function (event) {
    if (event.keyCode === 13) {
        console.log("run cmnd");
        cpyCmnd();
    }
});