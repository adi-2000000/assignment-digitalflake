package com.example.demo.Entity;

public class IdDTO {
	
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "IdDTO [id=" + id + "]";
	}

	public IdDTO(Long id) {
		super();
		this.id = id;
	}
	 public IdDTO() {
	    }

}
