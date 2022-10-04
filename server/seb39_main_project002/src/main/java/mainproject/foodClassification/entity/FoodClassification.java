//package mainproject.foodClassification.entity;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import mainproject.audit.Auditable;
//import mainproject.food.entity.Food;
//
//import javax.persistence.*;
//
//@Entity
//@Data
//public class FoodClassification extends Auditable {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name ="code",nullable = false, updatable = false, unique = true)
//    private String code;
//
//    @Column(nullable = false)
//    private String name;
//
//
////    @OneToOne(mappedBy = "foodClassification", optional = false, cascade = CascadeType.ALL)
////    @JsonIgnoreProperties({"food"}) // 순환 참조
////    private Food food;
////
////    public Food getFood() {
////        return food;
////    }
////
////    public void setFood(Food food) {
////        this.food = food;
////    }
//}
