package com.edu.service;

import java.awt.image.RescaleOp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.edu.model.Food;
import com.edu.repository.FoodRepository;

@Service
public class FoodService {
	@Autowired
	private FoodRepository frepo;
	public void addData(Food f) {
		frepo.save(f);
	}
	public List<Food> getData(){
		return frepo.findAll();
	}
	
	public Food getFoodidDetails(String fid) {
		return frepo.findById(fid).orElse(null);
	}
	public void deleteData(String fid) {
		Food f = frepo.findById(fid).orElse(null);
		if(f!=null) {
			frepo.delete(f);
		}
	}
	public Food updateData(Food fs,String fid)
	{
		
		Food f= frepo.findById(fid).orElse(null);
		if(f!=null)
		{
			f.setFname(fs.getFname());
			f.setPrice(fs.getPrice());
			frepo.save(f);
		}
		return f;
	}
	
	
} 
