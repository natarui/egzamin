function funkcja(){

    let wartosc = document.getElementById("liczba").value;
    let tabela = document.querySelectorAll("table td");

    tabela[0].style.backgroundColor = `hsl(${wartosc}, 100%, 50%)`;
    tabela[1].style.backgroundColor = `hsl(${wartosc}, 80%, 50%)`;
    tabela[2].style.backgroundColor = `hsl(${wartosc}, 60%, 50%)`;
    tabela[3].style.backgroundColor = `hsl(${wartosc}, 40%, 50%)`;
    tabela[4].style.backgroundColor = `hsl(${wartosc}, 20%, 50%)`;

}