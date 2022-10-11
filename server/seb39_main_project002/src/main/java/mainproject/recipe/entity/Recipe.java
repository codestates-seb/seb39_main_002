package mainproject.recipe.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long RCP_SEQ; //일련번호

    private String RCP_NM;    //메뉴명
    private String RCP_WAY2; //조리방법
    private String RCP_PAT2; //요리종류
    private String INFO_WGT;    //중량(1인분)
    private String INFO_ENG;    //열량
    private String INFO_CAR;    //탄수화물
    private String INFO_PRO;    //단백질
    private String INFO_FAT;    //지방
    private String INFO_NA;    //나트륨
    private String HASH_TAG;    //해쉬태그
    private String ATT_FILE_NO_MAIN;    //이미지경로(소)
    private String ATT_FILE_NO_MK;    //이미지경로(대)
    private String RCP_PARTS_DTLS;    //재료정보
    private String MANUAL01; //만드는법_01
    private String MANUAL_IMG01;    //만드는법_이미지_01
    private String MANUAL02;    //만드는법_02
    private String MANUAL_IMG02;    //만드는법_이미지_02
    private String MANUAL03;    //만드는법_03
    private String MANUAL_IMG03;    //만드는법_이미지_03
    private String MANUAL04;    //만드는법_04
    private String MANUAL_IMG04;    //만드는법_이미지_04
    private String MANUAL05;    //만드는법_05
    private String MANUAL_IMG05;    //만드는법_이미지_05
    private String MANUAL06;    //만드는법_06
    private String MANUAL_IMG06;    //만드는법_이미지_06
    private String MANUAL07;    //만드는법_07
    private String MANUAL_IMG07;    //만드는법_이미지_07
    private String MANUAL08;    //만드는법_08
    private String MANUAL_IMG08;    //만드는법_이미지_08
    private String MANUAL09;    //만드는법_09
    private String MANUAL_IMG09;    //만드는법_이미지_09
    private String MANUAL10;    //만드는법_10
    private String MANUAL_IMG10;    //만드는법_이미지_10
    private String MANUAL11;    //만드는법_11
    private String MANUAL_IMG11;    //만드는법_이미지_11
    private String MANUAL12;    //만드는법_12
    private String MANUAL_IMG12;    //만드는법_이미지_12
    private String MANUAL13;    //만드는법_13
    private String MANUAL_IMG13;    //만드는법_이미지_13
    private String MANUAL14;    //만드는법_14
    private String MANUAL_IMG14;    //만드는법_이미지_14
    private String MANUAL15;    //만드는법_15
    private String MANUAL_IMG15;    //만드는법_이미지_15
    private String MANUAL16;    //만드는법_16
    private String MANUAL_IMG16;    //만드는법_이미지_16
    private String MANUAL17;    //만드는법_17
    private String MANUAL_IMG17;    //만드는법_이미지_17
    private String MANUAL18;    //만드는법_18
    private String MANUAL_IMG18;    //만드는법_이미지_18
    private String MANUAL19;    //만드는법_19
    private String MANUAL_IMG19;    //만드는법_이미지_19
    private String MANUAL20;    //만드는법_20
    private String MANUAL_IMG20;    //만드는법_이미지_20

}
