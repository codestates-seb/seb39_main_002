package mainproject.food.enumType;

import lombok.Getter;

public enum FoodClassification {
    MEAT(1,"육류"),
    SEAFOOD(2,"해산물"),
    VEGETABLE(3, "채소"),
    FRUIT(4,"과일"),
    DAIRY_PRODUCT(5,"유제품"),
    BEVERAGE(6,"음료"),
    PROCESSED_FOOD(7,"가공식품"),
    FINISHED(8,"완제품"),
    CONDIMENT(9,"조미로"),
    ETC(10,"기타");

    @Getter
    private int setNum;

    @Getter
    private String name;

    FoodClassification(int setNum, String name) {
        this.setNum = setNum;
        this.name = name;
    }
}
