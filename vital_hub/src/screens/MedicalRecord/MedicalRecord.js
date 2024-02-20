import { Container } from "../../components/Container/Style";
import { UserNameMedicalReport } from "../../components/UserName/Style";
import { UserPhoto } from "../../components/UserPhoto/Style";

export const MedicalRecord = () => {
    return (
        <Container>
            <UserPhoto source={require("../../assets/UserPhoto.png")}/>
            
            <UserNameMedicalReport>Richard Kosta</UserNameMedicalReport>
        </Container>
    );
}