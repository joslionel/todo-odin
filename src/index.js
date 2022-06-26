import './style.css';
import { renderPage } from "./renderPage";
import { leftPanelActions } from "./leftPanelActions";
import { mainPaneActions, updateMainPane } from "./mainPanelActions";

renderPage()

leftPanelActions();
mainPaneActions();

updateMainPane('default')


