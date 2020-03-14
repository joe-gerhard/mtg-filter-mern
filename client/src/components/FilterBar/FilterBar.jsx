import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { StyledFilterBar, Icon, Button, ResetButton, StyledInput } from "./styles";
import PropTypes from "prop-types";
import SetSelector from "../SetSelector/SetSelector";

const FilterBar = () => {

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleSetFilter = event => {
    dispatch({ type: "SET_FILTER", payload: event.target.name });
  };

  const handleSetTextFilter = event => {
    dispatch({ type: "SET_TEXT_FILTER", payload: event.target.value });
  };

  const handleResetFilter = () => {
    dispatch({ type: "RESET_FILTER" })
  }

  return (
    <StyledFilterBar>
      <div>
        <StyledInput type="text" name="text" value={filter.text} onChange={handleSetTextFilter}/>
        <SetSelector />
        <ResetButton onClick={handleResetFilter}>Reset</ResetButton>
      </div>
      <div>
        <Icon
          src="https://i.imgur.com/3f0zmrv.png"
          alt="White"
          name="W"
          onClick={handleSetFilter}
          selected={filter.W}
        />
        <Icon
          src="https://i.imgur.com/Cuo8vh4.png"
          alt="Blue"
          name="U"
          onClick={handleSetFilter}
          selected={filter.U}
        />
        <Icon
          src="https://i.imgur.com/1kCZTHy.png"
          alt="Black"
          name="B"
          onClick={handleSetFilter}
          selected={filter.B}
        />
        <Icon
          src="https://i.imgur.com/ioTehMj.png"
          alt="Red"
          name="R"
          onClick={handleSetFilter}
          selected={filter.R}
        />
        <Icon
          src="https://i.imgur.com/PMBUYLO.png"
          alt="Green"
          name="G"
          onClick={handleSetFilter}
          selected={filter.G}
        />
        <Icon
          src="https://i.imgur.com/1U3ZyBD.png"
          alt="Colorless"
          name="Colorless"
          onClick={handleSetFilter}
          selected={filter.Colorless}
        />
      </div>
      <div>
        <Button
          name="common"
          onClick={handleSetFilter}
          selected={filter.common}
        >
          Common
        </Button>
        <Button
          name="uncommon"
          onClick={handleSetFilter}
          selected={filter.uncommon}
        >
          Uncommon
        </Button>
        <Button
          name="rare"
          onClick={handleSetFilter}
          selected={filter.rare}
        >
          Rare
        </Button>
        <Button
          name="mythic"
          onClick={handleSetFilter}
          selected={filter.mythic}
        >
          Mythic
        </Button>
      </div>
    </StyledFilterBar>
  );
};

FilterBar.propTypes = {
  sets: PropTypes.array,
  activeSet: PropTypes.string,
  handleChangeSet: PropTypes.func,
  handleSetFilter: PropTypes.func,
  handleSetTextFilter: PropTypes.func,
};

export default FilterBar;