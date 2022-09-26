package mainproject.freezer.service;

import mainproject.food.entity.Food;
import mainproject.food.enumType.Refrigerator;
import mainproject.food.repositiry.FoodRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FreezerService {
    private final FoodRepository foodRepository;

    public FreezerService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    // ToDo 냉동 조회
    public List<Food> findFreezers() {
        return (List<Food>) foodRepository.findByRefrigerator(Refrigerator.FREEZER);
    }
}
