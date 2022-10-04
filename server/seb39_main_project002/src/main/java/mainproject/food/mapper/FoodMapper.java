package mainproject.food.mapper;

import mainproject.food.dto.FoodDto;
import mainproject.food.entity.Food;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FoodMapper {

    //식자재 등록
    Food foodPostDtoToFood(FoodDto requestBody);

    //식자재 조회
    List<FoodDto> foodsToFoodResponseDto(List<Food> foods);

    //식자재 수정
    Food foodPatchToFood(FoodDto requestBody);

    FoodDto foodToFoodResponse(Food food);

}
