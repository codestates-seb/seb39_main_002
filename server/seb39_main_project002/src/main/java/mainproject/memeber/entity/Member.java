package mainproject.memeber.entity;

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
    private String memberId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column
    private String name;

    // (1) 추가
    @Column(length = 100, nullable = false)
    private String password;

    // (2) 추가 user, admin
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
