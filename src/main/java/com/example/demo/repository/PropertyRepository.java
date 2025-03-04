package com.example.demo.repository;

import com.example.demo.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface PropertyRepository extends CrudRepository<Property, Long> {

}
