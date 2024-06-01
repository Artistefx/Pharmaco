package com.pharmaco.pharmacie.Employe;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping(path = "/api/v1/employe")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeController {
    
    private final EmployeService employeService;

    public EmployeController(EmployeService employeService) {
        this.employeService = employeService;
    }

    @PostMapping(path = "/add")
    public Employe addEmploye(@RequestBody Employe employe) {
        return employeService.addEmploye(employe);
    }

    @PostMapping(path = "/update")
    public Employe updateEmploye(@RequestBody Employe employe) {
        return employeService.updateEmploye(employe);
    }

    @PutMapping(path = "/delete/{id}")
    public void deleteEmploye(@PathVariable Long id) {
        employeService.deleteEmploye(id);
    }

    @PostMapping(path = "/find/{id}")
    public Employe findById(@PathVariable Long id) {
        return employeService.findById(id);
    }

    @PostMapping(path = "/all")
    public Iterable<Employe> findAll() {
        return employeService.findAll();
    }
}
