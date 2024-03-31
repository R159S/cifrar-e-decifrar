const cifrar = document.getElementById("cifrar")
const cifrado = document.getElementById("cifrado")

const decifrar = document.getElementById("decifrar")
const decifrado = document.getElementById("decifrado")

cifrar.addEventListener('click', (e) => {
    e.preventDefault()
    const conteudo = document.getElementById("conteudo").value
    cont = conteudo.length
    frase = conteudo.split('')

    while(cont >= 0){
        
        switch (frase[cont]){
            case "a":
                frase[cont] = "z"
                break
            case "b":
                frase[cont] = "a"
                break
            case "c":
                frase[cont] = "b"
                break 
            case "d":
                frase[cont] = "c"
                break   
            case "e":
                frase[cont] = "d"
                break
            case "f":
                frase[cont] = "e"
                break
            case "g":
                frase[cont] = "f"
                break 
            case "h":
                frase[cont] = "g"
                break   
            case "i":
                frase[cont] = "h"
                break
            case "j":
                frase[cont] = "i"
                break
            case "k":
                frase[cont] = "j"
                break 
            case "l":
                frase[cont] = "k"
                break   
            case "m":
                frase[cont] = "l"
                break
            case "n":
                frase[cont] = "m"
                break
            case "o":
                frase[cont] = "n"
                break 
            case "p":
                frase[cont] = "o"
                break 

            case "q":
                frase[cont] = "p"
                break
            case "r":
                frase[cont] = "q"
                break
            case "s":
                frase[cont] = "r"
                break 
            case "t":
                frase[cont] = "s"
                break   
            case "u":
                frase[cont] = "t"
                break
            case "v":
                frase[cont] = "u"
                break
            case "w":
                frase[cont] = "v"
                break 
            case "x":
                frase[cont] = "w"
                break   
            case "y":
                frase[cont] = "x"
                break
            case "z":
                frase[cont] = "y"
                break 
            case "!":
                frase[cont] = "?"
                break 
            case "?":
                frase[cont] = "!"
                break
            case ",":
                frase[cont] = "."
                break 
            case ".":
                frase[cont] = ","
                break 
            case ";":
                frase[cont] = ":"
                break 
            case ":":
                frase[cont] = ";"
                break  
            default:
                frase[cont] = "  "
                break    
        }

        cont--
    }

    cifrado.innerHTML = frase.join("")
    
})


decifrar.addEventListener('click', (e) => {
    e.preventDefault()
    const m_cifrada = document.getElementById("m_cifrada").value
    cont = m_cifrada.length
    frase = m_cifrada.split('')

    while(cont >= 0){
        
        switch (frase[cont]){
            case "a":
                frase[cont] = "b"
                break
            case "b":
                frase[cont] = "c"
                break
            case "c":
                frase[cont] = "d"
                break 
            case "d":
                frase[cont] = "e"
                break   
            case "e":
                frase[cont] = "f"
                break
            case "f":
                frase[cont] = "g"
                break
            case "g":
                frase[cont] = "h"
                break 
            case "h":
                frase[cont] = "i"
                break   
            case "i":
                frase[cont] = "j"
                break
            case "j":
                frase[cont] = "k"
                break
            case "k":
                frase[cont] = "l"
                break 
            case "l":
                frase[cont] = "m"
                break   
            case "m":
                frase[cont] = "n"
                break
            case "n":
                frase[cont] = "o"
                break
            case "o":
                frase[cont] = "p"
                break 
            case "p":
                frase[cont] = "q"
                break 

            case "q":
                frase[cont] = "r"
                break
            case "r":
                frase[cont] = "s"
                break
            case "s":
                frase[cont] = "t"
                break 
            case "t":
                frase[cont] = "u"
                break   
            case "u":
                frase[cont] = "v"
                break
            case "v":
                frase[cont] = "w"
                break
            case "w":
                frase[cont] = "x"
                break 
            case "x":
                frase[cont] = "y"
                break   
            case "y":
                frase[cont] = "z"
                break
            case "z":
                frase[cont] = "a"
                break 
            case "!":
                frase[cont] = "?"
                break 
            case "?":
                frase[cont] = "!"
                break 
            case ",":
                frase[cont] = "."
                break 
            case ".":
                frase[cont] = ","
                break 
            case ";":
                frase[cont] = ":"
                break 
            case ":":
                frase[cont] = ";"
                break 
            default:
                frase[cont] = "  "
                break    
        }

        cont--
    }

    decifrado.innerHTML = frase.join("")
    
})

