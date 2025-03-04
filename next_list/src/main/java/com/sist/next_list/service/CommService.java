package com.sist.next_list.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.next_list.mapper.CommMapper;
import com.sist.next_list.vo.CommVO;

@Service
public class CommService {

    @Autowired
    private CommMapper cMapper;

    public List<CommVO> commList(String b_idx) {
        return cMapper.commList(b_idx);
    }
}
