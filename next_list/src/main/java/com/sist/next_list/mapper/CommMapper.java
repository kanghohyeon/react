package com.sist.next_list.mapper;

import java.util.List;

import com.sist.next_list.vo.CommVO;

public interface CommMapper {

    List<CommVO> commList(String b_idx);
}
