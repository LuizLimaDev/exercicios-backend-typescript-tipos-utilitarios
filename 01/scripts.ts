type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

type cadastroUsuarioSemRG = Required<Omit<Usuario, "rg">>;

const cadastrarUsuário = (info: Usuario): Usuario => {
  return info;
};
