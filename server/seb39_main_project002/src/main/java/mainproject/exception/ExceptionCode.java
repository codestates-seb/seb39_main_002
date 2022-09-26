package mainproject.exception;

import lombok.Getter;

public enum ExceptionCode {

    FOODS_NOT_FOUND(404, "Food not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
