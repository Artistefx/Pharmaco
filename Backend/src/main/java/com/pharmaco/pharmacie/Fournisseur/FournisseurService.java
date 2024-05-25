package com.pharmaco.pharmacie.Fournisseur;

import org.springframework.stereotype.Service;

@Service
public class FournisseurService {
    
    private final FournisseurRepository fournisseurRepository;

    public FournisseurService(FournisseurRepository fournisseurRepository) {
        this.fournisseurRepository = fournisseurRepository;
    }

    public Fournisseur addFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur);
    }

    public Fournisseur updateFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur);
    }

    public void deleteFournisseur(Long id) {
        fournisseurRepository.deleteById(id);
    }

    public Fournisseur findById(Long id) {
        return fournisseurRepository.findById(id).orElse(null);
    }

    public Iterable<Fournisseur> findAll() {
        return fournisseurRepository.findAll();
    }
    
}
