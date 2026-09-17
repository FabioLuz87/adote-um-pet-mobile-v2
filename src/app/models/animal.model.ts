import { Endereco } from "./endereco.model";

export interface Animal {
  id?: number;
  nome: string;
  especie?: string;
  raca?: string;
  sexo?: string;
  idade?: number;
  peso?: number;
  descricao?: string;
  status?: string;
  idEntidade?: number;
  endereco?: Endereco;
}