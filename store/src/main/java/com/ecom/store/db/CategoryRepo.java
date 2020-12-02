/**
 * Repository for Category. Specify SQL queries to the category table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.store.model.Category;


public interface CategoryRepo extends JpaRepository<Category, Long>{

}
