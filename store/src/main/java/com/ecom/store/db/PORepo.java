/**
 * Repository for Book. Specify SQL queries to the po (product order) table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecom.store.model.PO;

public interface PORepo extends JpaRepository<PO, Long>{
	
	
}
