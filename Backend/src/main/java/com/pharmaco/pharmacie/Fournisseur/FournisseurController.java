package com.pharmaco.pharmacie.Fournisseur;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/fournisseur")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class FournisseurController {
    
    private final FournisseurService fournisseurService;

    public FournisseurController(FournisseurService fournisseurService) {
        this.fournisseurService = fournisseurService;
    }

    @PostMapping(path = "/add")
    public Fournisseur addFournisseur(@RequestBody Fournisseur fournisseur) {
        return fournisseurService.addFournisseur(fournisseur);
    }

    @PostMapping(path = "/update")
    public Fournisseur updateFournisseur(@RequestBody Fournisseur fournisseur) {
        return fournisseurService.updateFournisseur(fournisseur);
    }

    @PutMapping(path = "/delete/{id}")
    public void deleteFournisseur(@PathVariable Long id) {
        fournisseurService.deleteFournisseur(id);
    }

    @PostMapping(path = "/find/{id}")
    public Fournisseur findById(@PathVariable Long id) {
        return fournisseurService.findById(id);
    }

    @PostMapping(path = "/all")
    public Iterable<Fournisseur> findAll() {
        return fournisseurService.findAll();
    }
}
