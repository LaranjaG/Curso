Drop table aluno;

Create table aluno(
pk_aluno serial primary key,
nome varchar(50) NOT NULL,
nascimento date,
nome_pai varchar(60),
nome_mae varchar(50) NOT NULL,
cpf char(14) UNIQUE NOT NULL,
rg varchar(10) UNIQUE NOT NULL,
sexo char(1) CHECK(sexo='m' or sexo ='f'),
CONSTRAINT UNIQUE_NOMES UNIQUE (nome, nome_pai, nome_mae)
);
	
insert into aluno (nome, nascimento, nome_pai, nome_mae, cpf, rg, sexo) 
	values('Fulani', '16/04/2001', 'clau', 'nana', '70540', '001', 'f'),
	      ('Beutani', '02/08/1998', 'vlau', 'nene', '12345', '112', 'm'),
	      ('Fulani Jorge', '29/11/2001', 'clau', 'nana', '98787', '223', 'f'),
	      ('Fulani breutrani', '25/12/2000', 'cacw', 'veve', '77741', '334', 'm'),
	      ('Betrani da Silva Camargo', '26/05/2002', 'bii', 'gigi', '7054', '6405', 'f');

select * from aluno;

-----------------------------------------------------------------------------------------------------------------------------------

Drop table funcionario;

Create table funcionario(
pk_funcionario serial primary key,
nome varchar(60) NOT NULL, 
nascimento date, 
cpf char(14) UNIQUE NOT NULL, 
rg char(10) UNIQUE NOT NULL, 
sexo char(1) check(sexo = 'm' or sexo ='f'), 
cargo varchar(60)
);

insert into funcionario (nome, nascimento, cpf, rg, sexo, cargo)
		  values('Beutani', '02/08/1998', '12345', '112', 'm', 'professor'),
			('Vlausdinei', '03/12/1975', '55555', '445', 'm', 'diretor'),
			('Vaniamirian', '14/01/1988', '66459', '556', 'f', 'professor'),
			('Catacoquim da Silva', '26/02/1500', '77889', '667', 'f', 'professor'),
			('Vandiscreia', '28/02/1978', '99956', '778', 'f', 'TI');

select * from funcionario;

-----------------------------------------------------------------------------------------------------------------------------------

Drop table curso;

Create table curso(
pk_curso serial primary key, 
nome varchar(60) NOT NULL, 
fk_professor_coordenador int, 
ano_criacao int,
foreign key (fk_professor_coordenador) References funcionario(pk_funcionario)  
on delete set null
);

insert into curso(nome, fk_professor_coordenador,ano_criacao)
	   values('TSI', 1, 2009),
		 ('ALI', 3, 2010),
		 ('BCC', 4, 2017);
		 
select * from curso;

------------------------------------------------------------------------------------
--Função para checar se o coordenador é professor
	CREATE OR REPLACE FUNCTION professor()
	RETURNS trigger AS
	$BODY$
	BEGIN
	
	  IF NEW.fk_professor_coordenador in (Select pk_funcionario from funcionario Where cargo <> 'professor') THEN
	      RAISE EXCEPTION 'Funcionario que não é professor encontrado na lista de inserção'; 
	      RETURN NULL;
	  END IF;
	  
	  Return NEW;  
	 
	END
	$BODY$
	  LANGUAGE plpgsql;
	  
------------------------------------------------------------------------------------

-- Gatinho nota
Create trigger professor
  before Insert or Update
  On curso
  For Each Row
  Execute procedure professor();

-----------------------------------------------------------------------------------------------------------------------------------

Drop table disciplina;

Create table disciplina(
	pk_disciplina serial primary key,
	nome varchar(60) NOT NULL,
	periodo varchar(15) ,
	turno varchar(15),
	fk_professor int,
	fk_curso int,
	carga_horaria float,
	foreign key (fk_professor) references funcionario(pk_funcionario),
	foreign key (fk_curso) references curso(pk_curso),
	CONSTRAINT unique_disciplina UNIQUE(nome, periodo, turno),
	CONSTRAINT unique_disciplina_curso UNIQUE(nome, periodo, turno, fk_curso)
	);

Insert into disciplina
	(nome, periodo, turno, fk_professor, fk_curso, carga_horaria)
Values
	('Lógica', '1º', 'Noturno', 1, 1, 30.2),
	('POO', '3º','Noturno', 3, 1, 62.8),
	('Projeto de banco de dados', '2º', 'Noturno', 4, 1, 30),
        ('Desenho tecnico', '3º', 'Noturno', 1, 2, 32),
        ('Embalagens', '4º', 'Noturno', 3, 2, 33),
        ('Leite', '3º', 'Noturno', 4, 2, 45),
        ('BD', '3º', 'vespertino', 1, 3, 27),
        ('POO', '4º', 'Matutino', 3, 3, 72),
        ('MSOO', '3º', 'Vespertino', 4, 3, 31.5);
        
Select * from disciplina;

-----------------------------------------------------------------------------------------------------------------------------------

Drop table matricula;

Create table matricula(
	pk_matricula serial primary key,
	fk_aluno int,
	fk_disciplina int,
	dependencia boolean,
	nota_media float,
	frequencia_total float,
	foreign key (fk_aluno) references aluno(pk_aluno)
	on delete set null on update cascade,
	foreign key (fk_disciplina) references disciplina(pk_disciplina)
	on delete set null on update cascade
);



Insert into matricula
	(fk_aluno,fk_disciplina,dependencia, nota_media, frequencia_total)
Values
	(1,1,'FALSE', 6, 0),
	(2,1,'FALSE', 6.5, 0),
	(2,2, 'FALSE', 7, 0),
	(3,2, 'FALSE', 8, 0),
	(3,3, 'TRUE', 5.5, 0),
	(4,3, 'TRUE', 4.7, 0),
	(4,4, 'FALSE', 10, 0),
	(5,4, 'FALSE', 9.5, 0),
	(1,5, 'FALSE', 8, 0),
	(5,5, 'FALSE', 7.5, 0),
	(3,6, 'FALSE', 7, 0),
	(2,6, 'FALSE', 8, 0),
	(4,7, 'TRUE', 5.5, 0),
	(3,7, 'TRUE', 4.7, 0),
	(1,8, 'FALSE', 10, 0),
	(2,8, 'FALSE', 9.5, 0),
	(3,9, 'FALSE', 8, 0),
	(5,9, 'FALSE', 7.5, 0);

select * from matricula;

-----------------------------------------------------------------------------------------------------------------------------------

Drop table nota;

Create table nota(
	pk_nota serial primary key,
	fk_matricula int NOT NULL,
	valor decimal(10,2) NOT NULL,
	foreign key (fk_matricula) references matricula(pk_matricula)
	on delete cascade	
);

Insert into nota
	(fk_matricula, valor)
Values
	(1, 10),
	(1, 5),
	(2, 7),
	(2, 6),
	(3, 8),
	(3, 6),
	(4, 9.5),
	(4, 6.5),
	(5, 7),
	(5, 4),
	(6, 5.5),
	(6, 3.9),
	(7, 10),
	(7, 10),
	(8, 9),
	(8, 10),
	(9, 7),
	(9, 9),
	(10, 7),
	(10, 8),
	(11, 7),
	(11, 7),
	(12, 9),
	(12, 6),
	(13, 4),
	(13, 7),
	(14, 5.4),
	(14, 4),
	(15, 10),
	(15, 10),
	(16, 9),
	(16, 10),
	(17, 9),
	(17, 7),
	(18, 7),
	(18, 8);

Select * from nota;

-----------------------------------------------------------------------------------------------------------------------------------

Drop table frequencia;

Create table frequencia(
	pk_frequencia serial primary key,
	fk_matricula int NOT NULL,
	valor float NOT NULL,
	dia date,
	foreign key (fk_matricula) references matricula(pk_matricula)
	on delete cascade
);


Insert into frequencia
	(fk_matricula, valor, dia)
Values
	(1, 90, now()),
	(1, 98, now()),
	(2, 75, now()),
	(2, 74, now()),
	(3, 70, now()),
	(3, 50, now()),
	(4, 60, now()),
	(4, 68, now()),
	(5, 82, now()),
	(5, 64, now()),
	(6, 90, now()),
	(6, 98, now()),
	(7, 75, now()),
	(7, 74, now()),
	(8, 70, now()),
	(8, 50, now()),
	(9, 60, now()),
	(9, 68, now()),
	(10, 82, now()),
	(10, 64, now()),
	(11, 90, now()),
	(11, 98, now()),
	(12, 75, now()),
	(12, 74, now()),
	(13, 70, now()),
	(13, 50, now()),
	(14, 60, now()),
	(14, 68, now()),
	(15, 82, now()),
	(15, 64, now()),
	(16, 90, now()),
	(16, 98, now()),
	(17, 75, now()),
	(17, 74, now()),
	(18, 70, now()),
	(18, 50, now());

Select * from frequencia;

-----------------------------------------------------------------------------------------------------------------------------------