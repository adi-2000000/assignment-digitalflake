package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.LoginDTO;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.ProductService;
import com.example.demo.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class UserController {
	
	@Autowired
	ProductService productservice;
	
	
	@Autowired
	UserService userservice;
	
	@PostMapping("/register")
		public ResponseEntity<String> registerUser(@RequestBody UserEntity user ){
			userservice.Register(user);
			return ResponseEntity.ok(" registered successfully");
			
		}
	@PostMapping("/login")
	public ResponseEntity<String> loginuser(@RequestBody LoginDTO login){
		UserEntity userentity= userservice.Login(login.getUsername(), login.getPassword());
		if (userentity != null)
			return ResponseEntity.ok("login successfully");
		else
			return (ResponseEntity<String>) ResponseEntity.notFound();
			
	}

}
