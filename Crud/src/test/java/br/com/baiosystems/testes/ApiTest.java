package br.com.baiosystems.testes;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.Assert;

import static org.assertj.core.api.Assertions.assertThat;
import br.com.baiosystems.controller.ProdutoController;
import br.com.baiosystems.modal.Produto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApiTest {

	@Autowired
	private ProdutoController produtoController;
	
	@Test
	public void controllerLoads() throws Exception {
		assertThat(produtoController).isNotNull();
	}
	
	
	@Test
	public void getItem() {
		Produto produtoRetornado = produtoController.getItem(10);
		
		Produto resultadoEsperado = new Produto();
		resultadoEsperado.setId(10);
		resultadoEsperado.setNome("Garrafa");
		resultadoEsperado.setCategoria("Recipientes");
		resultadoEsperado.setDescricao("Item usado para armazenamento de líquidos, grãos, entre outros");
		resultadoEsperado.setQuantidade(50);
		resultadoEsperado.setCodigoBarras("124235262");
		
		
		assertThat(produtoRetornado.toString()).isEqualTo(resultadoEsperado.toString());
	}
	
	@Test
	public void saveAndComparateBarCodeForItem_Sucess() {
		Produto produto = new Produto();
		produto.setNome("Teste com Junit GetCreate");
		produto.setCategoria("Testes");
		produto.setDescricao("Teste para retornar um item criado");
		produto.setQuantidade(2);
		produto.setCodigoBarras("19872471248999");
		
		Integer id = produtoController.save(produto).getId();
		
		Produto produtoRetornado = new Produto();
		produtoRetornado = produtoController.getItem(id);

		assertThat(produtoRetornado.getCodigoBarras()).isEqualTo(produto.getCodigoBarras());
	}
	
	@Test
	public void comparateQuantityDifferentForAnItemUpdated_Sucess() {
		Produto produto = new Produto();
		produto = produtoController.getItem(15);
		
		Integer id = produtoController.getItem(produto.getId()).getId();
		
		Produto produtoRetornado = new Produto();
		produtoRetornado = produtoController.getItem(id);
		produtoRetornado.setQuantidade(31);
		produtoRetornado = produtoController.update(produtoRetornado);
		
		assertThat(produtoRetornado.getQuantidade()).isNotEqualTo(produto.getQuantidade());
	}
	
	@Test
	public void removeAnItem_Sucess() {
		Produto produtoRemovido = new Produto();
		produtoRemovido = produtoController.getItem(21);
		
		Integer id = produtoController.getItem(produtoRemovido.getId()).getId();
		
		String message = produtoController.delete(id);
		
		assertThat(message).isEqualTo("Removido o produto com id " + id);
	}
}
