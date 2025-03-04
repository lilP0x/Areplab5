package com.example.demo.service;

import com.example.demo.model.Property;
import com.example.demo.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public List<Property> getAllProperties() {
        return null;
    }

    public Property getPropertyById(Long id) {
        return (Property    )propertyRepository.findById(id).orElse(null);
    }

    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }

    public Property updateProperty(Long id, Property updatedProperty) {
        return propertyRepository.findById(id).map(property -> {
            property.setAddress(updatedProperty.getAddress());
            property.setPrice(updatedProperty.getPrice());
            property.setSize(updatedProperty.getSize());
            property.setDescription(updatedProperty.getDescription());
            return propertyRepository.save(property);
        }).orElse(null);
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }
}