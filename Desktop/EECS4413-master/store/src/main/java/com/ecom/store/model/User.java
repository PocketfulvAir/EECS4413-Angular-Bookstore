/**
 * model for User
 * @author Rui Yang Huang
 */
package com.ecom.store.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "webuser")
public class User {
	private @Id String username;
	private String password;
	private String email;
	private String type;
	private String billing;
	private String mailing;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getBilling() {
		return billing;
	}
	public void setBilling(String billing) {
		this.billing = billing;
	}
	public String getMailing() {
		return mailing;
	}
	public void setMailing(String mailing) {
		this.mailing = mailing;
	}
}
