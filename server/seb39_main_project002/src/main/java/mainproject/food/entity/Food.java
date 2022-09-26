package mainproject.food.entity;

import lombok.Data;
import mainproject.audit.Auditable;
import mainproject.food.enumType.FoodClassification;
import mainproject.food.enumType.Refrigerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@Entity
@Data
public class Food extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String foodName; // 식자재 이름

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private FoodClassification foodClassification; // 식자재 분류 enum 타입으로 수정

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Refrigerator refrigerator; // 냉장고 분류 enum 타입으로 수정 coldStorage 냉장실, freezer 냉동고

    private String quantity; // 수량

    @Temporal(TemporalType.DATE)
    private Date shelfLife; //유통기한


    private String username;

//    @OneToOne
//    @JoinColumn(name = "code")
//    private FoodClassification foodClassification;
}
