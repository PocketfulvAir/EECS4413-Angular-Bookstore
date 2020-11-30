/**
 * model for Order item composite key
 * @author Rui Yang Huang
 */
package com.ecom.store.model;

import java.io.Serializable;

public class OrderItemId implements Serializable {
	private int oid;
	private String bid;
	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	public String getBid() {
		return bid;
	}
	public void setBid(String bid) {
		this.bid = bid;
	}
	
}
