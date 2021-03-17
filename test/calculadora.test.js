const Calculadora = require('../lib/calculadora');
const Schema = require('validate');

const calculadora = new Calculadora();

const funcionarioSchema = new Schema({
    nome: String,
    email: String,
    salarioBase: Number,
    cargo: String
})

describe('Testa classe calculadora de salário', () => {
    
    describe('DESENVOLVEDOR salario maior que 3000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 4000,
            cargo: 'DESENVOLVEDOR',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(3200)
    })

    describe('DESENVOLVEDOR salario menor que 3000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 2000,
            cargo: 'DESENVOLVEDOR',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(1800)
    })

    describe('DBA salario maior que 2000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 3000,
            cargo: 'DBA',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(2250)
    })

    describe('DBA salario menor que 2000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 1500,
            cargo: 'DBA',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(1275)
    })

    describe('TESTADOR salario maior que 2000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 2500,
            cargo: 'TESTADOR',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(1875)
    })

    describe('TESTADOR salario menor que 2000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 1000,
            cargo: 'TESTADOR',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(850)
    })

    describe('GERENTE salario maior que 5000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 6000,
            cargo: 'GERENTE',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(4200)
    })
    
    describe('GERENTE salario menor que 5000', () => {
        const funcionario = {
            nome: 'Teste',
            email: 'teste@gmail.com',
            salarioBase: 3000,
            cargo: 'GERENTE',
        }
        const errors = funcionarioSchema.validate(funcionario);

        expect(errors).toHaveLength(0);

        const calcSalario = calculadora.calcularSalario(funcionario)
        expect(calcSalario).toBe(2400)
    })
})