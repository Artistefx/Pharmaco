package com.pharmaco.pharmacie.Stock;

import org.springframework.stereotype.Service;

@Service
public class StockService {
    
    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    public Stock findById(Long id) {
        return stockRepository.findById(id).orElse(null);
    }

    public Iterable<Stock> findAll() {
        return stockRepository.findAll();
    }
}
