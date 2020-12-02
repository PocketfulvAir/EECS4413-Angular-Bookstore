/**
 * Control REST operations and database access to user
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.store.db.UserRepo;
import com.ecom.store.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")// for use when calling othre localhosts
@RequestMapping(path = "users")
public class UserController {
	
	@Autowired
	private UserRepo userRepo;
	
	@GetMapping("/get")
	public List<User> getUsers(){
		return userRepo.findAll();
	}
	
	@GetMapping("/byuser")
	public User getUser(@RequestParam String username) {
		List<User> userblock = userRepo.findByUsername(username);
		return userblock.get(0);
	}
	
	@PostMapping("/add")
	public void addUser(@RequestBody User user) {
		userRepo.save(user);
	}
	
	
	
	
}
