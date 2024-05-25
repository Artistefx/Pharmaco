package com.pharmaco.pharmacie.Employe;

import org.springframework.stereotype.Service;

@Service
public class EmployeService {
    
    private final EmployeRepository employeRepository;

    public EmployeService(EmployeRepository employeRepository) {
        this.employeRepository = employeRepository;
    }

    public Employe addEmploye(Employe employe) {
        return employeRepository.save(employe);
    }

    public Employe updateEmploye(Employe employe) {
        return employeRepository.save(employe);
    }

    public void deleteEmploye(Long id) {
        employeRepository.deleteById(id);
    }

    public Employe findById(Long id) {
        return employeRepository.findById(id).orElse(null);
    }

    public Iterable<Employe> findAll() {
        return employeRepository.findAll();
    }
    
}
