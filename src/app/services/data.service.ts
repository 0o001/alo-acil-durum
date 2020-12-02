import { Injectable } from '@angular/core';

export interface Message {
  name: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[]  = [
    {
      name: 'Ambulans / Acİl Durum',
      number: '112'
    },
    {
      name: 'Polİs İmdat',
      number: '155'
    },
    {
      name: 'Jandarma İmdat',
      number: '156'
    },
    {
      name: 'İtfaİye / Yangın',
      number: '110'
    },
    {
      name: 'Afet ve Acİl Durum (AFAD)',
      number: '122'
    },
    {
      name: 'Alo Trafİk',
      number: '155'
    },
    {
      name: 'Orman Yangını',
      number: '177'
    },
    {
      name: 'Zehİrlenme Danışma Hattı',
      number: '114'
    },
    {
      name: 'Sosyal Yardım',
      number: '144'
    },
    {
      name: 'Çocuk, Kadın Yardım',
      number: '183'
    },
    {
      name: 'Yaşlı, Engellİ Yardım',
      number: '183'
    },
    {
      name: 'Şehİt, Gazİ ve Yakınları Yardım',
      number: '183'
    },
    {
      name: 'İstİsmar, Şİddet, Töre Yardım',
      number: '183'
    },
    {
      name: 'Sahİl Güvenlİk',
      number: '158'
    },
    {
      name: 'Alo Doktor',
      number: '113'
    },
    {
      name: 'Alo Zabıta',
      number: '153'
    },
    {
      name: 'Terör İhbar Hattı',
      number: '140'
    },
    {
      name: 'Arıza İhbar Hattı',
      number: '101'
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
