/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/



const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];

let proximoIdHotel = 1;
let proximoIdReserva = 1;

function adicionarHotel() {
  console.log("\nAdicionar novo hotel");
  const nome = prompt("Nome do hotel: ").trim();
  const cidade = prompt("Cidade: ").trim();
  const quartosTotais = parseInt(prompt("Quantidade total de quartos: "));
  if (!nome || !cidade || isNaN(quartosTotais) || quartosTotais <= 0) {
    console.log("Dados inválidos, tente novamente.");
    return;
  }

  const hotel = {
    id: proximoIdHotel++,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais,
    avaliacoes: []
  };
  hoteis.push(hotel);
  console.log(`Hotel "${nome}" adicionado com sucesso!`);
}

function buscarHoteisPorCidade() {
  const cidadeBusca = prompt("\nDigite a cidade para buscar hotéis: ").trim();
  const encontrados = hoteis.filter(h => h.cidade.toLowerCase() === cidadeBusca.toLowerCase() && h.quartosDisponiveis > 0);

  if (encontrados.length === 0) {
    console.log("Nenhum hotel disponível nesta cidade.");
  } else {
    console.log(`Hotéis disponíveis em ${cidadeBusca}:`);
    encontrados.forEach(h => {
      console.log(`ID: ${h.id}, Nome: ${h.nome}, Quartos disponíveis: ${h.quartosDisponiveis}`);
    });
  }
}

function fazerReserva() {
  console.log("\nFazer reserva");
  const idHotel = parseInt(prompt("Digite o ID do hotel para reservar: "));
  const hotel = hoteis.find(h => h.id === idHotel);

  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }
  if (hotel.quartosDisponiveis <= 0) {
    console.log("Não há quartos disponíveis nesse hotel.");
    return;
  }

  const nomeCliente = prompt("Nome do cliente: ").trim();
  if (!nomeCliente) {
    console.log("Nome inválido.");
    return;
  }

  const reserva = {
    idReserva: proximoIdReserva++,
    idHotel: hotel.id,
    nomeCliente,
    checkin: false,
    checkout: false
  };
  reservas.push(reserva);
  hotel.quartosDisponiveis--;
  console.log(`Reserva feita com sucesso! ID da reserva: ${reserva.idReserva}`);
}

function cancelarReserva() {
  console.log("\nCancelar reserva");
  const idReserva = parseInt(prompt("Digite o ID da reserva a cancelar: "));
  const index = reservas.findIndex(r => r.idReserva === idReserva);

  if (index === -1) {
    console.log("Reserva não encontrada.");
    return;
  }

  const reserva = reservas[index];
  const hotel = hoteis.find(h => h.id === reserva.idHotel);

  if (hotel && !reserva.checkout) {
    hotel.quartosDisponiveis++;
  }

  reservas.splice(index, 1);
  console.log("Reserva cancelada com sucesso!");
}

function listarReservas() {
  console.log("\nListar todas as reservas");
  if (reservas.length === 0) {
    console.log("Nenhuma reserva cadastrada.");
    return;
  }

  reservas.forEach(r => {
    const hotel = hoteis.find(h => h.id === r.idHotel);
    const status = r.checkout ? "Check-out" : r.checkin ? "Check-in" : "Pendente";
    console.log(`ID Reserva: ${r.idReserva} | Cliente: ${r.nomeCliente} | Hotel: ${hotel?.nome} | Cidade: ${hotel?.cidade} | Status: ${status}`);
  });
}

function fazerCheckin() {
  console.log("\nCheck-in");
  const idReserva = parseInt(prompt("Digite o ID da reserva: "));
  const reserva = reservas.find(r => r.idReserva === idReserva);

  if (!reserva || reserva.checkin) {
    console.log("Reserva não encontrada ou já foi feito check-in.");
    return;
  }

  reserva.checkin = true;
  console.log("Check-in realizado com sucesso.");
}

function fazerCheckout() {
  console.log("\nCheck-out");
  const idReserva = parseInt(prompt("Digite o ID da reserva: "));
  const reserva = reservas.find(r => r.idReserva === idReserva);

  if (!reserva || !reserva.checkin || reserva.checkout) {
    console.log("Check-in não realizado ou check-out já feito.");
    return;
  }

  reserva.checkout = true;
  const hotel = hoteis.find(h => h.id === reserva.idHotel);
  if (hotel) {
    hotel.quartosDisponiveis++;
  }

  console.log("Check-out realizado com sucesso.");
}

function avaliarHotel() {
  console.log("\nAvaliar hotel");
  const idHotel = parseInt(prompt("Digite o ID do hotel: "));
  const hotel = hoteis.find(h => h.id === idHotel);

  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }

  const nota = parseFloat(prompt("Digite uma nota de 0 a 10: "));
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Nota inválida.");
    return;
  }

  hotel.avaliacoes.push(nota);
  console.log("Avaliação registrada com sucesso.");
}

function relatorioOcupacao() {
  console.log("\nRelatório de Ocupação");
  hoteis.forEach(h => {
    const ocupados = h.quartosTotais - h.quartosDisponiveis;
    const percentual = ((ocupados / h.quartosTotais) * 100).toFixed(1);
    const media = h.avaliacoes.length ? (h.avaliacoes.reduce((a, b) => a + b) / h.avaliacoes.length).toFixed(1) : "Sem avaliações";
    console.log(`Hotel: ${h.nome} | Ocupação: ${ocupados}/${h.quartosTotais} (${percentual}%) | Média Avaliações: ${media}`);
  });
}

function menu() {
  console.log("\nSistema de Reserva de Hotéis");
  console.log("1 - Adicionar hotel");
  console.log("2 - Buscar hotéis por cidade");
  console.log("3 - Fazer reserva");
  console.log("4 - Cancelar reserva");
  console.log("5 - Listar reservas");
  console.log("6 - Fazer check-in");
  console.log("7 - Fazer check-out");
  console.log("8 - Avaliar hotel");
  console.log("9 - Relatório de ocupação");
  console.log("0 - Sair");
}

function main() {
  let opcao;
  do {
    menu();
    opcao = prompt("Escolha uma opção: ").trim();

    switch (opcao) {
      case "1": adicionarHotel(); break;
      case "2": buscarHoteisPorCidade(); break;
      case "3": fazerReserva(); break;
      case "4": cancelarReserva(); break;
      case "5": listarReservas(); break;
      case "6": fazerCheckin(); break;
      case "7": fazerCheckout(); break;
      case "8": avaliarHotel(); break;
      case "9": relatorioOcupacao(); break;
      case "0": console.log("Saindo..."); break;
      default: console.log("Opção inválida.");
    }
  } while (opcao !== "0");
}

main();

