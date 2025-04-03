import { Injectable } from '@angular/core';
import { Tools } from '../../shared/models/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  getAll():Tools[]{
    return [
      {
        id: 1,
        price: 100,
        name: 'Garden fork',
        star: 5,
        tags: ['Tools', 'Garden fork', 'Gardening'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VFg4qN-HjqUa-x1PcMn2YFWefFg8AygsBA&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      },
      {
        id: 2,
        price: 1000,
        name: 'Wheelbarrow',
        star: 4,
        tags: ['Tools', 'Wheelbarrow', 'Gardening'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5-xEkxZU5lhxnbDjd9bDPe-bXXTTA9F3qw&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      },
      {
        id: 3,
        price: 1500,
        name: 'Hoe',
        star: 3,
        tags: ['Tools', 'Hoe', 'Farming'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMp6rUTTamEyb-x0zrt0qd4JbEU6e_y_nOw&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      },
      {
        id: 4,
        price: 300,
        name: 'Shovel',
        star: 3,
        tags: ['Tools', 'Shovel', 'Farming'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CFr5P3MpdHkYgZa7GQO8Jb73v5MbGajjag&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      },
      {
        id: 5,
        price: 1000,
        name: 'set of gardening tools',
        star: 3,
        tags: ['Tools', 'Set of tools', 'Farming'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVNA7yHaNOB6-NhlFJNtb5FO4vHZy5loEHg&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      },
      {
        id: 6,
        price: 100,
        name: 'watering can',
        star: 3,
        tags: ['Tools', 'watering can', 'Farming'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFT_kwiI2B6QpodUWHFAmP0m6PVITiKYNUA&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      },
      {
        id: 7,
        price: 1000,
        name: 'pack of tools',
        star: 3,
        tags: ['Tools', 'pack of tools', 'Farming'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSHSDjzNBH_LOLDXz2H5TdPHlLelOkD2ZnA&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      },
      {
        id: 8,
        price: 500,
        name: 'gardening gloves',
        star: 3.5,
        tags: ['Tools', 'gardening gloves', 'Farming'],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GY6N_uPeHbbr5NISqBRvd6V7XmRVJGwCPQ&s",
        origins: ['India'],
        favourite: false,
        uses: ''
      }
    ];
  }
}