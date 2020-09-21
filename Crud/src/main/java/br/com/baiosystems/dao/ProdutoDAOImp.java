package br.com.baiosystems.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.baiosystems.modal.Produto;

@Repository
public class ProdutoDAOImp implements ProdutoDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Produto> getItens() {
		Session currSession = entityManager.unwrap(Session.class);
		 Query<Produto> query = currSession.createQuery("from Produto", Produto.class);
		 List<Produto> list = query.getResultList();
		 return list;
	}

	@Override
	public Produto getItem(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Produto produto = currSession.get(Produto.class, id);
		return produto;
	}

	@Override
	public void save(Produto produto) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(produto);
		
	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Produto produto = currSession.get(Produto.class, id);
		currSession.delete(produto);
		
	}

}
