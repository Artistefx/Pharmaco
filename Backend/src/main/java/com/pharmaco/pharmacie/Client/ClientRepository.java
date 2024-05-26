package com.pharmaco.pharmacie.Client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    //login
    Client findByEmailAndMotDePasse(String email, String motDePasse);
}
