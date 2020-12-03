/**
 * Repository for Product Order. Specify SQL queries to the po (product order) table
 * @author Rui Yang Huang
 */
package com.ecom.store.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecom.store.model.PO;

public interface PORepo extends JpaRepository<PO, Long>{

	@Query(value = "select pi.oid, username, date, status, po.price from po,pi where po.oid = pi.oid and bid=:bid", nativeQuery= true)
	List getOrderByPartNum(String bid);
	
	
}
