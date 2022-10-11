package mainproject.recipe.repository;

import mainproject.recipe.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.file.LinkOption;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}
