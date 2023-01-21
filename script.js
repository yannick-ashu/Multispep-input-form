const page1 = document.querySelector('.info-form');
const page2 = document.querySelector('.select-your-plan');
const page3 = document.querySelector('.pick-add-ons');
const page4 = document.querySelector('.finishing-up');
const page5 = document.querySelector('.thank-you-parent');

const firstButton = document.querySelector('#next-step-button');

const seconButton = document.querySelector('.nav');
const thirdButton = document.querySelector('#next-step');

const fourthButton = document.querySelector('.go-back');
const fithButton = document.querySelector('.Next-step');

const sithButton = document.querySelector('.go-back-button')
const seventhButton = document.querySelector('.confirm-button')

function firstStep() {
    firstButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('info-forms').style.display = 'none';
        document.getElementById('select-your-plans').style.display = 'initial';
    })
}
firstStep()




function secondStep() {
    seconButton.addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById('select-your-plans').style.display = 'none'
        document.getElementById('info-forms').style.display = 'initial'
    })
    thirdButton.addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById('pick-adds').style.display = 'initial'
        document.getElementById('info-forms').style.display = 'none'
        document.getElementById('select-your-plans').style.display = 'none';
    })
}
secondStep()



function thirdStep() {

    fourthButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('pick-adds').style.display = 'none';
        document.getElementById('info-forms').style.display = 'none'
        document.getElementById('select-your-plans').style.display = 'initial'
    })
    fithButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('pick-adds').style.display = 'none';
        document.getElementById('info-forms').style.display = 'none'
        document.getElementById('finishings').style.display = 'initial'
    })
}
thirdStep()





    sithButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('info-forms').style.display = 'none';
        document.getElementById('finishings').style.display = 'none';
        document.getElementById('pick-adds').style.display = 'initial';
        console.log(e.target);
    })




    seventhButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('info-forms').style.display = 'none';
        document.getElementById('finishings').style.display = 'none';
        document.getElementById('last-step').style.display = 'initial';
        console.log(e.target);
    })

