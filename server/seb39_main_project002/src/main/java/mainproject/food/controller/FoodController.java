package mainproject.food.controller;

import mainproject.food.dto.FoodDto;
import mainproject.food.entity.Food;
import mainproject.food.mapper.FoodMapper;
import mainproject.food.service.FoodService;
import mainproject.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/foods")
public class FoodController {

    private final FoodService foodService;

    private final FoodMapper foodMapper;

    public FoodController(FoodService foodService, FoodMapper foodMapper) {
        this.foodService = foodService;
        this.foodMapper = foodMapper;
    }

    @PostMapping
    public ResponseEntity postFood(@Valid @RequestBody FoodDto foodDto) {

        Food food = foodService.createFood(foodMapper.foodPostDtoToFood(foodDto));

        return new ResponseEntity<>(new SingleResponseDto<>(foodMapper.foodToFoodResponse(food)), HttpStatus.CREATED);
    }
}
