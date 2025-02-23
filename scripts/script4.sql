create table usuario (
	id int AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) not null,
  senha varchar(500) not null
);

CREATE UNIQUE INDEX usuario_unico
ON usuario(nome);
