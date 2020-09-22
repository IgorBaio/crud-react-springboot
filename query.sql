create database produtos;

use produtos;

create table tb_produto (`id` int(20) not null auto_increment,
`nome` varchar(255) DEFAULT NULL,
`codigo_barras` varchar(255) DEFAULT NULL, 
`descricao` varchar(255) DEFAULT NULL,
`categoria` varchar(255) DEFAULT NULL,
`quantidade` int(20) DEFAULT NULL,
 PRIMARY KEY (`id`));
