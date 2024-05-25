package com.pharmaco.pharmacie.Categorie;


import com.pharmaco.pharmacie.Produit.Produit;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Categorie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String description;

    @OneToMany(mappedBy = "categorie")
    private List<Produit> produits;

    public Categorie() {
    }

    public Categorie(long id, String nom, String description) {
        this.id = id;
        this.nom = nom;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getDescription() {
        return description;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
