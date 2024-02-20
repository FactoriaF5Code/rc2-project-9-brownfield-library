import PersonIcon from '@mui/icons-material/Person';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import './Searcher.css';

export const VerticalToggleButtons = ({
  activeButton,
  handleButtonChange,
  
}) => {
  return (
    <div>
      <ToggleButtonGroup
        value={activeButton}
        exclusive
        onChange={handleButtonChange}
      >
        <ToggleButton
          value="books"
          aria-label="book"
          className={activeButton === "books" ? 'toogleButton-active' : 'toggleButton'}
        >
          <CollectionsBookmarkIcon className='toggleIcon' />
        </ToggleButton>
        <ToggleButton
          value="members"
          aria-label="users"
          className={activeButton === "members" ? 'toogleButton-active' : 'toggleButton'}
        >
          <PersonIcon className='toggleIcon' />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
