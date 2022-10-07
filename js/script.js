function Eq2Grau() {
    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);
    const c = Number(document.querySelector('#c').value);
    const reply = document.querySelector('#reply');
    let delta = 0;
    let valorDeX = 0;
    let valorDeX1 = 0;
    let valorDeX2 = 0;

    if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
        delta = (Math.pow(b, 2) - 4) * a * c;
        
        if (delta == 0) {
            valorDeX = (-(b)) / (2 * a);
            
            reply.innerHTML = `
                A raíz da equação ${a == 1 ? '' : a}x² ${b > 0 ? '+' : ''} ${b == 0 ? '' : b}${b != 0 ? 'x' : ''} ${c > 0 ? '+' : ''} ${c == 0 ? '' : c} = 0 é:
                <br>
                x = ${valorDeX}
            `;
        } else if (delta > 0) {
            valorDeX1 = (-(b) + Math.sqrt(delta)) / (2 * a);
            valorDeX2 = (-(b) - Math.sqrt(delta)) / (2 * a);
            
            reply.innerHTML = `
                As raízes da equação ${a == 1 ? '' : a}x² ${b > 0 ? '+' : ''} ${b == 0 ? '' : b}${b != 0 ? 'x' : ''} ${c > 0 ? '+' : ''} ${c == 0 ? '' : c} = 0 são:
                <br>
                x¹ = ${valorDeX1}
                <br>
                x² = ${valorDeX2}
            `;
        } else {
            reply.innerHTML = `${delta} delta negativo, logo não temos raízes reais.`;
        }
    } else {
        reply.innerHTML = "Apenas números são válidos!";
    }
}