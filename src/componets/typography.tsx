import styled from "styled-components";
import _fonts from "../styles/_fonts";

const H1 = styled.h1`
  font-family: ${_fonts.behindContent};
  font-style: inherit;
  font-weight: 400;
  font-size: 60px;
  line-height: 120%;
  letter-spacing: 0.04em;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const H2 = styled.h2`
  font-family: ${_fonts.behindContent};
  font-style: inherit;
  font-weight: 400;
  font-size: 48px;
  line-height: 128%;
  letter-spacing: 0.04em;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const H3 = styled.h3`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 400;
  font-size: 47px;
  line-height: 118%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const H4 = styled.h4`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 400;
  font-size: 36px;
  line-height: 138%;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const H5 = styled.h5`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 400;
  font-size: 27px;
  line-height: 138%;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const H6 = styled.h6`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 600;
  font-size: 23px;
  line-height: 158%;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const H7 = styled.h6`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 600;
  font-size: 19px;
  line-height: 138%;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const ContentTextXL = styled.span`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 400;
  font-size: 22px;
  line-height: 164%;
  letter-spacing: -0.01em;
  font-feature-settings: 'ss01';
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  color: inherit;
`;

const ContentTextL = styled.span`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 400;
  font-size: 20px;
  line-height: 164%;
  letter-spacing: -0.01em;
  font-feature-settings: 'ss01';
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  color: inherit;
`;

const ContentTextM = styled.span`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: 164%;
  letter-spacing: -0.03em;
  font-feature-settings: 'ss01';
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  color: inherit;
`;

const ContentTextS = styled.span`
  font-family: ${_fonts.inconsolata};
  font-style: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 164%;
  letter-spacing: -0.03em;
  font-feature-settings: 'ss01';
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  color: inherit;
`;

const ButtonText = styled.span`
  font-family: ${_fonts.behindContent};
  font-style: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 163.42%;
  letter-spacing: 0.01em;
  font-feature-settings: 'ss01';
  color: inherit;
`;

const BR = styled.br``;

const Typography = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    ContentTextXL,
    ContentTextL,
    ContentTextM,
    ContentTextS,
    ButtonText,
    BR,
};

export default Typography;