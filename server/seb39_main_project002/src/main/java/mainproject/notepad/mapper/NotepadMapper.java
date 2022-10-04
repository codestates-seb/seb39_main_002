package mainproject.notepad.mapper;

import mainproject.notepad.dto.NotepadDto;
import mainproject.notepad.entity.Notepad;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NotepadMapper {

    // 메모 등록
    Notepad notepadPostDtoToNotepad(NotepadDto requestBody);
    // 메모 조회
    List<NotepadDto> notepadsToNotepadResponseDto(List<Notepad> notepads);

    //메모 응답
    NotepadDto notepadToNotepadResponse(Notepad notepad);
}
