import React, { useEffect, useState } from "react";

import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Tooltip from '@mui/material/Tooltip';

import { getVideogames } from "../api/index";
import { ItemInfoEntity } from "../model/ItemInfoEntity/index";

export const Cart: React.FC = () => {

    const [videogames, setVideogames] = useState<ItemInfoEntity[]>([]);

    useEffect(() => {
        getVideogames()
            .then((data) => {
                setVideogames(data);
            }
            );
    }, [])


    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {videogames.map((videogame) => {
                const labelId = `checkbox-list-secondary-label-${videogame}`;
                return (
                    <ListItem
                        key={videogame.id}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    src={`../assets/videogames/${videogame.picURL}.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={videogame.title} />
                            <Tooltip title="Delete">
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>

    )
};