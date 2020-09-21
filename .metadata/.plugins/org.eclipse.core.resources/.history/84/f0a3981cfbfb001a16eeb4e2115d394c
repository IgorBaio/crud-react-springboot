package br.com.baiosystems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.baiosystems.dao.ProdutoDAO;
import br.com.baiosystems.modal.Produto;

@Service
public class ProdutoServiceImp implements ProdutoService {

	@Autowired
	private ProdutoDAO produtoDAO;
	
   @Transactional	
	@Override
	public List<Produto> getItens() {
		return produtoDAO.getItens();
	}

   @Transactional	
	@Override
	public Produto getItem(int id) {
		return produtoDAO.getItem(id);
	}

   @Transactional	   
	@Override
	public void save(Produto produto) {
		produtoDAO.save(produto);
		
	}
   
   @Transactional	
	@Override
	public void delete(int id) {
	   produtoDAO.delete(id);
		
	}
	
}
