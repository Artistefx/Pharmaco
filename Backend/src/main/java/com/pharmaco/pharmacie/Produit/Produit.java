
package com.pharmaco.pharmacie.Produit;


import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.GeneratedValue;
import com.pharmaco.pharmacie.Categorie.Categorie;
import com.pharmaco.pharmacie.Fournisseur.Fournisseur;
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
    private Boolean isReduction;
    private String image1;
    private String image2;

    @ManyToOne
    private Categorie categorie;

    @OneToOne(mappedBy = "produit")
    private Stock stock;

    @ManyToOne
    private Fournisseur fournisseur;
   

    public Produit() {
    }

    public Produit(long id, String nom, String type, String description, double priceReduction, double priceOriginal, String image1, String image2) {
        this.id = id;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.priceReduction = priceReduction;
        this.priceOriginal = priceOriginal;
        this.image1 = image1;
        this.image2 = image2;
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

    public Boolean getIsReduction() {
        return isReduction;
    }

    public String getImage1() {
        return image1;
    }

    public String getImage2() {
        return image2;
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

    public void setIsReduction(Boolean isReduction) {
        this.isReduction = isReduction;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    
    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public Fournisseur getFournisseur() {
        return fournisseur;
    }

    public void setFournisseur(Fournisseur fournisseur) {
        this.fournisseur = fournisseur;
    }


}
