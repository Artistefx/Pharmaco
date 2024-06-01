package com.pharmaco.pharmacie.Stock;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/stock")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class StockController {
    
    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @PostMapping(path = "/add")
    public Stock addStock(@RequestBody Stock stock) {
        return stockService.addStock(stock);
    }

    @PostMapping(path = "/update")
    public Stock updateStock(@RequestBody Stock stock) {
        return stockService.updateStock(stock);
    }

    @PutMapping(path = "/delete/{id}")
    public void deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
    }

    @PostMapping(path = "/find/{id}")
    public Stock findById(@PathVariable Long id) {
        return stockService.findById(id);
    }

    @PostMapping(path = "/all")
    public Iterable<Stock> findAll() {
        return stockService.findAll();
    }
}
