package mainproject.member.controller;

import lombok.extern.slf4j.Slf4j;
import mainproject.member.dto.MemberDto;
import mainproject.member.entity.Member;
import mainproject.member.mapper.MemberMapper;
import mainproject.member.service.MemberService;
import mainproject.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1/members")
@Validated
@Slf4j
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }


    @PostMapping("/join")    //회원 등록
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponse(createdMember);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }


    @PatchMapping("/{email}") //회원정보 수정
    public ResponseEntity patchMember(
            @PathVariable("email")String email, Authentication authentication,
            @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.SetEmail(authentication.getName());

        Member member =
                memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
                HttpStatus.OK);
    }


    @GetMapping("/{email}") //회원정보 조회
    public ResponseEntity getMember(
            @PathVariable("email") String email, Authentication authentication) {
        Member member = memberService.findMember(authentication.getName());
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member))
                , HttpStatus.OK);
    }


    @DeleteMapping("/{email}") //회원 삭제
    public ResponseEntity deleteMember(
            @PathVariable("email") String email, Authentication authentication) {
        memberService.deleteMember(authentication.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
