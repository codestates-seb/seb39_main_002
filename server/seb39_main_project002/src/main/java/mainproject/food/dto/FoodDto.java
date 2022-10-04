package mainproject.food.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mainproject.food.enumType.FoodClassification;
import mainproject.food.enumType.Refrigerator;
import mainproject.member.entity.Member;


import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
public class FoodDto {

    private Long id;

    @Pattern(regexp = "^(?=\\s*\\S).*$", message = "식자재는 공백이 아니어야 합니다.")
    private String foodName;

    private String foodClassification; // String 타입으로 수정

    private Refrigerator refrigerator; // 냉장고 분류 enum 타입으로 수정 coldStorage 냉장실, freezer 냉동고

    private String quantity; // 수량

    private Date shelfLife; //유통기한

    private String email; //?? 이메일 정보를 담을 객체

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
