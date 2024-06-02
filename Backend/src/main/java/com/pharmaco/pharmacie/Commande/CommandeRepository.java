package com.pharmaco.pharmacie.Commande;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Long> {

    //change commande status to En Cours de Traitement
    @Modifying
    @Transactional
    @Query("update Commande c set c.status = 'En Cours de Traitement' where c.id = :id")
    void updateStatusToEnCoursDeTraitement(@Param("id") Long id);

    //get commande En Cours de Traitement
    @Query("select c from Commande c where c.status = 'En Cours de Traitement'")
    Iterable<Commande> getCommandeEnCoursDeTraitement();

    //get commande En cours de verification
    @Query("select c from Commande c where c.status = 'En cours de verification'")
    Iterable<Commande> getCommandeEnCoursDeVerification();

}

