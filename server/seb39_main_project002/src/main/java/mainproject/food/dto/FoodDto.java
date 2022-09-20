package mainproject.food.dto;

import lombok.Data;

import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.Date;

@Data
public class FoodDto {

    private Long id;

    @Pattern(regexp = "^(?=\\s*\\S).*$", message = "식자재는 공백이 아니어야 합니다.")
    private String foodName;

    private String foodClassification; // enum 타입으로 수정

    private String refrigerator; // 냉장고 분류 enum 타입으로 수정 coldStorage 냉장실, freezer 냉동고

    private Long quantity; // 수량

    private Date shelfLife; //유통기한

    private Date expiryDate; // 소비기한

    private String username; //회원 아이디디

   private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
