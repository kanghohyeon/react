package com.sist.next_list.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sist.next_list.mapper.BbsMapper;
import com.sist.next_list.vo.BbsVO;

@Service
public class BbsService {

    @Autowired
    private BbsMapper bMapper;

    // 검색 또는 목록기능에서 사용되는 전체게시물 수
    public int getTotalCount(String searchType, String searchValue, String bname) {
        return bMapper.totalCount(searchType, searchValue, bname);
    }

    // 검색 또는 목록 기능
    public BbsVO[] getList(String searchType, String searchValue,
            String bname, int begin, int end) {
        BbsVO[] ar = null;

        List<BbsVO> list = bMapper.list(searchType, searchValue, bname, begin, end);
        if (list != null && list.size() > 0) {
            ar = new BbsVO[list.size()];
            list.toArray(ar);
        }

        return ar;
    }

    // 원글 저장기능
    public int addBbs(BbsVO vo) {
        return bMapper.add(vo);
    }

    // 게시물을 검색
    public BbsVO getBbs(String b_idx) {
        return bMapper.get_bbs(b_idx);
    }

    // 조회수 증가
    public int hit(String b_idx) {
        return bMapper.hit(b_idx);
    }
}
