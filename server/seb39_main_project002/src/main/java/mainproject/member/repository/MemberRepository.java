package mainproject.member.repository;

import mainproject.food.entity.Food;
import mainproject.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

//    List<Member> findByFood(Food food);

}
