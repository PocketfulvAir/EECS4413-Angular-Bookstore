/**
 * Repository for Book. Specify SQL queries to the review table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecom.store.model.Review;

public interface ReviewRepo extends JpaRepository<Review, Long>{
	
	
}
