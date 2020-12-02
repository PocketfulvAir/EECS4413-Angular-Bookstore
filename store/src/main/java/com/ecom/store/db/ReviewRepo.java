/**
 * Repository for Review. Specify SQL queries to the review table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecom.store.model.Review;
import com.ecom.store.model.User;

public interface ReviewRepo extends JpaRepository<Review, Long>{

}
