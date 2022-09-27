package mainproject.food.service;

import mainproject.exception.BusinessLogicException;
import mainproject.exception.ExceptionCode;
import mainproject.food.entity.Food;

import mainproject.food.repositiry.FoodRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    private final FoodRepository foodRepository;


    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;

    }

    // ToDo 등록
    public Food createFood(Food food) {

        food.setCreatedAt(LocalDateTime.now());

        return foodRepository.save(food);
    }

    // ToDo 전체조회 관리자 모드
    public List<Food> findFoods() {
        return (List<Food>)foodRepository.findAll();

    }
    // ToDo 사용자 식재로 조회 로그인과 연동하여 로그인 아이디 맞을 시 조회를 위한 로그 공부가 더 필요 해 보임

    // ToDo 수정
    public Food updateFod(Food food) {
        Optional.ofNullable(food.getFoodName())
                .ifPresent(foodName -> food.setFoodName(foodName));
        Optional.ofNullable(food.getFoodClassification())
                .ifPresent(foodClassification -> food.setFoodClassification(foodClassification));
        Optional.ofNullable(food.getRefrigerator())
                .ifPresent(refrigerator -> food.setRefrigerator(refrigerator));
        Optional.ofNullable(food.getQuantity())
                .ifPresent(quantity -> food.setQuantity(quantity));
        Optional.ofNullable(food.getShelfLife())
                .ifPresent(shelfLife -> food.setShelfLife(shelfLife));
        Optional.ofNullable(food.getCreatedAt())
                        .ifPresent(createdAt -> food.getCreatedAt());

        food.setModifiedAt(LocalDateTime.now());

        return foodRepository.save(food);
    }

    //ToDo 삭제
    public void deleteFood(Long id) {
        Food findFood = findVerifiedFood(id);
        foodRepository.delete(findFood);
    }


    // ToDo 존재하는 식재료인지
    public Food findVerifiedFood(Long id) {
        Optional<Food> optionalFood =
                foodRepository.findById(id);
        Food findFood = optionalFood.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.FOODS_NOT_FOUND));

        return findFood;
    }
}
