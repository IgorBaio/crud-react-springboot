package br.com.baiosystems.testes;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;
import br.com.baiosystems.controller.ProdutoController;
import br.com.baiosystems.modal.Produto;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApiTest {

	@Autowired
	private ProdutoController produtoController;
	
	@Test
	public void contextLoads() throws Exception {
		assertThat(produtoController).isNotNull();
	}
	
//	@Test
//	public void createItem() {
//		ProdutoController pc = new ProdutoController();
//		Produto prod = new Produto();
//		prod.setCategoria("Categoria teste");
//		prod.setCodigoBarras("111222333");
//		prod.setDescricao("Descricao de teste");
//		prod.setNome("Produto teste");
//		prod.setQuantidade(2);
//		String resultadoEsperado = "{\r\n" + 
//				"    \"id\": 12,\r\n" + 
//				"    \"nome\": \"Item Teste\",\r\n" + 
//				"    \"descricao\": \"Descrição de teste JUnit\",\r\n" + 
//				"    \"codigoBarras\": \"12234321\",\r\n" + 
//				"    \"categoria\": \"Teste com JUnit\",\r\n" + 
//				"    \"quantidade\": 50\r\n" + 
//				"}";
//		assertEquals("Caso 1",resultadoEsperado, pc.save(prod));
//	}
	
	@Test
	public void getItem() {
//		ProdutoController pc = new ProdutoController();
//		Produto prod = new Produto();
//		prod.setCategoria("Categoria teste");
//		prod.setCodigoBarras("111222333");
//		prod.setDescricao("Descricao de teste");
//		prod.setNome("Produto teste");
//		prod.setQuantidade(2);
//		String resultadoEsperado = "{\r\n" + 
//				"    \"id\": 12,\r\n" + 
//				"    \"nome\": \"Item Teste\",\r\n" + 
//				"    \"descricao\": \"Descrição de teste JUnit\",\r\n" + 
//				"    \"codigoBarras\": \"12234321\",\r\n" + 
//				"    \"categoria\": \"Teste com JUnit\",\r\n" + 
//				"    \"quantidade\": 50\r\n" + 
//				"}";
//		assertEquals("Caso 1",resultadoEsperado, pc.save(prod));
		
		
	}

}
