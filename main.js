const grid_container = document.querySelector('#grid-container')
const range_slider = document.querySelector('#slider-input')
const grid_size_display = document.querySelector('#grid-size-display')
const border_switch = document.querySelector('#border-switch')
const reset_btn = document.querySelector('#reset-btn')
const rand_color_switch = document.querySelector('#rand-color-switch')


function grid_hover_effect() {
    let grid_squares = document.querySelectorAll('.grid-square')

//adding hover effect and setting color
    grid_squares.forEach(square => {
        square.addEventListener('mouseover', function(e){
            square.style.background = '#ee6f57'
        })
    });

}
function grid_generator(num=8){

    for (let index = 0; index < num ** 2; index++) {
        
        let grid_square = document.createElement('div')
        grid_square.setAttribute('class','grid-square')
        grid_square.style.cssText = `height: calc(100%/${num});
        width: calc(100%/${num});`
        grid_container.appendChild(grid_square)

    }
    
}
function activate_border() {
    let grid_squares = document.querySelectorAll('.grid-square') 
    
    border_switch.addEventListener('change',function(){
        if (this.checked) {
            grid_squares.forEach(square => {
                square.classList.add('border')
            });
        } else {
            grid_squares.forEach(square => {
                square.classList.remove('border')
            });
        }
    })
    
}
function reset_canvas(){
    let grid_squares = document.querySelectorAll('.grid-square') 

    reset_btn.addEventListener('click',function(){
        grid_squares.forEach(square => {
            square.style.background = '#00334ed6'
        });
    })
}
function color_generator(){

    let colors = ['#ee6f57','#00334ed6','#f6f5f5','#6a2c70','#b83b5e','#eeecda','#fca652','#ccf6c8','#ff414d','#d9ecf2','#81b214','#bfdcae','#cd0a0a','#1a1a2e','#ed6663','#aa4a30','#7d0633','#28df99','#8675a9','#709fb0']

    let rand_color = colors[Math.floor(Math.random()*colors.length)]
    return rand_color
    
}
function activate_rand_color() {

    let grid_squares = document.querySelectorAll('.grid-square')

    

    rand_color_switch.addEventListener('change',function(){
        if (this.checked) {
            grid_squares.forEach(square => {
                square.addEventListener('mouseover',function(){
                    square.style.background = color_generator()
                })
            });
        } else {
            grid_hover_effect()
        }
    })

}



grid_generator()
grid_hover_effect()
activate_border()
reset_canvas()
activate_rand_color()


range_slider.addEventListener('input',function(){
    let num = range_slider.value
    grid_size_display.textContent = `Size: ${num}x${num}` 
    grid_container.innerHTML = ''
    grid_generator(num)

    grid_hover_effect()
    activate_border()

    let grid_squares = document.querySelectorAll('.grid-square') 

    if (border_switch.checked){
        grid_squares.forEach(square => {
            square.classList.add('border')
        });
    } else {
        grid_squares.forEach(square => {
            square.classList.remove('border')
        });
    }

    activate_rand_color()
    if (rand_color_switch.checked) {
        grid_squares.forEach(square => {
            square.addEventListener('mouseover',function(){
                square.style.background = color_generator()
            })
        });
    } else if (!rand_color_switch.checked){
        grid_squares.forEach(square => {
            square.addEventListener('mouseover', function(){
                square.style.background = '#ee6f57'
            })
        });
    }

    reset_canvas()
    

})











