package com.pharmaco.pharmacie.Facture;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/facture")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class FactureController {

    private final FactureService factureService;

    public FactureController(FactureService factureService) {
        this.factureService = factureService;
    }

    @PostMapping(path = "/add")
    public Facture addFacture(@RequestBody Facture facture) {
        return factureService.addFacture(facture);
    }

    @PostMapping(path = "/update")
    public Facture updateFacture(@RequestBody Facture facture) {
        return factureService.updateFacture(facture);
    }

    @PutMapping(path = "/delete/{id}")
    public void deleteFacture(@PathVariable Long id) {
        factureService.deleteFacture(id);
    }

    @PostMapping(path = "/find/{id}")
    public Facture findById(@PathVariable Long id) {
        return factureService.findById(id);
    }

    @PostMapping(path = "/all")
    public Iterable<Facture> findAll() {
        return factureService.findAll();
    }

    
    
}
