package br.com.baiosystems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.baiosystems.modal.Produto;
import br.com.baiosystems.service.ProdutoService;

@RestController
@RequestMapping("/api")
public class ProdutoController {

	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping("/produto")
	public List<Produto> getItens() {
	  return produtoService.getItens();
	}
	
	
	@PostMapping("/produto")
	public Produto save(@RequestBody Produto produto){
		produtoService.save(produto);
		return produto;
	}
	
	@GetMapping("/produto/{id}")
	public Produto get(@PathVariable int id) {
		return produtoService.getItem(id);
	}
	
	@DeleteMapping("/produto/{id}")
	public String delete(@PathVariable int id) {
		produtoService.delete(id);
		return "Removido o produto com id " + id;
	}
	
	@PutMapping("/produto")
	public Produto update(@RequestBody Produto produto) {
		produtoService.save(produto);
		return produto;
	}
}
