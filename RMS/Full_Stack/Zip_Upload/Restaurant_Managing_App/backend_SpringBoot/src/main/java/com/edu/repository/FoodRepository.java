package com.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.model.Food;
@Repository
public interface FoodRepository extends JpaRepository<Food, String> {
	

}
