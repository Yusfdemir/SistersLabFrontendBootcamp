import PropTypes from 'prop-types';
import { Divider, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledCategoryListStack } from './style'

const CategoryList = ({handleCategoryClick}) => {
    const { categories, loadingCategories } = useSelector(
      (state) => state.categories
    );

  return (
    <StyledCategoryListStack
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Typography variant="h4" color="grey">
            Categories
          </Typography>
          <List component="nav">
            {categories.map((category) => (
              <ListItem key={category} disablePadding>
                <ListItemButton onClick={() => handleCategoryClick(category)}>
                  <ListItemText primary={category} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </StyledCategoryListStack>
  )
}

CategoryList.propTypes={
    handleCategoryClick:PropTypes.func.isRequired
}

export default CategoryList

