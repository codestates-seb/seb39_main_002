package mainproject.notepad.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class NotepadDto {

    private Long id;

    private String contents;

//    private String email;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
