// Globals

var ballance = 857342000.16;
var withdrawal = 5857342000.16;


/**
 * 
 * @param {HTMLElement} element 
 */
function closePage(element) {
    element.classList.add('hidden')
}

/**
 * 
 * @param {HTMLElement} element 
 */
function openPage(element) {
    element.classList.remove('hidden')
}

const page = {
    one: document.getElementById('form-container'),
    two: document.getElementById('withdrawal-msg'),
    three: document.getElementById('ballance-container'),
    four: document.getElementById('ballance-msg'),
}

function openWithdrawForm() {
    const { one, two, three, four } = page;

    for (let p of [two, three, four]) {
        closePage(p);
    }

    openPage(one)
}

function openBallanceForm() {
    const { one, two, three, four } = page;

    for (let p of [two, one, four]) {
        closePage(p);
    }

    openPage(three)
}

function openWithdrawPage() {
    const { one, two, three, four } = page;

    for (let p of [one, three, four]) {
        closePage(p);
    }

    openPage(two)
}

function openBallancePage() {
    const { one, two, three, four } = page;

    for (let p of [one, two, three]) {
        closePage(p);
    }

    openPage(four)
}

const wForm = document.querySelector('form#withdraw-form');

wForm.addEventListener('submit', e => {
    e.preventDefault();
    const amount = wForm.querySelector('input').value;
    const amountContainer = document.getElementById('withdraw-amount');
    const tidContainer = document.getElementById('tid');

    const tid = parseInt((996 + Math.random() )* 10**10 );

    amountContainer.innerHTML = parseFloat(parseFloat(amount).toFixed(2)).toLocaleString();
    tidContainer.innerHTML = tid;

    openWithdrawPage();
})


const bForm = document.getElementById('ballance-form');

bForm.addEventListener('submit', e => {
    e.preventDefault();
    const amount = bForm.querySelector('input').value;

    const balElements = document.querySelectorAll('.sum-bal');
    balElements.forEach(element=>{
        element.innerHTML = parseFloat(parseFloat(amount).toFixed(2)).toLocaleString();
    })
    openBallancePage();
})


//openWithdrawForm();
//openWithdrawPage();
//openBallancePage();