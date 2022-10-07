package mainproject.member.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.audit.Auditable;
import mainproject.food.entity.Food;
import mainproject.notepad.entity.Notepad;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Member extends Auditable {

    @Id
    @Column(name = "email",nullable = false, updatable = false)
    private String email;

    // (1) 추가
    @Column(length = 100, nullable = false)
    private String password;


    @Column
    private String nickname;

    // (2) 추가 user, admin
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();



    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL) //영속전이
    @JsonIgnoreProperties({"member"}) // 순환참조
    private List<Food> foods = new ArrayList<>();


    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL) //영속전이
    @JsonIgnoreProperties({"member"}) // 순환참조
    private List<Notepad> notepads = new ArrayList<>();

//
//    public Member(String email) {
//        this.email = email;
//    }
//    public Member(String password, String email, String nickname) {
//        this.password = password;
//        this.email = email;
//        this.nickname = nickname;
//    }

}
