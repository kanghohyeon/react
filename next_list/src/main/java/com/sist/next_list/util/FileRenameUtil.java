package com.sist.next_list.util;

import java.io.File;

public class FileRenameUtil {

    public static String checkSameFilename(String fileName, String path) {
        // 인자인 fileName에서 확장자를 뺀 파일명 가려내자!
        // 우선 "."의 위치를 알아내야 한다.
        int period = fileName.lastIndexOf("."); // test123.txt --> 7

        String f_name = fileName.substring(0, period); // test123
        String suffix = fileName.substring(period);// .txt

        // 전체경로(절대경로+파일명)
        // String saveFilePath = path + "/" +fileName;
        String saveFilePath = path + System.getProperty("file.separator") + fileName;

        // 위의 전체경로를 가지고 파일객체 생성
        File f = new File(saveFilePath);

        // 파일이 이미 있다면 파일명 뒤에 숫자를 붙이기 위해 변수를 하나 준비하자
        int idx = 1;

        while (f.exists()) {
            // 파일이 이미 존재하고 있는 파일일 때
            StringBuffer sb = new StringBuffer();
            sb.append(f_name);
            sb.append(idx++);
            sb.append(suffix);

            fileName = sb.toString();// test1231.txt

            saveFilePath = path + System.getProperty("file.separator") + fileName;

            // 수정된 파일명을 가지고 다시 File객체를 생성
            f = new File(saveFilePath);
        }
        return fileName;
    }
}
