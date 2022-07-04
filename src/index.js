import './style.css';
import { renderPage } from "./renderPage";
import { leftPanelActions } from "./leftPanelActions";
import { mainPaneActions, updateMainPane } from "./mainPanelActions";
import { retrieveLocal } from './projects';

renderPage()
retrieveLocal()

leftPanelActions();
mainPaneActions();

// updateMainPane('default')



