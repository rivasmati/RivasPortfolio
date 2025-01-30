let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];

let banco = {
    clientes : arrayCuentas,

    consultarCliente: function(titular){
        for (i = 0; i < this.clientes.length; i++){

            if(titular === this.clientes[i].titularCuenta){
                return this.clientes[i]
            }
        }
    },

    deposito: function(titular_cuenta, cantidad_dinero){
        let cuenta = this.consultarCliente(titular_cuenta);
        cuenta.saldoEnPesos += cantidad_dinero
        return "Deposito realizado su nuevo saldo es: " + cuenta.saldoEnPesos
    },

    extraccion: function(titular_cuenta, cantidad_dinero){
        let cuenta = this.consultarCliente(titular_cuenta);
        cuenta.saldoEnPesos -= cantidad_dinero
        if(cuenta.saldoEnPesos < 0){
            return "Fondos insuficientes"
        }else{
            return "Deposito realizado su nuevo saldo es: " + cuenta.saldoEnPesos
        }
    }

}

let clienteEncontrado = banco.consultarCliente("Ansel Ardley");
let depositoRealizado = banco.deposito("Jacki Shurmer", 2);
let extraccionRealizada = banco.extraccion("Ramon Connell",8000);


console.log(extraccionRealizada)