create table tarefa (
  id int AUTO_INCREMENT PRIMARY key,
  titulo varchar(200) not null,
  descricao text,
  status enum('pendente','em progresso', 'concluída') DEFAULT 'pendente',
  data_criacao timestamp default CURRENT_TIMESTAMP,
  prioridade enum('baixa', 'media', 'alta') DEFAULT 'media',
  projeto_id int not null,
  FOREIGN KEY (projeto_id) REFERENCES projeto(id) on delete cascade
);