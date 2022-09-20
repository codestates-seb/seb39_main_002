package mainproject.food.service;

import mainproject.food.entity.Food;
import mainproject.food.enumType.Refrigerator;
import mainproject.food.repositiry.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class FoodService {

    private final   FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    // ToDo 등록
    public Food createFood(Food food) {

        food.setCreatedAt(LocalDateTime.now());

        return foodRepository.save(food);
    }
}
