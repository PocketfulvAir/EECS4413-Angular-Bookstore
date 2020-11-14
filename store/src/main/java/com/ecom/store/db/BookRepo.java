package com.ecom.store.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.store.model.Book;

public interface BookRepo extends JpaRepository<Book, Long>{

}
