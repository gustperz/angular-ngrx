import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Offer } from '../types';

import { DataApiService } from './data-api.service';

describe('DataApiService', () => {
  let service: DataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],});
    service = TestBed.inject(DataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be parse raw data to Offer', () => {
    const raw = {
      versions: [
        {
          characteristics: [
            {
              versions: [
                {
                  validFor: {
                    startDateTime: '2020-04-08T00:00:00.000Z',
                  },
                  valueType: 'CodeTable',
                  name: 'Instance State',
                  id: 'instance_state',
                  type: 'lifeCycle',
                  characteristicValues: [
                    {
                      displayValue: 'TERMINATED',
                      isDefault: false,
                      validFor: {
                        startDateTime: '2020-04-08T00:00:00.000Z',
                      },
                      valueType: 'CodeTable',
                      value: 'TERMINATED',
                    },
                  ],
                  properties: [
                    {
                      isSelected: true,
                      value: 'CONF',
                    },
                  ],
                },
              ],
              id: 'instance_state',
            },
            {
              versions: [
                {
                  displayValue: 'Pentium',
                  validFor: {
                    startDateTime: '2020-04-08T00:00:00.000Z',
                  },
                  valueType: 'String',
                  name: 'Procesador',
                  id: 'Procesador',
                  type: 'pscmUserAttribute',
                  value: 'Pentium',
                  properties: [
                    {
                      isSelected: true,
                      value: 'TCRMFlag',
                    },
                  ],
                },
              ],
              id: 'Procesador',
            },
          ],
          productOfferingPrices: [
            {
              versions: [
                {
                  markup: 0,
                  price: {
                    amount: 1905882,
                    units: {
                      code: 'COP',
                      name: 'COP',
                    },
                  },
                  percentage: 0,
                  name: 'PrecioBaseTecnologia',
                  id: 'CT_TecPrecioBaseOTC',
                  plaId: 'CT_TecPrecioBaseOTC',
                  popType: 'PrecioBaseOne-Time',
                  frequency: 'O',
                },
              ],
              id: 'CT_TecPrecioBaseOTC',
            },
          ],
          name: 'LAPTOP X16P NEURON A PNTNM 14" LCD LANX',
          id: 'PO_Tec7009695',
        },
      ],
      id: 'PO_Tec7009695',
      href: 'undefinedproductOffering/PO_Tec7009695',
    };

    const offer: Offer = {
      id: 'PO_Tec7009695',
      name: 'LAPTOP X16P NEURON A PNTNM 14" LCD LANX',
      versionId: 'PO_Tec7009695',
      characteristics: [
        {
          id: 'instance_state',
          name: 'Instance State',
          versionId: 'instance_state',
        },
        {
          id: 'Procesador',
          name: 'Procesador',
          versionId: 'Procesador',
        },
      ],
      productOfferingPrices: [
        {
          amount: 1905882,
          name: 'PrecioBaseTecnologia',
          units: 'COP',
        },
      ],
    };

    expect(service.parseOffer(raw)).toEqual(offer);
  });
});
