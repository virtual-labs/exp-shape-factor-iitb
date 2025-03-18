function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate the shape factor </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-4' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-4');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Shape Factor", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 3</p> <br>
        <h5> Find the shape factor with respect to itself. Given that the hemispherical hole is of ${act3_D}cm in diameter. </h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/activity3.png'></div>
        <br><br>

        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ A_2 = \\frac{\\pi}{4} D^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> cm<sup>2</sup>

            <button class='btn btn-info std-btn' onclick='verify_act3_a2();' id='btn_act3_a2' style="width:20%">Verify</button>
        </p>

        <div id="act3_a1" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ A_1 = \\frac{\\pi}{2} D^2 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> cm<sup>2</sup>

                <button class='btn btn-info std-btn' onclick='verify_act3_a1();' id='btn_act3_a1' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act3_f11" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ F_{1-1} = 1 - \\frac{A_2}{A_1} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act3_f11();' id='btn_act3_f11' style="width:20%">Verify</button>
            </p>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    act3_a2 = (Math.PI / 4 * Math.pow(act3_D, 2));
    act3_a1 = (Math.PI / 2 * Math.pow(act3_D, 2));
    act3_f11 = 1 - (act3_a2 / act3_a1);
    console.log("act3 A1= ", act3_a1);
    console.log("act3 A2= ", act3_a2);
    console.log("act3 F1-1= ", act3_f11);
}
function verify_act3_a2() {
    let btn = document.getElementById('btn_act3_a2');
    let div = document.getElementById('act3_a1');
    let inp7 = document.getElementById('cal07-inp');
    let sp7 = document.getElementById('cal07-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(2)), parseFloat(act3_a2.toFixed(2)))) {
        alert('A2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp7.remove();
    sp7.innerText = `${(act3_a2).toFixed(4)}`;
    div.style.display = 'block';
}
function verify_act3_a1() {
    let btn = document.getElementById('btn_act3_a1');
    let div = document.getElementById('act3_f11');
    let inp8 = document.getElementById('cal08-inp');
    let sp8 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(2)), parseFloat(act3_a1.toFixed(2)))) {
        alert('A1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp8.remove();
    sp8.innerText = `${(act3_a1).toFixed(4)}`;
    div.style.display = 'block';
}
function verify_act3_f11() {
    let btn = document.getElementById('btn_act3_f11');
    let inp9 = document.getElementById('cal09-inp');
    let sp9 = document.getElementById('cal09-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(3)), parseFloat(act3_f11.toFixed(3)))) {
        alert('F 1-1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp9.remove();
    sp9.innerText = `${(act3_f11).toFixed(3)}`;
    exp_complete();
}
function exp_complete() {
    alert('Experiment completed');
}
//# sourceMappingURL=activity3.js.map