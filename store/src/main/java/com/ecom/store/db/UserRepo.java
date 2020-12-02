/**
 * Repository for User. Specify SQL queries to the user (webuser) table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecom.store.model.User;

public interface UserRepo extends JpaRepository<User, Long>{

	@Query(value = "select * from webuser where username=:username", nativeQuery = true)
	List<User> findByUsername(@Param("username") String username);
}
