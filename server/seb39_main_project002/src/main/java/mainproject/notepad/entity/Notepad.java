package mainproject.notepad.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mainproject.audit.Auditable;
import mainproject.member.entity.Member;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Notepad extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String contents;

    @ManyToOne
    @JoinColumn(name ="email")
    private Member member;


}
