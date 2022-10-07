package mainproject.food.enumType;

import lombok.Getter;

public enum Refrigerator {
    COLD_STORAGE(1, "냉장실"),
    FREEZER(2,"냉장고");


    @Getter
    private int stepNumber;

    @Getter
    private String stepDescription;

    Refrigerator(int stepNumber, String stepDescription) {
        this.stepNumber = stepNumber;
        this.stepDescription = stepDescription;
    }
}
