/**
 * model for Review's composite key
 * @author Rui Yang Huang
 */
package com.ecom.store.model;

import java.io.Serializable;

public class ReviewId implements Serializable {
	private String bid;
	private String review;
	public String getBid() {
		return bid;
	}
	public void setBid(String bid) {
		this.bid = bid;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	
}
