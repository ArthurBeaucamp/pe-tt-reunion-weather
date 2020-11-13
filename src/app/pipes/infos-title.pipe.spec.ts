import { IInfosTitle } from '../interfaces/IInfos';
import { InfosTitlePipe } from './infos-title.pipe';
import moment from 'moment';

describe('InfosTitlePipe', () => {
  const pipe = new InfosTitlePipe();

  const INFOS_TITLE: IInfosTitle = {
    title: 'Je Suis uN Titre',
    date: '20/06/1996',
  };

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return infos title', () => {
    expect(pipe.transform(INFOS_TITLE)).toEqual('Je suis un titre - 20/06/1996');
  });
});
