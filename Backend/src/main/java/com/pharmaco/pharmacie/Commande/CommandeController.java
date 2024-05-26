package com.pharmaco.pharmacie.Commande;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/commande")
public class CommandeController {
    
    private final CommandeService commandeService;

    public CommandeController(CommandeService commandeService) {
        this.commandeService = commandeService;
    }

    @PostMapping(path = "/add")
    public Commande  AddCommande (@RequestBody Commande c) {
        return commandeService.addCommande(c);
    }

    @PostMapping(path = "/update")
    public Commande  UpdateCommande (@RequestBody Commande c) {
        return commandeService.updateCommande(c);
    }

    @PutMapping(path = "/delete/{id}")
    public void DeleteCommande (@PathVariable Long id) {
        commandeService.deleteCommande(id);
    }

    @PostMapping(path = "/find/{id}")
    public Commande FindCommande (@PathVariable Long id) {
        return commandeService.findById(id);
    }
    
    @PostMapping(path = "/all")
    public Iterable<Commande> FindAllCommande () {
        return commandeService.findAll();
    }
}
