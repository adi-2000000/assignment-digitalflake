package com.example.demo.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.IdDTO;
import com.example.demo.Entity.Product;

import com.example.demo.Service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class ProductController {
	
	@Autowired
	ProductService productservice;
	
//	@PostMapping("/saveproduct")
//	public ResponseEntity<String> saveproduct1(@RequestBody Product product) {
//	    
//		productservice.SaveProduct(product);
//		return ResponseEntity.ok("successfully");
//		
//		
//	}
	
	
	
	@PostMapping("/saveproduct")
	public ResponseEntity<String> saveProductWithImage(@RequestParam("image") MultipartFile file,
	                                                   @RequestParam("name") String name,
	                                                   @RequestParam("packsize") String packsize,
	                                                   @RequestParam("category") String category,
	                                                   @RequestParam("mrp") String mrp,
	                                                   @RequestParam("status") int status) {
	    try {
	        Product product = new Product();
	        product.setName(name);
	        product.setPacksize(packsize);
	        product.setCategory(category);
	        product.setMrp(mrp);
	        product.setStatus(status);

	        // Set the image bytes to the Product entity
	        product.setImage(file.getBytes());

	        // Save the product with image
	        productservice.SaveProduct(product);

	        return ResponseEntity.ok("Successfully added product with image");
	    } catch (IOException e) {
	        e.printStackTrace();
	        return ResponseEntity.status(500).body("Error adding product with image");
	    }
	}

	
	
	@GetMapping("/getbycategory")
	public List<Product> getByCategory(){
		List<Product> products=productservice.getCategory();
		return products;
	}
	
	@GetMapping("/getallproduct")
	public List<Product> getAllProduct(){
		List<Product> products=productservice.getallproduct();
		return products;
	}
	
	
	@PostMapping("/deleteproductbyid")
	public ResponseEntity<String> deleteProductById(@RequestBody IdDTO iddto) {
		System.out.println(iddto);
	   productservice.DeleteProduct(iddto.getId());
	    return ResponseEntity.ok("Successfully deleted product");
	}
	
	
	
	
	@PostMapping("/getProductById")
	public Product getProductById(@RequestBody IdDTO id) {
		Product product  = productservice.findByProductId(id.getId());
		if(product!=null) {
			return product;
		}else {
			return null;
		}
	}
	
	
	
	
	@PostMapping("/updateproduct")
    public ResponseEntity<String> updateProduct(@RequestBody Product product) {
		Product products= productservice.findByProductId(product.getId());
        products.setCategory(product.getCategory());
		products.setImage(product.getImage());
		products.setId(product.getId());
		products.setMrp(product.getMrp());
		products.setName(product.getName());
		products.setPacksize(product.getPacksize());
		products.setStatus(product.getStatus());
		productservice.SaveProduct(products);
        return ResponseEntity.ok("Successfully updated product");
    }

	}
	
	
	
	
	
	


