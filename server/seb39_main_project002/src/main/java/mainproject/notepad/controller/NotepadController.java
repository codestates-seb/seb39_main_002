package mainproject.notepad.controller;

import mainproject.member.service.MemberService;
import mainproject.notepad.dto.NotepadDto;
import mainproject.notepad.entity.Notepad;
import mainproject.notepad.mapper.NotepadMapper;
import mainproject.notepad.service.NotepadService;
import mainproject.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/v1/notepad/{email}")
public class NotepadController {

    private final NotepadService notepadService;

    private final NotepadMapper notepadMapper;

    private final MemberService memberService;

    public NotepadController(NotepadService notepadService, NotepadMapper notepadMapper, MemberService memberService) {
        this.notepadService = notepadService;
        this.notepadMapper = notepadMapper;
        this.memberService = memberService;
    }

    @PostMapping("")
    public ResponseEntity postNotepad(@PathVariable("email") String email,
                                      @Valid @RequestBody NotepadDto notepadDto) {

        Notepad notepad = notepadService.createNotepad(email,notepadMapper.notepadPostDtoToNotepad(notepadDto));

        return new ResponseEntity<>(new SingleResponseDto<>(notepadMapper.notepadToNotepadResponse(notepad)), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity getNotepads(@PathVariable("email") String email) {

        List<Notepad> notepads = notepadService.findNotepads(email);

        return new ResponseEntity<>(new SingleResponseDto<>(notepadMapper.notepadsToNotepadResponseDto(notepads)),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteNotepad(
            @PathVariable("email") String email,
            @PathVariable("id") @Positive Long id) {

        notepadService.deleteNotepad(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
