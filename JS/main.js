var numero, ant, numc, signo, save;
var aux = 0;
var resucom = 0;
var comp = false;
var resuma = 0;
var resdivision = 0;
var resmultiplicacion = 0;
var resresta = 0;
var savesuma = 0;
var saveresta = 0;
var savemultiplicacion = 0;
var savedivision = 0;
var cont = 1;
var contp = 0;
var mostrar = 0;

// var entrada = document.getElementById('entrada');
// entrada.addEventListener('keypress',anexar);
// var borrar = document.getElementById('borrar');
// borrar.addEventListener('click',limpiar);
// var salida = document.getElementById('salida');

// function anexar(e){
//   salida.innerHTML += e.key + '<br />';
// }

function numeros(numero) {
    if (contp > 0 && numero === '.') {
        return false;
    }
    comp = true;
    if (cont > 1) {
        aux = mostrar;
        mostrar = ant + '' + numero;
        if (numero === '.') {
            alert('entro')
            contp++;
        }
        ant = mostrar;
        numc = parseFloat(ant);
        document.querySelector('.res').value = (mostrar);
        document.querySelector('.resmuestra').classList.add('resmuestradesoc');
        document.querySelector('.resigual').classList.add('resmuestradesoc');
        if (savesuma != 0 || savedivision != 0 || savemultiplicacion != 0 || saveresta != 0) {
            document.querySelector('.resmuestra').value = (save + signo + mostrar);
            if (signo == ' + ') {
                resucom = save + numc;
            }
            if (signo === ' x ') {
                resucom = save * numc;
            }
            if (signo === ' ÷ ') {
                resucom = save / numc;
            }
            if (signo === ' - ') {
                resucom = numero - save;
            }
            document.querySelector('.resigual').value = (' = ' + resucom);
        } else {
            document.querySelector('.resmuestra').value = (mostrar);
        }
    } else {
        aux = ant;
        numc = numero;
        document.querySelector('.res').value = (numero);
        document.querySelector('.resmuestra').classList.add('resmuestradesoc');
        document.querySelector('.resigual').classList.add('resmuestradesoc');
        if (savesuma != 0 || savedivision != 0 || savemultiplicacion != 0 || saveresta != 0) {
            document.querySelector('.resmuestra').value += (signo + numero);
            if (signo == ' + ') {
                resucom = save + numero;
            }
            if (signo === ' x ') {
                // alert(save)
                resucom = save * numero;
            }
            if (signo === ' ÷ ') {
                resucom = save / numero;
            }
            if (signo === ' - ') {
                resucom = save - numero;
            }
            document.querySelector('.resigual').value = (' = ' + resucom);
        } else {
            document.querySelector('.resmuestra').value = (numero);
        }
        ant = numero;
        cont++;
    }
}

function suma() {
    if (savedivision != 0 || savemultiplicacion != 0 || saveresta != 0) {
        numc = resucom;
    }
    comp = false;
    savesuma = numc;
    if (resucom === 0) {
        resuma = savesuma + resuma;
    } else {
        resuma = resucom;
    }
    signo = ' + ';
    document.querySelector('.res').value = (signo);
    cont = 1;
    save = resuma;
    contp = 0;
    // contsuma++;
}

function resta() {
    if (savesuma != 0 || savedivision != 0 || savemultiplicacion != 0) {
        numc = resucom;
    }

    comp = false;
    saveresta = numc;
    if (resucom === 0) {
        resresta = saveresta - resresta;
    } else {
        resresta = resucom;
    }
    signo = ' - ';
    document.querySelector('.res').value = (signo);
    cont = 1;
    save = resresta;
    contp = 0;
}

function multiplicacion() {
    if (savesuma != 0 || savedivision != 0 || saveresta != 0) {
        numc = resucom;
    }

    comp = false;
    savemultiplicacion = numc;
    if (resmultiplicacion === 0) {
        resmultiplicacion = savemultiplicacion + resmultiplicacion;
    } else {
        if (resucom === 0) {
            resmultiplicacion = savemultiplicacion * resmultiplicacion;
        } else {
            resmultiplicacion = resucom;
        }
    }
    signo = ' x ';
    document.querySelector('.res').value = (signo);
    cont = 1;
    save = resmultiplicacion;
    contp = 0;
    // contmult++;
}

function division() {
    if (savesuma != 0 || savemultiplicacion != 0 || saveresta != 0) {
        numc = resucom;
    }

    comp = false;
    savedivision = numc;
    if (resmultiplicacion === 0) {
        resdivision = savedivision + resdivision;
    } else {
        if (resucom === 0) {
            resdivision = savedivision / resdivision;
        } else {
            resdivision = resucom;
        }
    }
    signo = ' ÷ ';
    document.querySelector('.res').value = (signo);
    cont = 1;
    save = resdivision;
    contp = 0;
    // contdiv++;
}

function igual() {
    if (savesuma != 0 || savedivision != 0 || savemultiplicacion != 0 || saveresta != 0) {
        document.querySelector('.res').value = (resucom);
        value();
    }
}

function value() {
    numero = 0;
    ant = 0;
    numc = 0;
    signo = 0;
    comp = false;
    resuma = 0;
    resdivision = 0;
    resmultiplicacion = 0;
    resresta = 0;
    savesuma = 0;
    saveresta = 0;
    savemultiplicacion = 0;
    savedivision = 0;
    mostrar = 0;
    contp = 0;
    document.querySelector('.resmuestra').classList.remove('resmuestradesoc');
    document.querySelector('.resigual').classList.remove('resmuestradesoc');
    document.querySelector('.resigual').value = ('');
}

function c() {
    value();
    ce();
}

function ce() {
    document.querySelector('.res').value = (0);
    document.querySelector('.resmuestra').value = (aux);
    document.querySelector('.resigual').value = ('');
    cont = 1;
    numero = 0;
    save = aux;
    resucom = 0;
    signo = '';
    numero(numero);
}