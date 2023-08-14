package com.preproject.stackOverflow.answer.dto;

import com.preproject.stackOverflow.answer.entity.Answer;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@Builder
@Getter
@Setter
@NoArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    //    private MemberDto.Response memberInformation;
    private Answer.AnswerStatus answerStatus;
    private long questionId;
    private String content;
    private long voteCount;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;



    public AnswerResponseDto(long answerId,
//                             MemberDto.Response memberInformation,
                             Answer.AnswerStatus answerStatus, long questionId, String content, long voteCount,
                             LocalDateTime createdAt, LocalDateTime modifiedAt) {
        this.answerId = answerId;
//        this.memberInformation = memberInformation;
        this.answerStatus = answerStatus;
        this.questionId = questionId;
        this.content = content;
        this.voteCount = voteCount;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}
