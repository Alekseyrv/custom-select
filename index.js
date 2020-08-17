
function MySelect({selector, options, onChange}){
 
  let genSelect = document.createElement('div')
  genSelect.className = ('__select')
  genSelect.setAttribute('data-state', '')
  let genSelectTitle = document.createElement('div')
  genSelectTitle.className = ('__select__title')
  genSelectTitle.setAttribute('data-default', 'default')
  genSelectTitle.innerText  = "Сделайте выбор"
  genSelect.appendChild(genSelectTitle)
  let genSelectContent = document.createElement('div')
  genSelectContent.className = ('__select__content')
  genSelect.appendChild(genSelectContent)
 
  options.forEach((item) => {
    option = document.createElement('input')
    option.setAttribute('type', 'radio')
    option.setAttribute('id', 'select' + item.id)
    option.className = ('__select__input')

    label = document.createElement('label')
    label.setAttribute('for', 'select'+ item.id)
    label.setAttribute('value', item.id)
    label.className = ('__select__label')
    label.innerText  = item.value
    genSelectContent.appendChild(option)
    genSelectContent.appendChild(label)

  });
  
  document.querySelector(selector).appendChild(genSelect)
  	const selectSingle = document.querySelector('.__select');
	const selectSingle_title = selectSingle.querySelector('.__select__title');
	const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

	selectSingle_title.addEventListener('click', () => {
  		if ('active' === selectSingle.getAttribute('data-state')) {
    		selectSingle.setAttribute('data-state', '');
  			} else {
    			selectSingle.setAttribute('data-state', 'active');
  			}
  			
		});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    let value = options.find(option => option.id == evt.target.getAttribute('value'))
    onChange(value)
    selectSingle.setAttribute('data-state', '');
  });
}


 this.openSelect = function() {
 	selectSingle.setAttribute('data-state', 'active')
 }
 this.closeSelect = function() {
 	selectSingle.setAttribute('data-state', '')
 }
 this.chooseOne = function (id) {
 	document.querySelector('[for=select'+ id +']').click()
 }
}

var a = new MySelect({
  selector: '#element', 
  options: [{id: 1, value: "First item"}, {id: 2, value: "Second item"}, {id: 3, value: "Third item"}], 
  onChange: (val) => { console.log(val)  }
})

console.log('select', a)

