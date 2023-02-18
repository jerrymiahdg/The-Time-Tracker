'use strict'

var ampmStart = document.getElementsByClassName('ampm-start')[0]
var ampmEnd = document.getElementsByClassName('ampm-end')[0]
var check = document.getElementsByClassName('check')[0]
var taskInput = document.getElementsByClassName('task-input')[0]
var taskName = document.getElementsByClassName('task-name')[0]
var timeStart = document.getElementsByClassName('time-start')[0]
var timeEnd = document.getElementsByClassName('time-end')[0]
var hourStart = document.getElementsByClassName('hour-start')[0]
var minuteStart = document.getElementsByClassName('minute-start')[0]
var hourEnd = document.getElementsByClassName('hour-end')[0]
var minuteEnd = document.getElementsByClassName('minute-end')[0]
var timeChart = document.getElementsByClassName('time-chart')[0]
var task = document.getElementsByClassName('task')[0]
var name = document.getElementsByClassName('name')[0]
var time = document.getElementsByClassName('time')[0]
var dlt = document.getElementsByClassName('delete')[0]
var edit = document.getElementsByClassName('edit')[0]
var close = document.getElementsByClassName('close')[0]
const taskArray = []
const nameArray = []
const timeArray = []
const dltArray = []
const editArray = []
const hourStartArray = []
const minuteStartArray = []
const hourEndArray = []
const minuteEndArray = []
let number = -1
let editing = {boolean: false, number}

task.style.display = 'none'
taskInput.style.display = 'block'

ampmStart.addEventListener('click', ampm(ampmStart))
ampmEnd.addEventListener('click', ampm(ampmEnd))
close.addEventListener('click', function() {
    if(taskInput.style.display == 'block') {
        taskInput.style.display = 'none'
        close.textContent = 'v'
    } else {
        taskInput.style.display = 'block'
        close.textContent = '^'
    }
})

function ampm(i) {
    return function() {
    if(i.textContent == 'AM') {
        i.textContent = 'PM'
    } else {i.textContent = 'AM'}}
}

check.addEventListener('click', function() {
    if(taskName.value !== '' &&
    hourStart.value !== '' &&
    minuteStart.value !== '' &&
    hourEnd.value !== '' &&
    minuteEnd.value !== '' && 
    Number(hourStart.value) < 12 && 
    Number(minuteStart.value) < 60 && 
    Number(hourEnd.value) < 12 && 
    Number(minuteEnd.value) < 60
    ) {
        if(editing.boolean == false) {number = number + 1
        taskArray.push(document.createElement('div'))
        taskArray[number].className = 'task'
        nameArray.push(document.createElement('p'))
        nameArray[number].className = 'name'
        nameArray[number].textContent = taskName.value
        timeArray.push(document.createElement('p'))
        hourStartArray.push((Number(hourStart.value)*10)/10)
        minuteStartArray.push(minute(minuteStart))
        hourEndArray.push((Number(hourEnd.value)*10)/10)
        minuteEndArray.push(minute(minuteEnd))
        timeArray[number].className = 'time'
        timeArray[number].textContent = `${(Number(hourStart.value)*10)/10}:${minute(minuteStart)} - ${(Number(hourEnd.value)*10)/10}:${minute(minuteEnd)}`
        dltArray.push(document.createElement('button'))
        dltArray[number].className = 'delete'
        dltArray[number].textContent = 'X'
        editArray.push(document.createElement('button'))
        editArray[number].className = 'btn-2 edit'
        editArray[number].textContent = 'Edit'
        timeChart.appendChild(taskArray[number])
        taskArray[number].appendChild(nameArray[number])
        taskArray[number].appendChild(timeArray[number])
        taskArray[number].appendChild(dltArray[number])
        taskArray[number].appendChild(editArray[number])
        editFunc(number)
        dltFunc(number)} else {
            nameArray[editing.number].textContent = taskName.value
            hourStartArray[editing.number] = (Number(hourStart.value)*10)/10
            minuteStartArray[editing.number] = (minute(minuteStart))
            hourEndArray[editing.number] = (Number(hourEnd.value)*10)/10
            minuteEndArray[editing.number] = (minute(minuteEnd))
            timeArray[editing.number].textContent = `${(Number(hourStart.value)*10)/10}:${minute(minuteStart)} - ${(Number(hourEnd.value)*10)/10}:${minute(minuteEnd)}`
        }
        taskName.value = ''
        hourStart.value = ''
        minuteStart.value = ''
        hourEnd.value = ''
        minuteEnd.value = ''
    }
})

function editFunc(i) {
    editArray[i].addEventListener('click', function() {
        taskName.value = nameArray[i].textContent
        hourStart.value = hourStartArray[i]
        minuteStart.value = minuteStartArray[i]
        hourEnd.value = hourStartArray[i]
        minuteEnd.value = minuteEndArray[i]
        check.textContent = 'Edit Task'
        editing.boolean = true
        editing.number = i
    })
}

function dltFunc(i) {
    dltArray[i].addEventListener('click', function() {
        taskArray[i].style.display = 'none'
    })
}

function minute(i) {
    if(Number(i.value) < 10 && i.value.length < 2) {
        return '0' + i.value
    } else {return i.value}
}
