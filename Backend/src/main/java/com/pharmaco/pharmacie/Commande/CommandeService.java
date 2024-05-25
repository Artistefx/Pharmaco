package com.pharmaco.pharmacie.Commande;

import org.springframework.stereotype.Service;

@Service
public class CommandeService {
    
    private final CommandeRepository commandeRepository;

    public CommandeService(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }

    public Commande addCommande(Commande commande) {
        return commandeRepository.save(commande);
    }

    public Commande updateCommande(Commande commande) {
        return commandeRepository.save(commande);
    }

    public void deleteCommande(Long id) {
        commandeRepository.deleteById(id);
    }

    public Commande findById(Long id) {
        return commandeRepository.findById(id).orElse(null);
    }
}
