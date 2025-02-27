import React, { useState } from "react";
import styles from "../css/Ex6.module.css"
import data from "../data/data.json"

function Ex6_table(prop){
  
    const [langId,setLangId] = useState(prop.idx);
    const lang_list = data.lang.filter(lang=>lang.subject == prop.idx);

    return(
        <>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>교과목</th>
                        <th>난이도</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lang_list.map(
                            lang => {
                                return(
                                    <tr key={lang.id}>
                                        <td>{lang.title}</td>
                                        <td>{lang.level}</td>
                                    </tr>
                                );

                            }
                                
                            
                        )
                    }
                </tbody>
            </table>
        </>
      
    )
      
    
}
export default Ex6_table;