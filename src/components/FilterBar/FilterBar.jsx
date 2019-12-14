import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { StyledFilterBar, Icon, Button } from "./styles";
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

  return (
    <StyledFilterBar>
      <div>
        <input type="text" name="text" value={filter.text} onChange={handleSetTextFilter}/>
        <SetSelector />
      </div>
      <div>
        <Icon
          src="https://i.imgur.com/3f0zmrv.png"
          alt="White"
          name="White"
          onClick={handleSetFilter}
          selected={filter.White}
        />
        <Icon
          src="https://i.imgur.com/Cuo8vh4.png"
          alt="Blue"
          name="Blue"
          onClick={handleSetFilter}
          selected={filter.Blue}
        />
        <Icon
          src="https://i.imgur.com/1kCZTHy.png"
          alt="Black"
          name="Black"
          onClick={handleSetFilter}
          selected={filter.Black}
        />
        <Icon
          src="https://i.imgur.com/ioTehMj.png"
          alt="Red"
          name="Red"
          onClick={handleSetFilter}
          selected={filter.Red}
        />
        <Icon
          src="https://i.imgur.com/PMBUYLO.png"
          alt="Green"
          name="Green"
          onClick={handleSetFilter}
          selected={filter.Green}
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
          name="Common"
          onClick={handleSetFilter}
          selected={filter.Common}
        >
          Common
        </Button>
        <Button
          name="Uncommon"
          onClick={handleSetFilter}
          selected={filter.Uncommon}
        >
          Uncommon
        </Button>
        <Button
          name="Rare"
          onClick={handleSetFilter}
          selected={filter.Rare}
        >
          Rare
        </Button>
        <Button
          name="Mythic"
          onClick={handleSetFilter}
          selected={filter.Mythic}
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