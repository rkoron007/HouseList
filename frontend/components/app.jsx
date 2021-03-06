import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import MainPageContainer from "./mainpage/mainpage";
import CategoriesBarContainer from "./categories/categories_container";
import CartIndexContainer from "./cart/cart_index_container";
import UserShowContainer from "./users/user_show_container";
import FavoriteIndexContainer from "./favorites/favorite_index_container";
import MessageFormContainer from './messages/message_form_container';
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

    <Route path ="/" component={CategoriesBarContainer} />
    <Switch>
      <ProtectRoute
        exact path="/users/:userId/favorites"
        component={FavoriteIndexContainer}
      />
      <ProtectRoute
        exact path ="/users/:userId"
        component={ UserShowContainer }
      />
      <ProtectRoute exact path="/items/:itemId/edit"
        component={ ItemEditContainer }/>
      <ProtectRoute exact path="/items/new"
        component={ ItemCreateContainer }/>
      <ProtectRoute exact path="/items/:itemId"
        component={ ItemShowContainer }/>
      <ProtectRoute
        exact path="/items"
        component={ ItemIndexContainer }
      />
      <ProtectRoute
        exact path="/search"
        component={ ItemIndexContainer }
      />
      <ProtectRoute exact path ="/carts"
        component={ CartIndexContainer }
      />
      <Route exact path ="/signup" component={ MainPageContainer } />
      <Route exact path ="/login" component={ MainPageContainer } />
      <Route exact path ="/" component={ MainPageContainer } />
      <Redirect to="/"></Redirect>
    </Switch>

  </div>
);
export default App;
