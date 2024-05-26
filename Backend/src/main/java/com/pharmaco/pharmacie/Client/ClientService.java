package com.pharmaco.pharmacie.Client;

import org.springframework.stereotype.Service;

@Service
public class ClientService {
    
    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    public Client updateClient(Client client) {
        return clientRepository.save(client);
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    public Client findById(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    public Iterable<Client> findAll() {
        return clientRepository.findAll();
    }

    public Client findByEmailAndPassword(String email, String motDePasse) {
        return clientRepository.findByEmailAndMotDePasse(email, motDePasse);
    }
}
