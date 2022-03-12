import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

function DropdownMenu(props) {
  const classes = props.classes;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Link
        className={classes.menuButton}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        key={props.menuItem.id}
        onClick={handleToggle}
      >
        <Typography className={classes.text} variant="subtitle1">
          {props.menuItem.name} <ExpandMore className={classes.expandIcon} />
        </Typography>
        {/* <FontAwesomeIcon icon={faQuora}></FontAwesomeIcon> */}
      </Link>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {props.menuItem.children.map((item) => (
                    <MenuItem onClick={handleClose} key={item.id}>
                      <Link
                        key={item.id}
                        href={item.path}
                        className={classes.linkColor}
                      >
                        <Typography variant="subtitle1">{item.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
export default DropdownMenu;
