package br.com.baiosystems.dao;

import java.util.List;

import br.com.baiosystems.modal.Produto;

public interface ProdutoDAO {
	List<Produto> getItens();
	
	Produto getItem(int id);
	
	void save(Produto produto);
	
	void delete(int id);
}
