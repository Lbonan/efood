import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../../styles";

export const ButtonContainer = styled.button`
 background-color: ${color.principal};
 color: ${color.branca};
 font-size: 14px;
 font-weight: 700;
 padding: 4px;
`
export const ButtonLink = styled(Link)`
 background-color: ${color.principal};
 color: ${color.branca};
 font-size: 14px;
 font-weight: 700;
 padding: 4px 6px;
 text-decoration: none;
`
