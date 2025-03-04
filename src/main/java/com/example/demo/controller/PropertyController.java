package com.example.demo.controller;


import com.example.demo.model.Property;
import com.example.demo.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/properties")
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
    public Property createProperty(@RequestParam Property property) {
        return propertyService.saveProperty(property);
    }

    @PutMapping("/{id}")
    public Property updateProperty(@RequestParam Long id, @RequestParam Property property) {
        return propertyService.updateProperty(id, property);
    }

    @DeleteMapping("/{id}") 
    public void deleteProperty(@RequestParam Long id) {
        propertyService.deleteProperty(id);
    }
}
