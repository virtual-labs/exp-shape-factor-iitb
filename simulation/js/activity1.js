let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Shape Factor</h5>
        <p>Learning Objective: Calculate the shape factor</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Shape Factor", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> Find the shape factor with respect to itself. Given that the cylindrical cavity is of diameter ${act1_D}cm and depth of ${act1_h}cm. </h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/activity1.png'></div>
        <br><br>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 F_{1-2} = A_2 F_{21} $$
                $$ F_{1-2} = \\frac{A_2}{A_1} F_{21} $$
                $$ \\because F_{21} = 1 $$
                $$ F_{1-2} = \\frac{A_2}{A_1} $$
            </span>
        </p>

        <h5>Now</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ F_{1-1} + F_{1-2} = 1 $$
                $$ \\therefore F_{1-1} = 1 - \\frac{A_2}{A_1} $$
                $$ A_1 = \\pi D H + \\frac{\\pi}{4} D^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> cm<sup>2</sup>

            <button class='btn btn-info std-btn' onclick='verify_act1_a1();' id='btn_act1_a1' style="width:20%">Verify</button>
        </p>

        <div id="act1_a2" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ A_2 = \\frac{\\pi}{4} D^2 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span> cm<sup>2</sup>

                <button class='btn btn-info std-btn' onclick='verify_act1_a2();' id='btn_act1_a2' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_f11" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ F_{1-1} = 1 - \\frac{A_2}{A_1} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_f11();' id='btn_act1_f11' style="width:20%">Verify</button>
            </p>
        </div>
    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    act1_a1 = (Math.PI * act1_D * act1_h) + (Math.PI / 4 * Math.pow(act1_D, 2));
    act1_a2 = (Math.PI / 4 * Math.pow(act1_D, 2));
    act1_f11 = 1 - (act1_a2 / act1_a1);
    console.log("act1 A1= ", act1_a1);
    console.log("act1 A2= ", act1_a2);
    console.log("F1-1= ", act1_f11);
}
function verify_act1_a1() {
    let btn = document.getElementById('btn_act1_a1');
    let div = document.getElementById('act1_a2');
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(3)), parseFloat(act1_a1.toFixed(3)))) {
        alert('A1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act1_a1).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_a2() {
    let btn = document.getElementById('btn_act1_a2');
    let div = document.getElementById('act1_f11');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act1_a2.toFixed(2)))) {
        alert('A2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${(act1_a2).toFixed(4)}`;
    div.style.display = 'block';
}
function verify_act1_f11() {
    let btn = document.getElementById('btn_act1_f11');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(3)), parseFloat(act1_f11.toFixed(3)))) {
        alert('F 1-1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp3.remove();
    sp3.innerText = `${(act1_f11).toFixed(3)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map