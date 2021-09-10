USE testes; /*Qual base de daados irá utilizar*/

DROP TABLE fabricantes;
DROP TABLE carros;

CREATE TABLE fabricantes
(
	id int not null auto_increment,
	fabricante varchar (60),
    qtd_carros int,
    PRIMARY KEY(id)
);

CREATE TABLE carros
(
	id int not null auto_increment,
	carro varchar (60),
    fk_fabricante int not null,
    PRIMARY KEY(id),
    FOREIGN KEY (fk_fabricante) REFERENCES fabricantes(id)
);

SELECT * FROM fabricantes;

INSERT INTO fabricantes (fabricante) VALUES('Ford');
INSERT INTO fabricantes (fabricante) VALUES('Renault');
INSERT INTO fabricantes (fabricante) VALUES('Checrolet');
INSERT INTO fabricantes (fabricante) VALUES('Fiat');
INSERT INTO fabricantes (fabricante) VALUES('Volks');

INSERT INTO carros (carro, fk_fabricante) VALUES('Ka', 1);
INSERT INTO carros (carro, fk_fabricante) VALUES('Fiesta', 1);
INSERT INTO carros (carro, fk_fabricante) VALUES('Prisma', 1);
INSERT INTO carros (carro, fk_fabricante) VALUES('Clio', 2);
INSERT INTO carros (carro, fk_fabricante) VALUES('Omega', 3);
INSERT INTO carros (carro, fk_fabricante) VALUES('Palio', 4);
INSERT INTO carros (carro, fk_fabricante) VALUES('Doblo', 4);
INSERT INTO carros (carro, fk_fabricante) VALUES('Uno', 4);
INSERT INTO carros (carro, fk_fabricante) VALUES('GGG', 5);

SELECT * FROM fabricantes; 
SELECT * FROM carros; 



SELECT fabricante, COUNT(carro) as quantidade FROM carros 
JOIN fabricantes f on fk_fabricante = f.id 
GROUP BY fabricante;

/* Trigger
CREATE DEFINER=`Rayslla`@`%` TRIGGER `carros_AFTER_INSERT` AFTER INSERT ON `carros` FOR EACH ROW BEGIN
    
    SET @i = 1; 
    SET @total = (SELECT MAX(id) FROM fabricantes);

	SET @Var = (SELECT COUNT(carro) FROM carros WHERE fk_fabricante = @i);
    
    while @i <= @total do    
			UPDATE fabricantes
			SET qtd_carros = @Var
			WHERE id = @i;
        
        SET @i = @i + 1;
    END WHILE;
END
*/