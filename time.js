'use strict'


document.getElementsByClassName('minute-start')[0].value = '00'
document.getElementsByClassName('hour-start')[0].value = '00'
document.getElementsByClassName('minute-end')[0].value = '00'
document.getElementsByClassName('hour-end')[0].value = '00'
document.getElementsByClassName('ampm-start')[0].addEventListener('click', function() {
    if(document.getElementsByClassName('ampm-start')[0].textContent == 'AM') {
        document.getElementsByClassName('ampm-start')[0].textContent = 'PM'
    } else {
        document.getElementsByClassName('ampm-start')[0].textContent = 'AM'
    }
})

document.getElementsByClassName('ampm-end')[0].addEventListener('click', function() {
    if(document.getElementsByClassName('ampm-end')[0].textContent == 'AM') {
        document.getElementsByClassName('ampm-end')[0].textContent = 'PM'
    } else {
        document.getElementsByClassName('ampm-end')[0].textContent = 'AM'
    }
})

document.getElementsByClassName('check')[0].addEventListener('click', function() {
    if(
        Number(document.getElementsByClassName('minute-start')[0].value) >= 0 &&
        Number(document.getElementsByClassName('hour-start')[0].value) >= 1 &&
        Number(document.getElementsByClassName('minute-end')[0].value) >= 0 &&
        Number(document.getElementsByClassName('hour-end')[0].value) >= 1 &&
        Number(document.getElementsByClassName('minute-start')[0].value) <= 59 &&
        Number(document.getElementsByClassName('hour-start')[0].value) <= 12 &&
        Number(document.getElementsByClassName('minute-end')[0].value) <= 59 &&
        Number(document.getElementsByClassName('hour-end')[0].value) <= 12 &&
        document.getElementsByClassName('task-name')[0].value
    ) {
        document.getElementsByClassName('name')[0].textContent = document.getElementsByClassName('task-name')[0].value
        document.getElementsByClassName('time')[0].textContent = `${document.getElementsByClassName('hour-start')[0].value}:${document.getElementsByClassName('minute-start')[0].value} ${document.getElementsByClassName('ampm-start')[0].textContent} - ${document.getElementsByClassName('hour-end')[0].value}:${document.getElementsByClassName('minute-end')[0].value} ${document.getElementsByClassName('ampm-end')[0].textContent}`
    }
})
