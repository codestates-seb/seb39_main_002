package mainproject.coldStorage.service;

import mainproject.food.entity.Food;
import mainproject.food.enumType.FoodClassification;
import mainproject.food.repositiry.FoodRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import static mainproject.food.enumType.Refrigerator.COLD_STORAGE;

@Service
public class ColdStorageService {
    private final FoodRepository foodRepository;

    public ColdStorageService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }
    // ToDo 냉장실 냉장고 조회 만들기
    public List<Food> findColdStorage() {
        return (List<Food>) foodRepository.findByRefrigerator(COLD_STORAGE);
    }
}
