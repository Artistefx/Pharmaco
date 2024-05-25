
package com.pharmaco.pharmacie.Produit;


import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.GeneratedValue;

import java.util.List;

import com.pharmaco.pharmacie.Categorie.Categorie;
import com.pharmaco.pharmacie.Commande.Commande;
import com.pharmaco.pharmacie.Stock.Stock;

@Entity
public class Produit {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String type;
    private String description;
    private double priceReduction;
    private double priceOriginal;
    private String image1;
    private String image2;
    private String image3;
    private String image4;

    @ManyToOne
    private Categorie categorie;

    @OneToOne(mappedBy = "produit")
    private Stock stock;

    @ManyToMany(mappedBy = "produits")
    private List<Commande> commandes;
   

    public Produit() {
    }

    public Produit(long id, String nom, String type, String description, double priceReduction, double priceOriginal, String image1, String image2, String image3, String image4) {
        this.id = id;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.priceReduction = priceReduction;
        this.priceOriginal = priceOriginal;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
    }

    public long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public double getPriceReduction() {
        return priceReduction;
    }

    public double getPriceOriginal() {
        return priceOriginal;
    }

    public String getImage1() {
        return image1;
    }

    public String getImage2() {
        return image2;
    }

    public String getImage3() {
        return image3;
    }

    public String getImage4() {
        return image4;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPriceReduction(double priceReduction) {
        this.priceReduction = priceReduction;
    }

    public void setPriceOriginal(double priceOriginal) {
        this.priceOriginal = priceOriginal;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public void setImage3(String image3) {
        this.image3 = image3;
    }

    public void setImage4(String image4) {
        this.image4 = image4;
    }



    
}
