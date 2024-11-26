function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate the shape factor </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3'>Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Shape Factor", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Find the shape factor with respect to itself. Given that the canonical hole is of diameter ${act2_D}cm and depth of ${act2_h}cm. </h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/activity2.png'></div>
        <br><br>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ L = \\sqrt{H^2 + (\\frac{D}{2})^2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> cm

            <button class='btn btn-info std-btn' onclick='verify_act2_l();' id='btn_act2_l' style="width:20%">Verify</button>
        </p>

        <div id="act2_a1" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ A_1 = \\frac{\\pi D L}{2} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> cm<sup>2</sup>

                <button class='btn btn-info std-btn' onclick='verify_act2_a1();' id='btn_act2_a1' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_a2" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ A_2 = \\frac{\\pi}{4} D^2 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> cm<sup>2</sup>

                <button class='btn btn-info std-btn' onclick='verify_act2_a2();' id='btn_act2_a2' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_f11" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ F_{1-1} = 1 - \\frac{A_2}{A_1} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act2_f11();' id='btn_act2_f11' style="width:20%">Verify</button>
            </p>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    act2_l = Math.sqrt(Math.pow(act2_h, 2) + Math.pow((act2_D / 2), 2));
    act2_a1 = (Math.PI * act2_D * act2_l) / 2;
    act2_a2 = (Math.PI / 4 * Math.pow(act2_D, 2));
    act2_f11 = 1 - (act2_a2 / act2_a1);
    console.log("act2 L= ", act2_l);
    console.log("act2 A1= ", act2_a1);
    console.log("act2 A2= ", act2_a2);
    console.log("act2 F1-1= ", act2_f11);
}
function verify_act2_l() {
    let btn = document.getElementById('btn_act2_l');
    let div = document.getElementById('act2_a1');
    let inp10 = document.getElementById('cal10-inp');
    let sp10 = document.getElementById('cal10-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(3)), parseFloat(act2_l.toFixed(3)))) {
        alert('L value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp10.remove();
    sp10.innerText = `${(act2_l).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_a1() {
    let btn = document.getElementById('btn_act2_a1');
    let div = document.getElementById('act2_a2');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(3)), parseFloat(act2_a1.toFixed(3)))) {
        alert('A1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp4.remove();
    sp4.innerText = `${(act2_a1).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_a2() {
    let btn = document.getElementById('btn_act2_a2');
    let div = document.getElementById('act2_f11');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(act2_a2.toFixed(2)))) {
        alert('A2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp5.remove();
    sp5.innerText = `${(act2_a2).toFixed(4)}`;
    div.style.display = 'block';
}
function verify_act2_f11() {
    let btn = document.getElementById('btn_act2_f11');
    let inp6 = document.getElementById('cal06-inp');
    let sp6 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(3)), parseFloat(act2_f11.toFixed(3)))) {
        alert('F 1-1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp6.remove();
    sp6.innerText = `${(act2_f11).toFixed(3)}`;
    activity3();
}
//# sourceMappingURL=activity2.js.map