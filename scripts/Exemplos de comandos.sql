-- Exemplos de consultas
SELECT * FROM projeto; -- Todas as colunas
select id from projeto; -- Só a coluna id
select nome from projeto; -- Só a coluna nome
select id, nome from projeto; -- As duas colunas

-- Exemplos de consultas com where (condição)
select * from projeto where nome like '%Gu%';
select * from projeto where id = 2;

-- Exemplo de exclusão de registros
-- delete from projeto;
-- delete from projeto where id = 3;

-- Atualizar registros
update projeto set nome = 'XXX' where id = 1;