package mainproject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.validator.NotSpace;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {

    @Getter
    @AllArgsConstructor // TODO 테스트를 위해 추가됨
    public static class Post {

        @NotBlank
        private String password;
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "닉네임은 공백이 아니어야 합니다.")
        private String nickname;

    }

    @Getter
    @AllArgsConstructor
    public static class Patch {


        @NotSpace(message = "닉네임은 공백이 아니어야 합니다")
        private String nickname;

        @NotBlank
        @Email
        private String email;

//            @NotSpace(message = "비밀번호는 공백이 아니어야 합니다")
//            private String password;


        public void SetEmail(String  email) {
            this.email = email;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private String email;
        private String nickname;
//            private String password;

    }
}
