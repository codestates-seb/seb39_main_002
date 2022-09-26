package mainproject.memeber.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.audit.Auditable;

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

//    @Column(nullable = false, updatable = false, unique = true) //오류 뜸 - 나중에 해결해보기
//    private String id;
    @Column(nullable = false, updatable = false, unique = true) //중복 불가능 - 로그인 아이디임
    private String email;

    @Column
    private String nickname; //중복 가능

    // (1) 추가
    @Column(length = 100, nullable = false)
    private String password;

    // (2) 추가 user, admin
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public Member(String email) {
        this.email = email;
    }
    public Member(String email, String nickname, String password) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }
}
