package com.example.demo.Entity;

public class EmailDTO {
	
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "EmailDTO [email=" + email + "]";
	}

	public EmailDTO(String email) {
		super();
		this.email = email;
	}

	public EmailDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
