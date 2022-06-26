import './style.css';
import { renderPage } from "./renderPage";
import { leftPanelActions } from "./leftPanelActions";
import { updateCompletionStatus, updateMainPane } from "./mainPanelActions";

renderPage()

leftPanelActions()

updateMainPane('default')


