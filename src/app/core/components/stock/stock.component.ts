import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  active = 'equipment';
  tableParams;

  constructor() { }

  ngOnInit(): void {
    this.tableParams = {
      header: [
        {
          content: 'Наименование'
        },
        {
          content: 'Производитель'
        },
        {
          content: 'Страна'
        },
        {
          content: 'Модель'
        },
        {
          content: 'Количество'
        },
        {
          content: 'Цена за ед.'
        },
        {
          content: 'Пооследнее изменение'
        },
        {
          content: ''
        },
      ],
      body: [
        {
          count: 0,
          items: [
            {
              content: 'Имплантат'
            },
            {
              content: 'Straumann'
            },
            {
              content: 'Швейцария'
            },
            {
              content: 'SLActive'
            },
            {
              content: '5'
            },
            {
              content: '659 руб.'
            },
            {
              content: '5 минут назад'
            },
          ],
        },
        {
          count: 0,
          items: [
            {
              content: 'Имплантат'
            },
            {
              content: 'Nobel'
            },
            {
              content: 'Израиль'
            },
            {
              content: 'Модель'
            },
            {
              content: '7'
            },
            {
              content: '659 руб.'
            },
            {
              content: '14 минут назад'
            },
          ],
        },
        {
          count: 0,
          items: [
            {
              content: 'Брекеты'
            },
            {
              content: 'ORMKO'
            },
            {
              content: 'США'
            },
            {
              content: 'DAMON Q'
            },
            {
              content: '2'
            },
            {
              content: '90руб.'
            },
            {
              content: '3 часа назад'
            },
          ],
        },
        {
          count: 0,
          items: [
            {
              content: 'Брекеты'
            },
            {
              content: 'ORMKO'
            },
            {
              content: 'США'
            },
            {
              content: 'DAMON Ormko'
            },
            {
              content: '14'
            },
            {
              content: '160 руб.'
            },
            {
              content: '5 дней назад'
            },
          ],
        },
        {
          count: 0,
          items: [
            {
              content: 'Пластина'
            },
            {
              content: 'TITANMED'
            },
            {
              content: 'Германия'
            },
            {
              content: 'P-met-11'
            },
            {
              content: '1'
            },
            {
              content: '49 руб.'
            },
            {
              content: '2 дня назад'
            },
          ],
        },
        {
          count: 0,
          items: [
            {
              content: 'Штифт'
            },
            {
              content: 'Россия'
            },
            {
              content: 'Россия'
            },
            {
              content: 'Ш-22.56'
            },
            {
              content: '9'
            },
            {
              content: '190 руб.'
            },
            {
              content: '4 часа назад'
            },
          ],
        },
        {
          count: 0,
          items: [
            {
              content: 'Скальпель'
            },
            {
              content: 'Россия'
            },
            {
              content: 'Россия'
            },
            {
              content: 'С12'
            },
            {
              content: '30'
            },
            {
              content: '17 руб.'
            },
            {
              content: 'Дек 12, 2019'
            },
          ],
        },
      ],
      get totalCount() {
        return this.body.reduce((sum, curr) => sum + curr.count, 0);
      }
    };
  }
}
