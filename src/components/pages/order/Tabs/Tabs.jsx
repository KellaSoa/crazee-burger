import React from "react";
import { styled } from "styled-components";
import PannelButton from "../../../reusable-ui/PannelButton";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";

export default function Tabs() {
  return (
    <div>
      <TabsStyled>
        <PannelButton Icon={<FiChevronDown className="icon" />} />
        <PannelButton
          Icon={<AiOutlinePlus className="icon" />}
          label={"Ajouter un produit"}
          className="addProduct"
        />
        <PannelButton
          Icon={<MdModeEditOutline className="icon" />}
          label={"Modifier un produit"}
        />
      </TabsStyled>

      <div className="containTab">
        <div id="Cat" className="tabcontent">
          <h3>Meowww.</h3>
        </div>
        <div id="Bear" className="tabcontent">
          <h3>Rawrrr.</h3>
        </div>
        <div id="Dog" className="tabcontent">
          <h3>Bork Bork.</h3>
        </div>
      </div>
    </div>
  );
}

const TabsStyled = styled.div`
  overflow: hidden;
  display: flex;
  margin-left: 50px;
  border-bottom: 1px solid ${theme.colors.greyLight};
  .addProduct {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
  }
  .containTab {
  }
  /* Style the tab content */
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border-top: 1px solid ${theme.colors.greyLight};
  }
`;
