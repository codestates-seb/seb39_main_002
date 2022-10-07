package mainproject.notepad.service;

import mainproject.exception.BusinessLogicException;
import mainproject.exception.ExceptionCode;
import mainproject.food.repositiry.FoodRepository;
import mainproject.member.entity.Member;
import mainproject.member.repository.MemberRepository;
import mainproject.notepad.entity.Notepad;
import mainproject.notepad.repository.NotepadRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class NotepadService {

    private final NotepadRepository notepadRepository;

    private final MemberRepository memberRepository;

    public NotepadService(NotepadRepository notepadRepository, MemberRepository memberRepository) {
        this.notepadRepository = notepadRepository;
        this.memberRepository = memberRepository;
    }

    // ToDo 등록
    public Notepad createNotepad(String email, Notepad notepad) {
        Member member = memberRepository.findByEmail(email).orElseThrow(()->{
            return new IllegalArgumentException("이메일을 찾을 수 없습니다.");
        });
        notepad.setMember(member);
        notepad.setCreatedAt(LocalDateTime.now());

        return notepadRepository.save(notepad);
    }

    // ToDo 조회
    public List<Notepad> findNotepads(String email) {
        return (List<Notepad>) notepadRepository.findByMember_Email(email);
    }


    // ToDo 삭제
    public void deleteNotepad(Long id) {
        Notepad findNotepad = findVerifiedNotepad(id);
        notepadRepository.delete(findNotepad);
    }

    // ToDo 존재하는 메모장 ID 인지
    public Notepad findVerifiedNotepad(Long id) {
        Optional<Notepad> optionalNotepad =
                notepadRepository.findById(id);

        Notepad findNotepad = optionalNotepad.orElseThrow(()->
            new BusinessLogicException(ExceptionCode.NOTEPAD_NOT_FOUND));

        return findNotepad;

    }


}
