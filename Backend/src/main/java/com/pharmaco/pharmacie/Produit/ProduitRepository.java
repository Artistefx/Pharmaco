package com.pharmaco.pharmacie.Produit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {

    @Query("SELECT p FROM Produit p WHERE p.nom = ?1")
    Produit findProduitByNom(String nom);

    Iterable<Produit> findByIsReductionTrue();

}
