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
	public void getCategoryByItem() {
		Produto pc = produtoController.getItem(7);
		Produto resultadoEsperado = new Produto();
		resultadoEsperado.setCategoria("telefonia");
		resultadoEsperado.setCodigoBarras("80986645");
		resultadoEsperado.setDescricao("uso pessoal");
		
		resultadoEsperado.setId(7);
		resultadoEsperado.setQuantidade(1);
		resultadoEsperado.setNome("Smartphone");
		
		assertThat(pc.getCategoria()).isEqualTo(resultadoEsperado.getCategoria());
	}
	
	@Test
	public void getNameByItem() {
		Produto pc = produtoController.getItem(10);
		
		Produto resultadoEsperado = new Produto();
		resultadoEsperado.setId(10);
		resultadoEsperado.setNome("Garrafa");
		resultadoEsperado.setCategoria("Recipientes");
		resultadoEsperado.setDescricao("Item usado para armazenamento de líquidos, grãos, entre outros");
		resultadoEsperado.setQuantidade(50);
		resultadoEsperado.setCodigoBarras("124235262");
		
		assertThat(pc.getNome()).isEqualTo(resultadoEsperado.getNome());
	}
	
	@Test
	public void getDescriptionByItem() {
		Produto pc = produtoController.getItem(8);
		
		Produto resultadoEsperado = new Produto();
		resultadoEsperado.setId(10);
		resultadoEsperado.setNome("Celular");
		resultadoEsperado.setCategoria("Telefonia");
		resultadoEsperado.setDescricao("Dispositivo para uso de ligações, mini computador pessoal");
		resultadoEsperado.setQuantidade(10);
		resultadoEsperado.setCodigoBarras("82917424081");
		
		assertThat(pc.getDescricao()).isEqualTo(resultadoEsperado.getDescricao());
	}
	
	@Test
	public void getQuantityByItem() {
		Produto pc = produtoController.getItem(8);
		
		Produto resultadoEsperado = new Produto();
		resultadoEsperado.setId(10);
		resultadoEsperado.setNome("Celular");
		resultadoEsperado.setCategoria("Telefonia");
		resultadoEsperado.setDescricao("Dispositivo para uso de ligações, mini computador pessoal");
		resultadoEsperado.setQuantidade(10);
		resultadoEsperado.setCodigoBarras("82917424081");
		
		assertThat(pc.getQuantidade()).isEqualTo(resultadoEsperado.getQuantidade());
	}
	
	@Test
	public void getBarCodeByItem() {
		Produto pc = produtoController.getItem(6);
		
		Produto resultadoEsperado = new Produto();
		resultadoEsperado.setId(6);
		resultadoEsperado.setNome("Estojo");
		resultadoEsperado.setCategoria("Utensílios");
		resultadoEsperado.setDescricao("Para guardar itens");
		resultadoEsperado.setQuantidade(1);
		resultadoEsperado.setCodigoBarras("19872471248999");
		
		assertThat(pc.getCodigoBarras()).isEqualTo(resultadoEsperado.getCodigoBarras());
	}
	
}
