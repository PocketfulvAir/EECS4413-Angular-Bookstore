package com.ecom.store.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.store.model.PO;

public interface PORepo extends JpaRepository<PO, Long>{

}
