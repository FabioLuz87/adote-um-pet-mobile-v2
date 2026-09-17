import { Endereco } from "./endereco.model";

export interface EntidadeAcolhedora {
    nome?: string;
    cnpj?: string;
    endereco?: Endereco
}