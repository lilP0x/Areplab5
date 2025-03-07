package com.example.demo.controller;


import com.example.demo.model.Property;
import com.example.demo.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/properties")
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/{id}")
    public Property getPropertyById(@RequestParam Long id) {
        return propertyService.getPropertyById(id);
    }

    @PostMapping
    public Property createProperty(@RequestBody Property property) {
        return propertyService.saveProperty(property);
    }

    @PutMapping("/{id}")
    public Property updateProperty(@PathVariable Long id, @RequestBody Property property) {
        return propertyService.updateProperty(id, property);
    }

    @DeleteMapping("/{id}") 
    public void deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
    }
}
