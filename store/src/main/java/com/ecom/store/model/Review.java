/**
 * model for Review
 * @author Rui Yang Huang
 */
package com.ecom.store.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "review")
@IdClass(ReviewId.class)
public class Review{
	private @Id String bid;
	private @Id String review;
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
