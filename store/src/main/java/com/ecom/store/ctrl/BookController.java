package com.ecom.store.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.store.db.BookRepo;
import com.ecom.store.db.UserRepo;
import com.ecom.store.model.Book;
import com.ecom.store.model.User;

@RestController
//@CrossOrigin(origins = "http://localhost:####") for use when calling othre localhosts
@RequestMapping(path = "books")
public class BookController {

	@Autowired
	private BookRepo bookRepo;
	
	@GetMapping("/get")
	public List<Book> getBooks(){
		return bookRepo.findAll();
	}
}
