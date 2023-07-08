document.addEventListener('keydown',k_down)
document.addEventListener('keyup',k_up)
function sc(x){return document.getElementById(x)}

var box = 'box00'
var box_count = 1

var count00 = 10
var count01 = 0
var count02 = 0
var count03 = 0
var count04 = 10

var count_w = 0
var count_s = 0
var count_a = 0
var count_d = 0

var w,s,a,d

function box_init(){
    config = sc('config').value.split(',')

    sc(box+'a').style.width = config[0]+'px'
    sc(box+'a').style.height = config[1]+'px'
    sc(box).style.backgroundColor = config[2]
    count00 = Number(config[3])
    count04 = Number(config[4])
}

function k_down(e){
    count03 = 0
    if(count03==0){
        if(e.key=='w'){
            if(count_w==0){
                count_w = 1
                w = setInterval(()=>{
                    count01-=count00
                    sc(box).style.top = count01+'px'
                },count04)
            }
        }else if(e.key=='s'){
            if(count_s==0){
                count_s = 1
                s = setInterval(()=>{
                    count01+=count00
                    sc(box).style.top = count01+'px'
                },count04)
            }
        }else if(e.key=='a'){
            if(count_a==0){
                count_a = 1
                a = setInterval(()=>{
                    count02-=count00
                    sc(box).style.left = count02+'px'
                },count04)
            }
        }else if(e.key=='d'){
            if(count_d==0){
                count_d = 1
                d = setInterval(()=>{
                    count02+=count00
                    sc(box).style.left = count02+'px'
                },count04)
            }
        }
    }
}

function k_up(e){
    count03 = 1

    switch(e.key){
        case 'w':
            clearInterval(w)
            count_w = 0
        case 's':
            clearInterval(s)
            count_s = 0
        case 'a':
            clearInterval(a)
            count_a = 0
        case 'd':
            clearInterval(d)
            count_d = 0
        break
    }
}

function add_box(){
    box_count++
    var box_el = document.createElement('div')

    if(box_count-1<10){
        box_el.id = 'box0'+(box_count-1)
        box_el.innerHTML = `<div id="box0${box_count-1}a" onclick="slct_box('0${box_count-1}')"></div>`
    }else{
        box_el.id = 'box'+(box_count-1)
        box_el.innerHTML = `<div id="${box_count-1}" onclick="slct_box('${box_count-1}')"></div>`
    }

    box_el.style.backgroundColor = '#000'
    box_el.style.position = 'absolute'
    box_el.style.top = '0'
    box_el.style.left = '0'

    document.body.appendChild(box_el)

    setTimeout(()=>{
        sc(box_el.id+'a').style.width = '100px'
        sc(box_el.id+'a').style.height = '100px'
    },100)
}

function slct_box(x){
    box = 'box'+x
    console.log('selected "box'+x+'"')
}