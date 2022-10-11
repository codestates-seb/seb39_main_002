package mainproject.food.repository;

import mainproject.food.entity.Food;
import mainproject.food.enumType.Refrigerator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {

    List<Food> findByRefrigerator(Refrigerator refrigerator);

    List<Food> findAllByMember_Email(String email);

}
