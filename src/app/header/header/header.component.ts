import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  bar: string | undefined;

  isShowSort = true;

  upDownSort: any = true;

  upDownSortTwo:any = true;

  cardsForWordFilter :any = [];

  constructor(private router: Router) {
    this.bar = 'Hello World';
  }

  name: string = 'your name';

  ngOnInit(): void {
    this.bar = 'Hello World';
  }

  toggleDisplaySort(e: MouseEvent) {
    this.isShowSort = !this.isShowSort;
    e.preventDefault();
  }

  filterDate(e:MouseEvent) {
    e.preventDefault();
    if (document.querySelector('.publishDate')) {
      const mainCardCont:any = document.querySelector('.cards__container');
      let cardsContainer :any = document.querySelectorAll('.card');
      mainCardCont.innerHTML = '';
      const curElDateFunc:any = (node:any) => {
        const curElDate:any = node.children[1].children[3].textContent;
        return new Date(String(curElDate)).getFullYear();
      };
      cardsContainer = Array.prototype.slice.call(cardsContainer, 0);
      const cardsContainerSorterFunc = (cardsCont:any) => cardsCont.sort((a:any, b:any) => {
        const first: any = curElDateFunc(a);
        const second :any = curElDateFunc(b);
        return first - second;
      });
      if (this.upDownSort === true) {
        let newArr:any = [];
        newArr = newArr.concat(cardsContainerSorterFunc(cardsContainer));
        this.upDownSort = !this.upDownSort;
        newArr.forEach((ele:any) => {
          mainCardCont.append(ele);
        });
      } else if (this.upDownSort === false) {
        let newSortArr:any = [];
        cardsContainer.forEach((element:any, index:any) => {
          newSortArr[9 - index] = element;
        });
        newSortArr = newSortArr.concat(cardsContainerSorterFunc(newSortArr));
        this.upDownSort = !this.upDownSort;
        newSortArr.forEach((_:any, ind:any) => {
          if (newSortArr[9 - ind]) {
            mainCardCont.append(newSortArr[9 - ind]);
          }
        });
      }
    }
  }

  filterCountOfView(e:MouseEvent) {
    e.preventDefault();
    if (document.querySelector('.publishDate')) {
      const mainCardCont:any = document.querySelector('.cards__container');
      let cardsContainer :any = document.querySelectorAll('.card');
      mainCardCont.innerHTML = '';
      const curElDateFunc:any = (node:any) => {
        const curElDate:any = node.children[1].children[1].children[0].children[0]
          .children[1].textContent;
        return Number(curElDate);
      };
      cardsContainer = Array.prototype.slice.call(cardsContainer, 0);
      const cardsContainerSorterFunc = (cardsCont:any) => cardsCont.sort((a:any, b:any) => {
        const first: any = curElDateFunc(a);
        const second :any = curElDateFunc(b);
        return first - second;
      });
      if (this.upDownSortTwo === true) {
        let newArr:any = [];
        newArr = newArr.concat(cardsContainerSorterFunc(cardsContainer));
        this.upDownSortTwo = !this.upDownSortTwo;
        newArr.forEach((ele:any) => {
          mainCardCont.append(ele);
        });
      } else if (this.upDownSortTwo === false) {
        let newSortArr:any = [];
        cardsContainer.forEach((element:any, index:any) => {
          newSortArr[9 - index] = element;
        });
        newSortArr = newSortArr.concat(cardsContainerSorterFunc(newSortArr));
        this.upDownSortTwo = !this.upDownSortTwo;
        newSortArr.forEach((_:any, ind:any) => {
          if (newSortArr[9 - ind]) {
            mainCardCont.append(newSortArr[9 - ind]);
          }
        });
      }
    }
  }

  filterByInput() {
    if (document.querySelector('.publishDate')) {
      const myFilterInput:any = document.querySelector('.my__input--sort');
      const mainCardCont:any = document.querySelector('.cards__container');
      let cardsContainer :any = document.querySelectorAll('.card');
      this.cardsForWordFilter = this.cardsForWordFilter.concat(cardsContainer);

      mainCardCont.innerHTML = '';
      cardsContainer = Array.prototype.slice.call(cardsContainer, 0);
      const regex:any = new RegExp(`^${myFilterInput.value}`, 'gi');

      const newCardCont = cardsContainer.filter((element:any) => {
        const el = element.children[1].children[0].textContent.toLowerCase();

        return el.match(regex);
      });
      if (newCardCont[0]) {
        newCardCont.forEach((e:any) => {
          mainCardCont.append(e);
        });
      } else {
        mainCardCont.textContent = 'no matches found reset in 5 sec';
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    }
  }

  navigateSearch(e:MouseEvent) {
    e.preventDefault();
    return this.router.navigate(['search']);
  }
}
