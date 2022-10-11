package mainproject.food.service;

import mainproject.exception.BusinessLogicException;
import mainproject.exception.ExceptionCode;
import mainproject.food.entity.Food;

import mainproject.food.repository.FoodRepository;
import mainproject.member.entity.Member;
import mainproject.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    private final MemberRepository memberRepository;

    public FoodService(FoodRepository foodRepository, MemberRepository memberRepository) {
        this.foodRepository = foodRepository;
        this.memberRepository = memberRepository;

    }

    // ToDo 등록
    public Food createFood(String email,Food food) {

        Member member = memberRepository.findByEmail(email).orElseThrow(() -> {
            return new IllegalArgumentException("이메이을 찾을 수 없습니다.");
        });

        food.setMember(member);
        food.setCreatedAt(LocalDateTime.now());

        return foodRepository.save(food);
    }

    // ToDo 조회 할 때 회원의 식재료만 조회 수정
    public List<Food> findFoods(String email) {

        return (List<Food>) foodRepository.findAllByMember_Email(email);

        // 리턴 값을 받을 때 Controller 에서 -> 멤버 이메일을 받아온다 -> 멤버 이메일을 받아온 정보를 이용 하여 food 의 ->메핑된 정보를 가져 온다.
    }
    // ToDo 사용자 식재로 조회 로그인과 연동하여 로그인 아이디 맞을 시 조회를 위한 로그 공부가 더 필요 해 보임

    // ToDo 수정
    public Food updateFod(String email,Food food) {
        Optional.ofNullable(food.getFoodName())
                .ifPresent(foodName -> food.setFoodName(foodName));
        Optional.ofNullable(food.getFoodClassification())
                .ifPresent(foodClassification -> food.setFoodClassification(foodClassification));
        Optional.ofNullable(food.getRefrigerator())
                .ifPresent(refrigerator -> food.setRefrigerator(refrigerator));
        Optional.ofNullable(food.getQuantity())
                .ifPresent(quantity -> food.setQuantity(quantity));
        Optional.ofNullable(food.getShelfLife())
                .ifPresent(shelfLife -> food.setShelfLife(shelfLife));
        Optional.ofNullable(food.getCreatedAt())
                        .ifPresent(createdAt -> food.getCreatedAt());

        Member member = memberRepository.findByEmail(email).orElseThrow(() -> {
            return new IllegalArgumentException("이메이을 찾을 수 없습니다.");
        });
        food.setMember(member);

        food.setModifiedAt(LocalDateTime.now());


        return foodRepository.save(food);
    }

    //ToDo 삭제
    public void deleteFood(Long id) {
        Food findFood = findVerifiedFood(id);
        foodRepository.delete(findFood);
    }

    // ToDo 존재하는 식재료인지
    public Food findVerifiedFood(Long id) {
        Optional<Food> optionalFood =
                foodRepository.findById(id);
        Food findFood = optionalFood.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.FOODS_NOT_FOUND));

        return findFood;
    }

}
