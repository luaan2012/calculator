function calcular(action, val) {
    

    if(action == 'action'){

        if(val == 'c'){
            document.getElementById('display').value = ''
        }
        
        if(val === '+' || val === '-' || val === '*' || val === '/' || val === '.'){
            document.getElementById('display').value += val 
        }

        if(val === '=') {
            let result = document.getElementById('display').value
            document.getElementById('display').value = eval(result)
        }

    }else if(action == 'val'){
        document.getElementById('display').value += val
    }
}

