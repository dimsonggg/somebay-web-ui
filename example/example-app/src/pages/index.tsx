import styled from "styled-components";
import {_colors, Typography} from "../../../../dist/esm";

export default function Home() {
    return (
        <Page>
            <LeftColumn>
                <MarginBottom56>
                    <Typography.H1>Will the app<br/> definitely works<br/> on my computer?</Typography.H1>
                </MarginBottom56>
                <MarginBottom56>
                    <Typography.H2>Will the app<br/> definitely works<br/> on my computer?</Typography.H2>
                </MarginBottom56>
                <MarginBottom56>
                    <Typography.H3>Will the app<br/> definitely works<br/> on my computer?</Typography.H3>
                </MarginBottom56>
                <MarginBottom56>
                    <Typography.H4>Will the app<br/> definitely works<br/> on my computer?</Typography.H4>
                </MarginBottom56>
                <MarginBottom56>
                    <Typography.H5>Will the app<br/> definitely works<br/> on my computer?</Typography.H5>
                </MarginBottom56>
                <MarginBottom56>
                    <Typography.H6>Will the app<br/> definitely works<br/> on my computer?</Typography.H6>
                </MarginBottom56>
                <MarginBottom56>
                    <Typography.H7>Will the app<br/> definitely works<br/> on my computer?</Typography.H7>
                </MarginBottom56>
            </LeftColumn>

            <RightColumn>
                <MarginBottom26>
                    <Typography.ContentTextXL>Will the app<br/> definitely works<br/> on my computer?</Typography.ContentTextXL>
                </MarginBottom26>
                <MarginBottom32>
                    <Typography.ContentTextXL as={"a"} href={"/"}>Will the app<br/> definitely works<br/> on my computer?</Typography.ContentTextXL>
                </MarginBottom32>
                <MarginBottom26>
                    <Typography.ContentTextL>Will the app<br/> definitely works<br/> on my computer?</Typography.ContentTextL>
                </MarginBottom26>
                <MarginBottom32>
                    <Typography.ContentTextL as={"a"} href={"/"}>Will the app<br/> definitely works<br/> on my computer?</Typography.ContentTextL>
                </MarginBottom32>
                <MarginBottom32>
                    <Typography.ContentTextM>Will the app definitely<br/> works on my computer?</Typography.ContentTextM>
                </MarginBottom32>
                <MarginBottom32>
                    <Typography.ContentTextM as={"a"} href={"/"}>Will the app definitely<br/> works on my computer?</Typography.ContentTextM>
                </MarginBottom32>
                <MarginBottom32>
                    <Typography.ContentTextS>Will the app definitely<br/> works on my computer?</Typography.ContentTextS>
                </MarginBottom32>
                <MarginBottom32>
                    <Typography.ContentTextS as={"a"} href={"/"}>Will the app definitely<br/> works on my computer?</Typography.ContentTextS>
                </MarginBottom32>
                <MarginBottom32>
                    <Typography.ButtonText>Will the app definitely<br/> works on my computer?</Typography.ButtonText>
                </MarginBottom32>
            </RightColumn>

        </Page>
    )
}

const Page = styled.main`
  color: ${_colors.somebayBlack};
  position: relative;
  overflow-x: hidden;
  padding-top: 430px;
  padding-left: 140px;
  padding-right: 239px;
  display: flex;
  justify-content: space-between;
`

const MarginBottom56 = styled.div`
  margin-bottom: 56px;
`

const MarginBottom32 = styled.div`
  margin-bottom: 32px;
`

const MarginBottom26 = styled.div`
  margin-bottom: 26px;
`

const LeftColumn = styled.div`
  width: 523px;
  padding-top: 6px;
`

const RightColumn = styled.div`
  width: 232px;
`