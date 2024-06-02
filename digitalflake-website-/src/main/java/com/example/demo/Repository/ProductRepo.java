package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Product;


@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
	  @Query("SELECT DISTINCT p.category FROM Product p")
	 List<Product> findDistinctCategory();

}
