package com.ecom.store.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.store.model.User;

public interface UserRepo extends JpaRepository<User, Long>{
}
