module.exports = class Calculadora {
    calcularSalario({ cargo, salarioBase }) {
        switch (cargo) {
            case 'DESENVOLVEDOR':
                if (salarioBase >= 3000) {
                    return salarioBase * 0.8;
                } 
                return salarioBase * 0.9;
            case 'DBA':
                if (salarioBase >= 2000) {
                    return salarioBase * 0.75;
                } 
                return salarioBase * 0.85;
            case 'TESTADOR':
                if (salarioBase >= 2000) {
                    return salarioBase * 0.75;
                } 
                return salarioBase * 0.85;
            case 'GERENTE':
                if (salarioBase >= 5000) {
                    return salarioBase * 0.70;
                } 
                return salarioBase * 0.80;
        }
    }
}