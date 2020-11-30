/**
 * Control REST operations and database access to category
 * @author Rui Yang Huang
 */
package com.ecom.store.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.store.db.CategoryRepo;
import com.ecom.store.model.Category;


@RestController
@CrossOrigin(origins = "http://localhost:4200")// for use when calling othre localhosts
@RequestMapping(path = "categories")
public class CategoryController {

	@Autowired
	private CategoryRepo catRepo;
	
	@GetMapping("/get")
	public List<Category> getCategories(){
		return catRepo.findAll();
	}
	
	
}
