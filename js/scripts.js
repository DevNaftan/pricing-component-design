const body = document.querySelector('body')
const toogle = document.getElementById('toogle')
const plan1 = document.getElementById('plan-1')
const plan2 = document.getElementById('plan-2')
const plan3 = document.getElementById('plan-3')


function mode(event) {
  if (event.target.checked) {
    plan1.textContent = '199.99'
    plan2.textContent = '249.99'
    plan3.textContent = '399.99'
  } else {
    plan1.textContent = '19.99'
    plan2.textContent = '24.99'
    plan3.textContent = '39.99'
  }
}

body.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    if (toogle.checked) {
      toogle.checked = false
      plan1.textContent = '19.99'
      plan2.textContent = '24.99'
      plan3.textContent = '39.99'
    } else {
      toogle.checked = true
      plan1.textContent = '199.99'
      plan2.textContent = '249.99'
      plan3.textContent = '399.99'
    }
  }
})

toogle.addEventListener('change', mode)
