/**
 * Repository for Book. Specify SQL queries to the book table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecom.store.model.Book;
import com.ecom.store.model.User;

public interface BookRepo extends JpaRepository<Book, Long>{
	@Query(value = "select book.bid, title, author, book.price, category, sum(qty) as quantity, sum(qty * book.price) as totalprice from book, pi where book.bid = pi.bid group by book.bid, title, author, book.price, category", nativeQuery = true)
	List getBookReport();
	
	@Query(value = "select book.bid, title, sum(qty) as quantity, sum(qty * book.price) as totalsales from book, pi where book.bid = pi.bid group by book.bid, title order by quantity DESC LIMIT 10", nativeQuery = true)
	List getTopTenBooks();
	
}
