package com.ecom.store.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.store.db.PORepo;
import com.ecom.store.model.PO;

@RestController
//@CrossOrigin(origins = "http://localhost:####") for use when calling othre localhosts
@RequestMapping(path = "orders")
public class POController {

	@Autowired
	private PORepo poRepo;
	@GetMapping("/get")
	public List<PO> getUsers(){
		return poRepo.findAll();
	}
}
