package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String Description;
	private int status;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Category(int id, String name, String description, int status) {
		super();
		this.id = id;
		this.name = name;
		Description = description;
		this.status = status;
	}
	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", Description=" + Description + ", status=" + status + "]";
	}
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	

}
