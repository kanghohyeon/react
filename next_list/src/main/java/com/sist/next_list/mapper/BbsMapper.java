package com.sist.next_list.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.sist.next_list.vo.BbsVO;

@Mapper
public interface BbsMapper {
    int totalCount(String searchType, String searchValue, String bname);

    List<BbsVO> list(String searchType, String searchValue,
            String bname, int begin, int end);

    int add(BbsVO vo);

    BbsVO get_bbs(String b_idx);

    int hit(String b_idx);
}
