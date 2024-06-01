package com.pharmaco.pharmacie.Client;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping(path = "/api/v1/client")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ClientController {
    
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping(path = "/add")
    public Client  AddClient (@RequestBody Client c) {
        return clientService.addClient(c);
    }

    @PostMapping(path = "/update")
    public Client  UpdateClient (@RequestBody Client c) {
        return clientService.updateClient(c);
    }

    @PutMapping(path = "/delete/{id}")
    public void DeleteClient (@PathVariable Long id) {
        clientService.deleteClient(id);
    }

    @PostMapping(path = "/find/{id}")
    public Client FindClient (@PathVariable Long id) {
        return clientService.findById(id);
    }
    
    @PostMapping(path = "/all")
    public Iterable<Client> FindAllClient () {
        return clientService.findAll();
    }

    @PostMapping(path = "/login")
    public Boolean Login (@RequestBody Client c) {
        Client client = clientService.findByEmailAndPassword(c.getEmail(), c.getMotDePasse());
        if(client != null) {
            return true;
        }
        return false;
    }

    @PostMapping(path = "/register")
    public long GetId (@RequestBody Client c) {
        return clientService.findByEmailAndPassword(c.getEmail(), c.getMotDePasse()).getId();
    }
}
