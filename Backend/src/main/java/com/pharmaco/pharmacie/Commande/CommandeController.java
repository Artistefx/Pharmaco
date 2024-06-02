package com.pharmaco.pharmacie.Commande;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/commande")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
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

    @PostMapping(path = "/info/{id}")
    public java.util.List<Object> FindCommandeinfo (@PathVariable Long id) {
        return commandeService.findByInfo(id);
    }
    
    @PostMapping(path = "/all")
    public Iterable<Commande> FindAllCommande () {
        return commandeService.findAll();
    }

    @PutMapping(path = "/updateStatus/{id}")
    public void UpdateStatus (@PathVariable Long id) {
        commandeService.updateStatusToEnCoursDeTraitement(id);
    }

    @PostMapping(path = "/enCoursDeTraitement")
    public Iterable<Commande> FindCommandeEnCoursDeTraitement () {
        return commandeService.getCommandeEnCoursDeTraitement();
    }

    @PostMapping(path = "/enCoursDeVerification")
    public Iterable<Commande> FindCommandeEnCoursDeVerification () {
        return commandeService.getCommandeEnCoursDeVerification();
    }

    
}
