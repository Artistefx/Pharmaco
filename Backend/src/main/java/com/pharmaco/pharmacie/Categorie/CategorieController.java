package com.pharmaco.pharmacie.Categorie;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping(path = "/api/v1/categorie")
@CrossOrigin(origins = "http://localhost:3000")
public class CategorieController {
    
    private final CategorieService categorieService;

    public CategorieController(CategorieService categorieService) {
        this.categorieService = categorieService;
    }

    @PostMapping(path = "/add")
    public Categorie  AddCategorie (@RequestBody Categorie c) {
        return categorieService.addCategorie(c);
    }

    @PostMapping(path = "/update")
    public Categorie  UpdateCategorie (@RequestBody Categorie c) {
        return categorieService.updateCategorie(c);
    }

    @PutMapping(path = "/delete/{id}")
    public void DeleteCategorie (@PathVariable Long id) {
        categorieService.deleteCategorie(id);
    }

    @PostMapping(path = "/find/{id}")
    public Categorie FindCategorie (@PathVariable Long id) {
        return categorieService.findById(id);
    }
    
    @PostMapping(path = "/all")
    public List<Categorie> FindAllCategorie () {
        return categorieService.findAll();
    }

    @GetMapping(path = "/top5")
    public List<String> FindTop5Categorie () {
        return categorieService.findTop5Names();
    }

    

}
