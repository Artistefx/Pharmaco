package com.pharmaco.pharmacie.Facture;

import org.springframework.stereotype.Service;

@Service
public class FactureService {
    
    private final FactureRepository factureRepository;

    public FactureService(FactureRepository factureRepository) {
        this.factureRepository = factureRepository;
    }

    public Facture addFacture(Facture facture) {
        return factureRepository.save(facture);
    }

    public Facture updateFacture(Facture facture) {
        return factureRepository.save(facture);
    }

    public void deleteFacture(Long id) {
        factureRepository.deleteById(id);
    }

    public Facture findById(Long id) {
        return factureRepository.findById(id).orElse(null);
    }

    public Iterable<Facture> findAll() {
        return factureRepository.findAll();
    }

}
