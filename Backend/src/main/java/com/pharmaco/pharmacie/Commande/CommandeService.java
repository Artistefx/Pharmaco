package com.pharmaco.pharmacie.Commande;

import java.util.Arrays;
import org.springframework.stereotype.Service;
import com.pharmaco.pharmacie.Client.Client;
import com.pharmaco.pharmacie.Client.ClientRepository;
import jakarta.transaction.Transactional;

@Service
public class CommandeService {
    
    private final CommandeRepository commandeRepository;
    private final ClientRepository clientRepository;

    public CommandeService(CommandeRepository commandeRepository , ClientRepository clientRepository) {
        this.commandeRepository = commandeRepository;
        this.clientRepository = clientRepository;
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

    public java.util.List<Object> findByInfo(Long id) {
        Commande commande = commandeRepository.findById(id).orElse(null);
        long idClient = Long.parseLong(commande.getClient());
        Client client = clientRepository.findById(idClient).orElse(null);
        client.setMotDePasse(null);
        return Arrays.asList(commande, client);
    }

    public Iterable<Commande> findAll() {
        return commandeRepository.findAll();
    }

    @Transactional
    public void updateStatusToEnCoursDeTraitement(Long id) {
        commandeRepository.updateStatusToEnCoursDeTraitement(id);
    }

    public Iterable<Commande> getCommandeEnCoursDeTraitement() {
        return commandeRepository.getCommandeEnCoursDeTraitement();
    }

    public Iterable<Commande> getCommandeEnCoursDeVerification() {
        return commandeRepository.getCommandeEnCoursDeVerification();
    }
}
