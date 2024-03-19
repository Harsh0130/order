package com.example.demo;

import java.util.ArrayList;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
	
	@Autowired
	OrderService os;
	
	@GetMapping("/orders")
	public ArrayList<OrderEntity>list(){
		return os.listAll();
	}
	
	@PostMapping("/orders")
	public void add(@RequestBody OrderEntity oe) {
		os.save(oe);
	}
	@DeleteMapping("/orders/{id}")
	 public void delete(@PathVariable("id") Integer id)
	 {
	 os.delete(id);
	 }
//	@PutMapping("/orders/{id}")
//	 public ResponseEntity<OrderEntity> update(@RequestBody OrderEntity ord, @PathVariable Integer id)
//	 {
//	 try
//	 {
//	 OrderEntity existProduct = os.get(id);
//	 os.save(ord);
//	 return new ResponseEntity<OrderEntity>(HttpStatus.OK);
//	 }
//	 catch (NoSuchElementException e)
//	 {
//	 return new ResponseEntity<OrderEntity>(HttpStatus.NOT_FOUND);
//	 }
//	 }
	@PutMapping("/orders")
	public OrderEntity update(@RequestBody OrderEntity ord){
		return os.update(ord);
	}
}
