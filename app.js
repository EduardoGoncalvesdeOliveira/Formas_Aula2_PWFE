'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', trocarMovimento)
forma4.addEventListener('click', trocarAspecto)
forma5.addEventListener('click', showLogo)
forma6.addEventListener('click', trocarTamanho)
forma7.addEventListener('click', trocarLados)

function trocarCor() {
    forma1.classList.add('verde')
    forma1.classList.toggle('amarelo')
}

function trocarForma() {
    forma2.classList.toggle('circulo')
}

function trocarMovimento() {
    forma3.classList.toggle('girar')
}

function trocarAspecto() {
    forma4.classList.add('verde')
    forma4.classList.toggle('transparente')
}

function showLogo() {
    forma5.classList.toggle('logo')
}

function trocarTamanho() {
    forma6.classList.toggle('aumento')
}

function trocarLados() {
    forma7.classList.toggle('vaivem')
}