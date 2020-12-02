/**
 * Repository for Product Item. Specify SQL queries to the pi (product item) table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecom.store.model.OrderItem;

public interface PIRepo extends JpaRepository<OrderItem, Long>{
	
	
}
