// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../../SharedModule/components/Header/Header'
import Rescipesimg from "../../../assets/img/header.png"

export default function RecipesList() {
  return <>
  <Header 
  title={'Recipes Items'}
  description={' You can now add your items that any user can order it from the Application and you can edit'}
  imgUrl={Rescipesimg}

  />
  </>
}
