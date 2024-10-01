import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any> {
    const apiUrl = 'https://date.nager.at/api/v3/AvailableCountries';

    try {
      const response = await firstValueFrom(this.httpService.get(apiUrl));

      const modifiedResponse = response.data.map((country: any) => ({
        countryCode: country.countryCode,
        commonName: country.name,
      }));

      return modifiedResponse;
    } catch (error) {
      throw new Error(`Erro ao consultar a API: ${error.message}`);
    }
  }

  async findInfoCountry({ name, countryCode }): Promise<any> {
    const apiUrlInfoBorders = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;
    const apiUrlFlags = `https://countriesnow.space/api/v0.1/countries/flag/images`;
    const apiUrlPopulation = `https://countriesnow.space/api/v0.1/countries/population`;

    const completeInfoCountry = {
      countryCode,
      commonName: name,
      flag: null,
      borders: [],
      population: [],
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(apiUrlInfoBorders),
      );
      //   console.log(response.data.borders);
      completeInfoCountry.borders = response.data.borders;
    } catch (error) {
      throw new Error(`Erro ao consultar a API: ${error.message}`);
    }

    try {
      const response = await firstValueFrom(
        this.httpService.post(apiUrlFlags, { iso2: countryCode }),
      );
      //   console.log(response.data.data.flag);
      completeInfoCountry.flag = response.data.data.flag;
    } catch (error) {
      throw new Error(`Erro ao consultar a API: ${error.message}`);
    }

    try {
      const response = await firstValueFrom(
        this.httpService.post(apiUrlPopulation, { country: name }),
      );
      //   console.log(response.data.data.populationCounts);
      completeInfoCountry.population = response.data.data.populationCounts;
    } catch (error) {
      throw new Error(`Erro ao consultar a API: ${error.message}`);
    }
    return completeInfoCountry;
  }
}
