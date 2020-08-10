let pluseElementList = document.querySelectorAll('.accordion__toggle');

for (let index = 0; index < pluseElementList.length; index++) {
    pluseElementList[index].addEventListener('click', toogleText);
}

function toogleText(event) {

    let accordionItem = event.currentTarget.parentElement.parentElement;
    let textElement = accordionItem.querySelector('.accordion__description');

    let isDisplayText = textElement.classList.contains('accordion__description--display');

    if (isDisplayText === false) {
        textElement.classList.add('accordion__description--display');
    } else {
        textElement.classList.remove('accordion__description--display');
    }
}