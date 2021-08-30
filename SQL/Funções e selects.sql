-- Questão 1
 -- função
CREATE OR REPLACE FUNCTION recalcular()
RETURNS trigger AS
$BODY$

BEGIN
       IF (TG_TABLE_NAME = 'nota') THEN
         UPDATE matricula ma SET nota_media = 
         (select avg(valor) from nota where fk_matricula = ma.pk_matricula);
       END IF;
   
       IF (TG_TABLE_NAME = 'frequencia') THEN
         UPDATE matricula ma SET frequencia_total = 
         (select avg(valor) from frequencia where fk_matricula = ma.pk_matricula);
       END IF;
  RETURN null;
END
$BODY$
  LANGUAGE plpgsql;
------------------------------------------------------------------------------------
-- Gatinho nota
Create trigger atualizar_nota
  after Insert or Update or Delete
  On nota
  For Each Row
  Execute procedure recalcular();
------------------------------------------------
-- Gatinho frequecia
Create trigger atualizar_frequencia
  after Insert or Update or Delete
  On frequencia
  For Each Row
  Execute procedure recalcular();  
  
-----------------------------------------------------------------------------------------------------------------------------------

-- Questão 3
-- letra a
  Select * from aluno 
  Where sexo = 'm';
  
------------------------------------------------
-- letra b
  Select nome, nascimento from aluno 
  Where sexo = 'f';
  
------------------------------------------------
-- letra c
  Select * from aluno a
  Join matricula m on a.pk_aluno = m.fk_aluno
  Join disciplina d on d.pk_disciplina = m.fk_disciplina
  Where extract ("year" from now()) - extract ("year"
  from a.nascimento) > 16 and d.nome = 'Lógica';
  
------------------------------------------------
-- letra d
  Select nome from aluno 
  Where cpf 
  In (Select cpf from funcionario);
  
------------------------------------------------
-- letra e
  Select nome, cpf from funcionario 
  Where cargo = 'professor';
  
------------------------------------------------
-- letra f
  Select nome, cpf from funcionario 
  Where pk_funcionario 
  In (select fk_professor_coordenador from curso); 
  
------------------------------------------------
-- letra g
  Select f.nome, d.nome, periodo, turno from funcionario f 
  Join disciplina d on f.pk_funcionario = d.fk_professor;
  
------------------------------------------------
-- letra h - (tamo sem curso de Agro);
  Select * from disciplina 
  Where fk_curso 
  In (Select pk_curso from  curso where nome = 'ALI');
  
------------------------------------------------
-- letra i
  Select a.* from aluno a 
  Join matricula m on a.pk_aluno = m.fk_aluno
  Join disciplina d on d.pk_disciplina = m.fk_disciplina
  Where turno = 'Matutino';
  
------------------------------------------------
-- letra j
  Select distinct a.nome from aluno a
  Join curso c on c.nome = 'TSI'  
  Join disciplina d on d.fk_curso = pk_curso and d.turno = 'Noturno'
  Join matricula m  on m.fk_disciplina = d.pk_disciplina 
  Where d.periodo = '3º' and fk_aluno = pk_aluno;
  
------------------------------------------------
-- letra k
  Select nome, ano_criacao from curso
  Where extract ("year" from now()) - ano_criacao > 10;
  
------------------------------------------------
-- letra l - tamo sem curso de agro
  Select distinct f.nome, f.rg, f.cpf from funcionario f
  Join disciplina d on fk_professor = pk_funcionario
  Join curso c      on fk_curso = pk_curso
  Where c.nome = 'TSI';
  
------------------------------------------------
-- letra m - tamo sem Fundamentos da Informática
  Select a.nome, a.nascimento from aluno a 
  Join disciplina d on d.nome = 'POO'
  Join matricula m  on pk_aluno = fk_aluno and fk_disciplina = pk_disciplina;
  
------------------------------------------------
-- letra n - tem curso de ALI, mas tamo se Dependencias nele...
  Select a.nome, d.nome from aluno a
  Join curso c on c.nome = 'BCC'
  Join disciplina d on fk_curso = pk_curso
  Join matricula m  on m.fk_disciplina = d.pk_disciplina 
  Where m.dependencia and m.fk_aluno = a.pk_aluno;
  
------------------------------------------------
-- letra o -  tamo sem curso de manutenção
  Select distinct a.nome, d.nome, f.valor from aluno a
  Join curso c      on c.nome = 'BCC'  
  Join disciplina d on d.fk_curso = pk_curso
  Join matricula m  on m.fk_disciplina = pk_disciplina
  Join frequencia f on fk_matricula = pk_matricula
  Where pk_aluno = fk_aluno;
  
------------------------------------------------
-- letra p - ninguem tirou nota menor q 3, stonks
  Select distinct a.nome, d.nome from aluno a
  Join matricula m  on fk_aluno = pk_aluno
  Join disciplina d on fk_disciplina = pk_disciplina
  Join nota n       on pk_matricula = fk_matricula 
  Where n.valor < 3;
  
------------------------------------------------
-- letra q - eu acho q a frequencia ta em porcentagem, mas n é uma certeza...
  Select distinct a.nome, d.nome from aluno a
  Join matricula m  on fk_aluno = pk_aluno
  Join disciplina d on fk_disciplina = pk_disciplina
  Join nota n       on m.pk_matricula = fk_matricula
  Join frequencia f on pk_matricula = f.fk_matricula
  Where f.valor > 70 and n.valor < 4;
  
------------------------------------------------
-- letra r - tamo sem a disciplina do enunciado
  Select a.nome, c.nome from aluno a
  Join matricula m  on M.fk_aluno = a.pk_aluno
  Join disciplina d on d.pk_disciplina =  m.fk_disciplina
  Join curso c on pk_curso = fk_curso -- temos pessoas com mesmo nome só que em cursos diferentes (podem ser a msm pessoa, por falta de pessoal...)
  Where d.nome = 'POO' and sexo = 'm'
  And pk_aluno not in 
  (Select pk_aluno from aluno a
  Join matricula m  on m.fk_aluno = a.pk_aluno
  Join disciplina d on d.pk_disciplina =  m.fk_disciplina
  Where d.nome = 'BD'); 

------------------------------------------------
-- letra s - tamo sem pessoal pra dar aula, por isso o resultado com essa base de dados volta vazio
  Select distinct f.nome from funcionario f
  Join disciplina d on fk_professor = pk_funcionario 
  Join curso c      on fk_curso = pk_curso
  Where c.nome = 'BCC' 
  And fk_professor not in
  (Select fk_professor from funcionario f
  Join disciplina d on fk_professor = pk_funcionario 
  Join curso c      on fk_curso = pk_curso
  Where c.nome = 'TSI');

------------------------------------------------
-- letra t
  Select distinct f.nome, count(pk_aluno) as num_alunos_dependencia from funcionario f
  Join matricula m  on dependencia
  Join aluno a on pk_aluno = fk_aluno
  Join disciplina d on pk_disciplina = m.fk_disciplina 
  Where fk_professor = pk_funcionario
  Group by f.nome;

------------------------------------------------
-- letra u
  Select d.nome, avg(nota_media) from matricula
  Join disciplina d on pk_disciplina = fk_disciplina
  Where d.nome = 'POO'
  Group by d.nome;

------------------------------------------------
-- letra v - tamo sem curso de desenvolvimento
  Select c.nome, Max(valor), Min(valor) from frequencia f
  Join matricula m  on pk_matricula = f.fk_matricula
  Join disciplina d on pk_disciplina = m.fk_disciplina 
  Join curso c      on pk_curso = fk_curso
  Where c.nome = 'ALI'
  Group by c.nome;

------------------------------------------------
-- letra w
  Select a.nome from aluno a 
  Join funcionario f on a.cpf = f.cpf
  Where f.cpf not in (Select cpf from funcionario Where cargo = 'professor');

------------------------------------------------
-- letra x
  Select nome from curso 
  Where pk_curso 
  Not in
  (Select distinct pk_curso from curso c, funcionario f
  Join aluno a     on a.cpf = f.cpf
  Join matricula m on fk_aluno = pk_aluno
  Join disciplina  on fk_disciplina = pk_disciplina
  Where pk_curso = fk_curso); 

------------------------------------------------
-- letra y
  Select distinct a.nome as alunos, d.nome as disciplinas, d.periodo, d.turno, nota_media as nota_media, f.valor as frequencia from aluno a
  Join curso c on c.nome = 'TSI'
  Join disciplina d on fk_curso = pk_curso
  Join matricula m  on fk_disciplina = pk_disciplina 
  Join frequencia f on f.fk_matricula = pk_matricula
  Where fk_aluno = pk_aluno;

------------------------------------------------
-- letra z
  Select d.nome,max(n.valor),min(n.valor),avg(nota_media) media  from matricula m   
  join disciplina d on d.pk_disciplina = m.fk_disciplina
  join nota n on n.fk_matricula = m.pk_matricula
  Group by d.nome;
  
------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------

-- Questão 4
-- letra a
  Create view Numero_alunos_dependencia_cada_curso as 
    Select c.nome as curso, Count(dependencia) as N_alunos_dependencia from curso c
    Join disciplina on pk_curso = fk_curso
    Join matricula on pk_disciplina = fk_disciplina
    Where dependencia
    Group by c.nome;
    
------------------------------------------------
-- letra b
  Create view Disciplinas_quantidade_alunos as
    Select d.nome as disciplina, periodo, turno , Count(fk_disciplina) from  disciplina d
    Join matricula on fk_disciplina = pk_disciplina
    Group by disciplina, periodo, turno;

------------------------------------------------
-- letra c
  Create view Professores_lecionam_mas_3_disciplinas as
    Select f.nome, count(*) as Disciplinas_lecionadas  from funcionario f
    Join curso c on fk_professor_coordenador = pk_funcionario
    Join disciplina on fk_professor = pk_funcionario
    Group by f.nome
    Having count(*) > 3;

------------------------------------------------
-- letra d
Create view Professores_coor_mediadisciplinas_menor6 as
    Select distinct f.nome as funcionario, d.nome as disciplina, avg(nota_media) as nota from funcionario f, curso c   
    Join disciplina d on fk_professor = fk_professor_coordenador
    Join matricula m  on fk_disciplina = pk_disciplina
    Join nota n on fk_matricula = pk_matricula
    Where pk_funcionario = fk_professor_coordenador
    Group by f.nome, d.nome 
    Having avg(nota_media) < 6;

------------------------------------------------
-- letra e
    Create view faltas_cada_disciplina_aluno as 
    Select distinct a.nome as aluno, d.nome as disciplina, (carga_horaria - frequencia_total) as qtd_faltas from disciplina d
    Join matricula m  on fk_disciplina = pk_disciplina
    Join nota n on fk_matricula = pk_matricula
    Join aluno a on fk_aluno = pk_aluno; 

-----------------------------------------------------------------------------------------------------------------------------------
    
-- Questão 5
-- letra a
    Select a.nome as aluno, d.nome as disciplina, nota_media, avg(valor) as media from matricula 
    Join nota on fk_matricula = pk_matricula
    Join aluno a on pk_aluno = fk_aluno
    Join disciplina d on pk_disciplina = fk_disciplina
    Group by aluno, disciplina, nota_media
    Having avg(valor) <> nota_media;
    
------------------------------------------------
-- letra b
    Select a.nome as aluno, d.nome as disciplina, frequencia_total, sum(valor) as total, carga_horaria from matricula 
    Join frequencia on fk_matricula = pk_matricula
    Join aluno a on pk_aluno = fk_aluno
    Join disciplina d on pk_disciplina = fk_disciplina
    Group by aluno, disciplina, frequencia_total, carga_horaria
    Having sum(valor) <> frequencia_total and frequencia_total <> carga_horaria;

------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------