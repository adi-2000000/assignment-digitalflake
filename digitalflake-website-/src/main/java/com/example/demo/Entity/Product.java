package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Product {
	@Id
	@ GeneratedValue(strategy = GenerationType.IDENTITY )
	
	private Long id;
	private String name;
	private String packsize;
	private String category;
	private String mrp;
	@Lob
	@Column(name = "image", columnDefinition = "BLOB")
	private byte[] image;
	private Integer status;
	public Long getId() {
		return id;
		
		
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPacksize() {
		return packsize;
	}
	public void setPacksize(String packsize) {
		this.packsize = packsize;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getMrp() {
		return mrp;
	}
	public void setMrp(String mrp) {
		this.mrp = mrp;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] bs) {
		this.image = bs;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", packsize=" + packsize + ", category=" + category + ", mrp="
				+ mrp + ", image=" + image + ", status=" + status + "]";
	}
	public Product(Long id, String name, String packsize, String category, String mrp, byte[] image, Integer status) {
		super();
		this.id = id;
		this.name = name;
		this.packsize = packsize;
		this.category = category;
		this.mrp = mrp;
		this.image = image;
		this.status = status;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
