/**
 * Control REST operations and database access to Order and order item
 * @author Rui Yang Huang
 */
package com.ecom.store.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.store.db.PIRepo;
import com.ecom.store.db.PORepo;
import com.ecom.store.model.OrderItem;
import com.ecom.store.model.PO;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
@RestController
@CrossOrigin(origins = "http://localhost:4200")//for use when calling othre localhosts
@RequestMapping(path = "orders")
public class POController {

	@Autowired
	private PORepo poRepo;
	@Autowired
	private PIRepo piRepo;
	
	@GetMapping("/get")
	public List<PO> getOrders(){
		return poRepo.findAll();
	}
	
	@PostMapping("/add")
	public void addOrder(@RequestBody PO order) {
		poRepo.save(order);
	}
	
	@PostMapping("/additems")
	public void addOrderItem(@RequestBody String orderItem) throws JsonMappingException, JsonProcessingException {
	ObjectMapper objectMapper = new ObjectMapper();
	List<OrderItem> temp = objectMapper.readValue(orderItem, new TypeReference<List<OrderItem>>(){});	
	piRepo.saveAll(temp);
	}
	
}
