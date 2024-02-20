import { Image } from "react-native"
import { BoxCard, BoxCardInformation, BoxCardText, BoxCardTime, BoxTime, ButtonCancel, ContainerCard, ContainerInformation, ImageCard, TextAge, TextCancel, TextName, TextTime, TextType } from "./Style"

export const Cards = ({ SourceImage, Name, Age, Type, Time }) => {
    return (
        <ContainerCard>
            <BoxCard>
                <ImageCard source={SourceImage} />
                <BoxCardInformation>
                    <TextName>{Name}</TextName>
                    <BoxCardText>
                        <TextAge>{Age} anos</TextAge>
                        <Image style={{alignSelf: "center"}} source={require("../../assets/img/img_pontinho.png")}/>
                        <TextType>{Type}</TextType>
                    </BoxCardText>

                    <BoxCardTime>
                        <BoxTime>
                            <Image style={{ alignSelf: "center" }} source={require("../../assets/img/img_time.png")} />
                            <TextTime>{Time}</TextTime>
                        </BoxTime>
                    </BoxCardTime>

                </BoxCardInformation>

                <ButtonCancel>
                    <TextCancel>Cancelar</TextCancel>
                </ButtonCancel>
            </BoxCard>
        </ContainerCard>
    )
}