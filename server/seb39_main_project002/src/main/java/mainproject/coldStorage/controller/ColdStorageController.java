package mainproject.coldStorage.controller;

import mainproject.coldStorage.service.ColdStorageService;
import mainproject.food.entity.Food;
import mainproject.food.mapper.FoodMapper;
import mainproject.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/v1/foods/coldStorage")
public class ColdStorageController {

    private final ColdStorageService coldStorageService;

    private final FoodMapper foodMapper;

    public ColdStorageController(ColdStorageService coldStorageService, FoodMapper foodMapper) {
        this.coldStorageService = coldStorageService;
        this.foodMapper = foodMapper;
    }

    @GetMapping
    public ResponseEntity getColdStorages() {

        List<Food> foods = coldStorageService.findColdStorage();

        return new ResponseEntity<>(new SingleResponseDto<>(foodMapper.foodsToFoodResponseDto(foods)), HttpStatus.OK);
    }


}
