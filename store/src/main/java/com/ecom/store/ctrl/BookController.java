/**
 * Control REST operations and database access to book
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.store.db.BookRepo;
import com.ecom.store.model.Book;
import com.ecom.store.db.ReviewRepo;
import com.ecom.store.model.Review;
import com.ecom.store.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")// for use when calling othre localhosts
@RequestMapping(path = "books")
public class BookController {

	@Autowired
	private BookRepo bookRepo;
	@Autowired
	private ReviewRepo reviewRepo;
	
	@GetMapping("/get")
	public List<Book> getBooks(){
		return bookRepo.findAll();
	}
	
	@GetMapping("/getreviews")
	public List<Review> getReviews(){
		return reviewRepo.findAll();
	}
	
	@GetMapping("/getreport")
	public List getReport(){
		return bookRepo.getBookReport();
	}
	
	@GetMapping("/gettopten")
	public List getTopTen() {
		return bookRepo.getTopTenBooks();
	}
	
	@GetMapping("/getProductInfo")
	public Book getProductInfo(@RequestParam String productId) {
		List<Book> bookblock = bookRepo.getProductInfo(productId);
		return bookblock.get(0);
	}
	
	@PostMapping("/addreview")
	public void addUser(@RequestBody Review review) {
		reviewRepo.save(review);
	}
}
