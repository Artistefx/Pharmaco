package com.pharmaco.pharmacie.Categorie;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class CategorieService {

    private CategorieRepository categorieRepository; 

    public CategorieService(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    public Categorie addCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    public Categorie updateCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    public void deleteCategorie(Long id) {
        categorieRepository.deleteById(id);
    }

    public Categorie findById(Long id) {
        return categorieRepository.findById(id).orElse(null);
    }

    public List<Categorie> findAll() {
        return categorieRepository.findAll();
    }

    public List<String> findTop5Names() {
        return categorieRepository.findTop5Names(PageRequest.of(0, 5));
    }

    
}
