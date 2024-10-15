document.getElementById('spinButton').addEventListener('click', function() {
    const resultados = ['🍒', '🍋', '🍊', '🍉', '🍇'];
    const cells = document.querySelectorAll('.cell');
    
    // Preenche as células com resultados aleatórios
    cells.forEach(cell => {
        const resultado = resultados[Math.floor(Math.random() * resultados.length)];
        cell.textContent = resultado;
        cell.classList.remove('line'); // Remove a classe de linha anterior, se houver
    });

    // Verifica se há uma linha ganhadora
    checkWinner(cells);
});

function checkWinner(cells) {
    const resultados = ['🍒', '🍋', '🍊', '🍉', '🍇'];
    
    // Função auxiliar para verificar se todos os elementos em uma linha são iguais
    function verificarLinha(linha) {
        return linha.every(cell => cell.textContent === linha[0].textContent);
    }

    // Verifica linhas horizontais
    for (let i = 0; i < 16; i += 4) {
        const linha = [cells[i], cells[i + 1], cells[i + 2], cells[i + 3]];
        if (verificarLinha(linha)) {
            linha.forEach(cell => cell.classList.add('line'));
            document.getElementById('message').textContent = 'Você ganhou!';
            return;
        }
    }

    // Verifica linhas verticais
    for (let i = 0; i < 4; i++) {
        const linha = [cells[i], cells[i + 4], cells[i + 8], cells[i + 12]];
        if (verificarLinha(linha)) {
            linha.forEach(cell => cell.classList.add('line'));
            document.getElementById('message').textContent = 'Você ganhou!';
            return;
        }
    }

    // Verifica diagonais
    const diagonal1 = [cells[0], cells[5], cells[10], cells[15]];
    const diagonal2 = [cells[3], cells[6], cells[9], cells[12]];

    if (verificarLinha(diagonal1)) {
        diagonal1.forEach(cell => cell.classList.add('line'));
        document.getElementById('message').textContent = 'Você ganhou!';
        return;
    }

    if (verificarLinha(diagonal2)) {
        diagonal2.forEach(cell => cell.classList.add('line'));
        document.getElementById('message').textContent = 'Você ganhou!';
        return;
    }

    // Caso contrário, exibe uma mensagem para tentar novamente
    document.getElementById('message').textContent = 'Tente novamente!';
}
