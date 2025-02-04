create table categoria (
	id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100) not null
);

alter table projeto add COLUMN categoria_id int, add CONSTRAINT fk_projetos_categoria foreign key (categoria_id) 
references categoria(id);