import { Endereco } from "./endereco.model";

export interface Usuario {
    nome: string;
    cpf: string;
    email: string;
    telefone?: string;
    hashSenha?: string;
    perfil?: string;
    endereco?: Endereco;
}