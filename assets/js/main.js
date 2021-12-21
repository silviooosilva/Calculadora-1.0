function calculo(valor, tipo){
    var show_results = document.getElementsByClassName('show')[0].value
    if(tipo == 'number'){
        document.getElementsByClassName('show')[0].value += valor
    }
    if(valor == 'C'){
      document.getElementsByClassName('show')[0].value = ''
    }
    if(valor == 'CE'){
        var all_value = document.getElementsByClassName('show')[0].value.toString()
        all_value = all_value.substr(0, all_value.length-1)
        document.getElementsByClassName('show')[0].value = all_value
    }
    if(valor === '+' || valor === '-' || valor === '/' || valor === '%' || valor === '*'){
        document.getElementsByClassName('show')[0].value += valor
    }
    if(valor === '='){
        document.getElementsByClassName('show')[0].value = eval(show_results)
    }
}
