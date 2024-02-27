import { useState } from "react";
import { HighLightListBox, HighLightListContainer } from "./Style";


const [ statusList, setStatusList] = useState("select")

export const HighLightList = ({
    textButton,
    clickButton = false,
    onPress,
}) => {
    return(
        
        <HighLightListContainer>
                <HighLightListBox>
                    
                </HighLightListBox>
        </HighLightListContainer>
        
    );
}