function Eq2Grau() {
  const a = parseInt(document.querySelector("#a").value) || 0;
  const b = parseInt(document.querySelector("#b").value) || 0;
  const c = parseInt(document.querySelector("#c").value) || 0;
  const reply = document.querySelector("#reply");
  let delta = 0;
  let valorDeX = 0;
  let valorDeX1 = 0;

  if (a === 0) {
    reply.innerHTML = "A equação não é de segundo grau!";
  } else if (b === 0) {
    valorDeX = Math.sqrt(-c / a);
    valorDeX1 = -Math.sqrt(-c / a);

    reply.innerHTML = `
            As raízes da equação ${a === 1 ? "" : a}x² ${b > 0 ? "+" : ""} ${
      b === 0 ? "" : b
    }${b != 0 ? "x" : ""} ${c > 0 ? "+" : ""} ${c === 0 ? "" : c} = 0 são:

            <br>
            x¹ = ${valorDeX}
            <br>
            x² = ${valorDeX1}
        `;
  } else if (c === 0) {
    valorDeX = -b / a;

    reply.innerHTML = `
            As raízes da equação ${a === 1 ? "" : a}x² ${b > 0 ? "+" : ""} ${
      b === 0 ? "" : b
    }${b != 0 ? "x" : ""} ${c > 0 ? "+" : ""} ${c === 0 ? "" : c} = 0 são:

            <br>
            x = ${valorDeX}
        `;
  } else {
    delta = b * b - 4 * a * c;

    if (delta === 0) {
      valorDeX = -b / (2 * a);

      reply.innerHTML = `
                A raíz da equação ${a === 1 ? "" : a}x² ${b > 0 ? "+" : ""}
                ${b === 0 ? "" : b}${b != 0 ? "x" : ""} 
                ${c > 0 ? "+" : ""} ${c === 0 ? "" : c} = 0 é:
                <br>
                x = ${valorDeX}
            `;
    } else if (delta > 0) {
      valorDeX = (-b + Math.sqrt(delta)) / (2 * a);
      valorDeX1 = (-b - Math.sqrt(delta)) / (2 * a);

      reply.innerHTML = `
                A raíz da equação ${a === 1 ? "" : a}x² ${b > 0 ? "+" : ""}
                ${b === 0 ? "" : b}${b != 0 ? "x" : ""} 
                ${c > 0 ? "+" : ""} ${c === 0 ? "" : c} = 0 é:
                <br>
                x = ${valorDeX}
                <br>
                x² = ${valorDeX1}
            `;
    } else {
      reply.innerHTML = `${delta} delta negativo, logo não temos raízes reais.`;
    }
  }
}
