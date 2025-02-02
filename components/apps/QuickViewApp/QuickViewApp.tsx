import { h, FunctionComponent } from 'preact';
import { AppProps } from '../../../types/App';

import Countour from '../../shared/Countour/Countour';
import MenuBar from '../../shared/MenuBar/MenuBar';
import StatusBar from '../../shared/StatusBar/StatusBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

import style from './QuickViewApp.css';

const QuickViewApp: FunctionComponent<AppProps> = ({
  workingFile,
}: AppProps) => (
  <WindowContent
    menu={<MenuBar options={['File', 'View', 'Help']} />}
    body={
      <Countour>
        <img className={style.picture} src={workingFile?.content ?? ''} />
      </Countour>
    }
    footer={
      <StatusBar textLeft="To edit, click Open File for Editing on the File menu." />
    }
  />
);

export default QuickViewApp;
