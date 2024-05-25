package com.pharmaco.pharmacie.Produit;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/produit")
public class produitController {
    
    private final ProduitService produitService;

    public produitController(ProduitService produitService) {
        this.produitService = produitService;
    }

    @PostMapping(path = "/add")
    public Produit addproduit(@RequestBody Produit produit) {
        return produitService.addProduit(produit);
    }

    @PostMapping(path = "/update")
    public Produit updateproduit(@RequestBody Produit produit) {
        return produitService.updateProduit(produit);
    }

    @PutMapping(path = "/delete/{id}")
    public void deleteproduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
    }

    @PostMapping(path = "/find/{id}")
    public Produit findById(@PathVariable Long id) {
        return produitService.findById(id);
    }

    @PostMapping(path = "/all")
    public Iterable<Produit> findAll() {
        return produitService.findAll();
    }
}
