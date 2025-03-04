package com.sist.next_list.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.sist.next_list.service.BbsService;
import com.sist.next_list.util.FileRenameUtil;
import com.sist.next_list.util.Paging;
import com.sist.next_list.vo.BbsVO;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/notice")
public class BbsController {

    @Autowired
    private BbsService bService;

    @Autowired
    private ServletContext application;

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private HttpSession session;

    @Autowired
    private HttpServletResponse response;

    @RequestMapping("/list") // http://localhost:8080/notice/list
    @ResponseBody
    public Map<String, Object> list(String bname,
            String searchType,
            String searchValue, String cPage) {
        Map<String, Object> map = new HashMap<>();

        int nowPage = 1;
        if (cPage != null)
            nowPage = Integer.parseInt(cPage);

        // bname이 무조건 인자로 넘어와야 한다. 그런데 공백이면 안된다.
        if (bname == null || bname.trim().length() == 0)
            bname = "BBS";

        // 전체게시물의 수
        int totalRecord = bService.getTotalCount(searchType, searchValue, bname);

        // 페이징 객체 생성
        Paging page = new Paging(7, 5);
        page.setTotalRecord(totalRecord);
        page.setNowPage(nowPage);

        // 뷰페이지에서 표현할 목록을 가져올 때 사용하는 값(begin,end)
        int begin = page.getBegin();
        int end = page.getEnd();

        // 목록 가져오기
        BbsVO[] ar = bService.getList(searchType, searchValue, bname, begin, end);

        // 뷰페이지에서 표현할 정보들을 mv에 저장!
        map.put("ar", ar);
        map.put("page", page);
        map.put("totalRecord", totalRecord);
        map.put("bname", bname);
        map.put("nowPage", nowPage);

        return map;
    }

}
