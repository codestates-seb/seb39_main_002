package mainproject.food.mapper;

import mainproject.food.dto.FoodDto;
import mainproject.food.entity.Food;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FoodMapper {

    //식자재 등록
    Food foodPostDtoToFood(FoodDto requestBody);

    FoodDto foodToFoodResponse(Food food);
}
