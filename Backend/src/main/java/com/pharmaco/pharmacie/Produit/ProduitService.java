package com.pharmaco.pharmacie.Produit;

import org.springframework.stereotype.Service;

@Service
public class ProduitService {
    
    private final ProduitRepository produitRepository;

    public ProduitService(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    public Produit addProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    public Produit updateProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    public void deleteProduit(Long id) {
        produitRepository.deleteById(id);
    }

    public Produit findById(Long id) {
        return produitRepository.findById(id).orElse(null);
    }

    public Iterable<Produit> findAll() {
        return produitRepository.findAll();
    }

    public Produit findProduitByNom(String nom) {
        return produitRepository.findProduitByNom(nom);
    }

    public Iterable<Produit> findProduitByReduction() {
        return produitRepository.findByIsReductionTrue();
    }
}
