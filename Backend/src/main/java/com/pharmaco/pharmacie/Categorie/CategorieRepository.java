package com.pharmaco.pharmacie.Categorie;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long> {

    @Query("SELECT c.nom FROM Categorie c")
    List<String> findTop5Names(Pageable pageable);
    
}
