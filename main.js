let parqueadero = [];
let opcion = 0;
const TarifaPorHora = 2000;

function HoraActual() {
  let HoraReal = 0;
  const ahora = new Date();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes() / 100;
  HoraReal = hora + minutos;
  return HoraReal;
}
while (opcion !== "4") {
  opcion = prompt(
    "MENU PARQUEADERO MALL\n" +
      "1. Registrar entrada.\n" +
      "2. Registrar salida y calcular pago.\n" +
      "3. Ver vehiculos actuales.\n" +
      "4. Salir"
  );

  switch (opcion) {
    case "1":
      let PlacaEntrada = prompt("Ingrese la placa de su vehiculo: ");
      let HoraEntrada = HoraActual();
      parqueadero.push({ placa: PlacaEntrada, hora: HoraEntrada });
      alert(
        `Vehiculo con placa ${PlacaEntrada} registrado a las ${HoraEntrada}`
      );
      break;

    case "2":
      let PlacaSalida = prompt(
        "Ingrese la placa de su vehiculo para la salida: "
      );
      let HoraSalida = HoraActual();
      let encontrado = true;
      for (let i = 0; i < parqueadero.length; i++) {
        if (parqueadero[i].placa === PlacaSalida) {
          let horas = HoraSalida - parqueadero[i].hora;
          if (horas <= 0) {
            alert(
              "La hora de salida no puede ser menor o igual a la de entrada."
            );
          }
          let total = horas * TarifaPorHora;
          alert(
            `Tiempo: ${horas.toFixed(
              2
            )} horas\nTotal a pagar: $ ${total.toFixed(0)}`
          );
          parqueadero.splice(i, 1);
          encontrado = true;
          break;
        }
      }
      if (!encontrado) {
        alert("VEHICULO NO ENCONTRADO");
      }
      break;

    case "3":
      if (parqueadero.length === 0) {
        alert("NO HAY VEHICULOS EN EL PARQUEADERO");
      } else {
        let lista = "VEHICULOS ACTUALES: \n";
        for (let i = 0; i < parqueadero.length; i++) {
          lista += `${i + 1}. ${parqueadero[i].placa} - Entrada: ${parqueadero[
            i
          ].hora.toFixed(2)}\n`;
        }
        console.log(lista); //SE MUESTRA EN LA CONSOLA
      }
      break;

    case "4":
      alert("Saliendo del sistema.");
      break;

    default:
      alert("Opción invalida, intenta nuevamente");
      break;
  }
}
