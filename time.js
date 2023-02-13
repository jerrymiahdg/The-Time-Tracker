'use strict'

let timeStartHour
let timeStartMinute
let timeEndHour
let timeEndMinute
let ampmStart
let ampmEnd
let editing
let numberOfTasks = 0

const taskArray = []
const nameArray = []
const timeArray = []
const editArray = []
const deleteArray = []

document.getElementsByClassName('og-task')[0].style.display = 'none'
document.getElementsByClassName('minute-start')[0].value = ''
document.getElementsByClassName('hour-start')[0].value = ''
document.getElementsByClassName('minute-end')[0].value = ''
document.getElementsByClassName('hour-end')[0].value = ''
document.getElementsByClassName('task-input')[0].style.display = 'block'

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
document.getElementsByClassName('task')[0].style.visibility = 'hidden'

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
        document.getElementsByClassName('task')[0].style.visibility = 'visible'
        timeStartHour = document.getElementsByClassName('hour-start')[0].value
        timeStartMinute = noZero('minute-start')
        timeEndHour = document.getElementsByClassName('hour-end')[0].value
        timeEndMinute = noZero('minute-end')
        ampmStart = document.getElementsByClassName('ampm-start')[0].textContent
        ampmEnd = document.getElementsByClassName('ampm-end')[0].textContent
        
        
        taskArray.push(document.createElement('div'))
        nameArray.push(document.createElement('p'))
        timeArray.push(document.createElement('p'))
        editArray.push(document.createElement('button'))
        deleteArray.push(document.createElement('button'))
        
        taskArray[taskArray.length - 1].className = ('task')
        nameArray[nameArray.length - 1].className = ('name')
        timeArray[timeArray.length - 1].className = ('time')
        editArray[editArray.length - 1].className = ('btn edit')
        deleteArray[deleteArray.length - 1].className = ('delete')
        

        taskArray[taskArray.length - 1].appendChild(nameArray[nameArray.length - 1])
        taskArray[taskArray.length - 1].appendChild(timeArray[timeArray.length - 1])
        taskArray[taskArray.length - 1].appendChild(editArray[editArray.length - 1])
        taskArray[taskArray.length - 1].appendChild(deleteArray[deleteArray.length - 1])

        document.getElementsByClassName('time-chart')[0].appendChild(taskArray[taskArray.length - 1])
        
        editArray[editArray.length - 1].innerHTML = 'Edit';
        deleteArray[deleteArray.length - 1].innerHTML = 'X';

        nameArray[nameArray.length - 1].innerHTML = document.getElementsByClassName('task-name')[0].value;
        timeArray[timeArray.length - 1].innerHTML = `${(Number(document.getElementsByClassName('hour-start')[0].value)*10)/10}:${noZero('minute-start')} ${document.getElementsByClassName('ampm-start')[0].textContent} - ${(Number(document.getElementsByClassName('hour-end')[0].value)*10)/10}:${noZero('minute-end')} ${document.getElementsByClassName('ampm-end')[0].textContent}`;

        document.getElementsByClassName('minute-start')[0].value = ''
        document.getElementsByClassName('hour-start')[0].value = ''
        document.getElementsByClassName('minute-end')[0].value = ''
        document.getElementsByClassName('hour-end')[0].value = ''
        document.getElementsByClassName('task-name')[0].value = ''
    }
    if(document.getElementsByClassName('check')[0].textContent == 'Edit Task') {
        document.getElementsByClassName('check')[0].textContent = 'Add Task'
    }
})

document.getElementsByClassName('edit')[0].addEventListener('click', function() {
    
    if(document.getElementsByClassName('task')[0].style.visibility == 'visible') {
        if(document.getElementsByClassName('task-input')[0].style.display == 'hidden') {
            document.getElementsByClassName('task-input')[0].style.display = 'block'
            document.getElementsByClassName('close')[0].textContent = '^'
        }
        document.getElementsByClassName('check')[0].textContent = 'Edit Task'
        document.getElementsByClassName('task-name')[0].value = document.getElementsByClassName('name')[0].textContent
        document.getElementsByClassName('hour-start')[0].value = (Number(timeStartHour)/10)*10 
        document.getElementsByClassName('minute-start')[0].value = timeStartMinute 
        document.getElementsByClassName('hour-end')[0].value = (Number(timeStartHour)/10)*10
        document.getElementsByClassName('minute-end')[0].value = timeEndMinute
        document.getElementsByClassName('ampm-start')[0].textContent = ampmStart
        document.getElementsByClassName('ampm-end')[0].textContent = ampmEnd
    }
})

document.getElementsByClassName('delete')[0].addEventListener('click', function() {
    if(document.getElementsByClassName('task')[0].style.visibility == 'visible') {
        document.getElementsByClassName('task')[0].style.visibility = 'hidden'
        document.getElementsByClassName('name')[0].textContent = ''
        document.getElementsByClassName('time')[0].textContent = ''
    }
})

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    if(document.getElementsByClassName('task-input')[0].style.display == 'block') {
        document.getElementsByClassName('task-input')[0].style.display = 'none'
        document.getElementsByClassName('close')[0].textContent = 'v'
    } else {
        document.getElementsByClassName('task-input')[0].style.display = 'block'
        document.getElementsByClassName('close')[0].textContent = '^'
    }
})

const noZero = function(min) {
    if(document.getElementsByClassName(min)[0].value.length == 1 && Number(document.getElementsByClassName(min)[0].value) <= 9) {
        return `0${document.getElementsByClassName(min)[0].value}`
    } else { 
        return document.getElementsByClassName(min)[0].value
    }
}
