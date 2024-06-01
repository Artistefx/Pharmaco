package com.pharmaco.pharmacie.Produit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {

    @Query("SELECT p FROM Produit p WHERE p.nom = ?1")
    Produit findProduitByNom(String nom);

    Iterable<Produit> findByIsReductionTrue();

    //get produit and quantite in stock by id
    @Query("SELECT p.nom, s.quantite FROM Produit p JOIN Stock s ON p.id = s.produit.id")
    Iterable<Object[]> getProduitAndQuantite();

    Optional<Produit> findFirstByCategorieNom(String categorieNom);

    //get produit with name like
    Iterable<Produit> findByNomContaining(String nom);

    //get produit by categorie
    Iterable<Produit> findByCategorieNom(String categorieNom);
}
