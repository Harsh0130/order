package com.example.demo;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class OrderService {
	@Autowired
	OrderRepository repo;
	public ArrayList<OrderEntity> listAll() {
		return (ArrayList<OrderEntity>) repo.findAll();
	}
	public void save(OrderEntity oe) {
		repo.save(oe);
	}
	public void delete(Integer id) {
		repo.deleteById(id);
	}
	public OrderEntity update(OrderEntity ord) {
		Integer id= ord.getId();
		OrderEntity ent = repo.findById(id).get();
		ent.setCustomer_name(ord.getCustomer_name());
		ent.setAddress(ord.getAddress());
		ent.setQuantity(ord.getQuantity());
		return repo.save(ent);
	}

}
