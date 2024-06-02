package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo userrepo;
	
	
	public void Register(UserEntity userentity) {
		userrepo.save(userentity);
	}
   public UserEntity Login(String username,String password) {
	   return userrepo.findByUsernameAndPassword(username, password);
	   
   }
}
