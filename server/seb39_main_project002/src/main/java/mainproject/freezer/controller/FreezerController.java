//package mainproject.freezer.controller;
//
//import mainproject.food.entity.Food;
//import mainproject.food.mapper.FoodMapper;
//import mainproject.freezer.service.FreezerService;
//import mainproject.response.SingleResponseDto;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*", allowedHeaders = "*")
//@RestController
//@RequestMapping("/v1/foods/freezer")
//public class FreezerController {
//
//    private final FreezerService freezerService;
//
//    private final FoodMapper foodMapper;
//
//    public FreezerController(FreezerService freezerService, FoodMapper foodMapper) {
//        this.freezerService = freezerService;
//        this.foodMapper = foodMapper;
//    }
//
//    @GetMapping
//    public ResponseEntity getFreezers() {
//
//        List<Food> foods = freezerService.findFreezers();
//
//        return new ResponseEntity<>(new SingleResponseDto<>(foodMapper.foodsToFoodResponseDto(foods)), HttpStatus.OK);
//    }
//}
