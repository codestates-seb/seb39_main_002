package mainproject.food.repositiry;

import mainproject.food.entity.Food;
import mainproject.food.enumType.Refrigerator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FoodRepository extends JpaRepository<Food, Long> {

    List<Food> findByRefrigerator(Refrigerator refrigerator);


}
