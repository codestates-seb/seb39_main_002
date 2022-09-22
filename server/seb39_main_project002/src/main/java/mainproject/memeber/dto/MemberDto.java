package mainproject.memeber.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.validator.NotSpace;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

    public class MemberDto {

        @Getter
        @AllArgsConstructor // TODO 테스트를 위해 추가됨
        public static class Post {


            @NotBlank
            @Email
            private String email;

            @NotBlank(message = "이름은 공백이 아니어야 합니다.")
            private String name;

            private String password;
        }

        @Getter
        @AllArgsConstructor
        public static class Patch {
            private String memberId;

            @NotSpace(message = "회원 이름은 공백이 아니어야 합니다")
            private String name;

            @NotSpace(message = "비밀번호는 공백이 아니어야 합니다")
            private String password;


            public void setMemberId(String  memberId) {
                this.memberId = memberId;
            }
        }

        @AllArgsConstructor
        @Getter
        public static class Response {
            private String memberId;
            private String email;
            private String name;
            private String password;

        }
    }


