package mainproject.food.controller;

import mainproject.food.dto.FoodDto;
import mainproject.food.entity.Food;
import mainproject.food.mapper.FoodMapper;
import mainproject.food.service.FoodService;
import mainproject.member.entity.Member;
import mainproject.member.service.MemberService;
import mainproject.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;



@RestController
@RequestMapping("/v1/foods/{email}")
public class FoodController {

    private final FoodService foodService;

    private final FoodMapper foodMapper;

    private final MemberService memberService;

    public FoodController(FoodService foodService, FoodMapper foodMapper, MemberService memberService) {
        this.foodService = foodService;
        this.foodMapper = foodMapper;
        this.memberService = memberService;
    }

    @PostMapping("")
    public ResponseEntity postFood(@PathVariable("email") String email,
            @Valid @RequestBody FoodDto foodDto) {

        Food food = foodService.createFood(email,foodMapper.foodPostDtoToFood(foodDto));

        return new ResponseEntity<>(new SingleResponseDto<>(foodMapper.foodToFoodResponse(food)), HttpStatus.CREATED);
    }


    @GetMapping("")
    public ResponseEntity getFoods(@PathVariable("email") String email) {


        List<Food> foods =foodService.findFoods(email);

        return new ResponseEntity<>(new SingleResponseDto<>(foodMapper.foodsToFoodResponseDto(foods)),HttpStatus.OK);
    }

    // 유저 연동이 되면 유저의 식재료를 불러와야 함 그러기 위해서는 하나의 식재료 검색은 필요 없을 듯 함 그레서 유저의 전체 식재료를 불러와야함

    // 식재료 수정
    @PatchMapping("/{id}")
    public ResponseEntity patchFood(
            @PathVariable("email")String email,
            @PathVariable("id") @Positive Long id,
            @Valid @RequestBody FoodDto requestBody) {

        requestBody.setId(id);

        Food food =
                foodService.updateFod(email,foodMapper.foodPatchToFood(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(foodMapper.foodToFoodResponse(food)),HttpStatus.OK);
    }

    // 식자재 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity deleteFood(
            @PathVariable("email") String email,
            @PathVariable("id") @Positive Long id) {

        foodService.deleteFood(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
