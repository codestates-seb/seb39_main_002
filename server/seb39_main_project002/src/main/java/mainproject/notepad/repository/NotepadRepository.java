package mainproject.notepad.repository;

import mainproject.notepad.entity.Notepad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotepadRepository extends JpaRepository<Notepad, Long> {

    List<Notepad> findByMember_Email(String email);
}
