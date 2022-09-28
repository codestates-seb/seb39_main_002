package mainproject.memeber.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.audit.Auditable;
import mainproject.food.entity.Food;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column//(nullable = false, updatable = false, unique = true)
    private String id;

    // (1) 추가
    @Column(length = 100, nullable = false)
    private String password;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column
    private String nickname;

    // (2) 추가 user, admin
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Food> foods = new ArrayList<>();

    public void addFood(Food food){
        foods.add(food);
    }

    public Member(String email) {
        this.email = email;
    }
    public Member(String id, String password, String email, String nickname) {
        this.id = id;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
    }
}
