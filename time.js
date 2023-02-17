'use strict'

var ampmStart = document.getElementsByClassName('ampm-start')[0]
var ampmEnd = document.getElementsByClassName('ampm-end')[0]
var check = document.getElementsByClassName('check')[0]
var taskInput = document.getElementsByClassName('task-input')[0]
var taskName = document.getElementsByClassName('time-name')[0]
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
const taskArray = []
const nameArray = []
const timeArray = []
const dltArray = []
const editArray = []
const hourStartArray = []
const minuteStartArray = []
const hourEndArray = []
const minuteEndArray = []

ampmStart.addEventListener('click', ampm(ampmStart))
ampmEnd.addEventListener('click', ampm(ampmEnd))
task.style.display = 'none'

function ampm(i) {
    return function() {
    if(i.textContent == 'AM') {
        i.textContent = 'PM'
    } else {i.textContent = 'AM'}}
}

check.addEventListener('click', function() {
    if(taskName.value !== '' && Number(hourStart.value) < 12 && Number(minuteStart.value) < 60 && Number(hourEnd.value) < 12 && Number(minuteEnd.value) < 60) {
        taskArray.push(document.createElement('div'))
        taskArray[taskArray.length - 1].className = 'taskInput'
        nameArray.push(document.createElemenet('p'))
        nameArray[nameArray.length - 1].className = 'name'
        nameArray[nameArray.length - 1].textContent = taskName.value
        timeArray.push(document.createElement('p'))
        hourStartArray.push(hourStart.value)
        minuteStartArray.push(minuteStart.value)
        hourEndArray.push(hourEndStart.value)
        minuteEndArray.push(minuteEndStart.value)
        timeArray[timeArray.length - 1].className = 'time'
        timeArray[timeArray.length - 1].textContent = `${hourStart.value}:${minuteStart.value} - ${hourEnd.value}:${minuteEnd.value}`
        dltArray.push(document.createElement('button'))
        dltArray[dltArray.length - 1].className = 'delete'
        editArray.push(document.createElement('button'))
        editArray[editArray.length - 1].className = 'edit'
        editFunc(taskArray.length - 1)
    }
})

function editFunc(i) {
    return function() {editArray[i].addEventListener('click', function() {
        taskName.value = nameArray[i]
        hourStart.value = hourStartArray[i]
        minuteStart.value = minuteStartArray[i]
        hourEnd.value = hourStartArray[i]
        minuteEnd.value = minuteEndArray[i]
    })}
}
