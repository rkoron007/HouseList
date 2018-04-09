import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import MainPageContainer from "./mainpage/mainpage";
import CategoriesBar from "./categories/categories_bar";
import CartIndexContainer from "./cart/cart_index_container";


import ItemIndexContainer from "./items/items_index_container";
import ItemShowContainer from "./items/item_show_container";

import ItemEditContainer from "./items/item_form/item_edit_container";
import ItemCreateContainer from "./items/item_form/item_create_container";

import Modal from "./header/session_form/modal";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>

    <Route path ="/" component={CategoriesBar} />



    <Switch>
        <ProtectRoute exact path="/items/new"
          component={ ItemCreateContainer }/>
        <ProtectRoute exact path="/items/:itemId/edit"
          component={ ItemEditContainer }/>
        <Route exact path="/items/:itemId"
          component={ ItemShowContainer }/>
        <Route exact path="/items" component={ ItemIndexContainer }/>
        <Route exact path ="/signup" component={ MainPageContainer } />
        <Route exact path ="/login" component={ MainPageContainer } />
        <Route exact path ="/carts" component={ CartIndexContainer } />
        <Route exact path ="/" component={ MainPageContainer } />
        <Redirect to="/" />
      </Switch>

  </div>
);
export default App;
