/**
 * Generated by orval v7.0.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export type ListPetsNestedArrayParams = {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: string;
};

export type CreatePetsBody = {
  name: string;
  tag: string;
};

export type ListPetsParams = {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: string;
};

export interface Error {
  code: number;
  message: string;
}

/**
 * @minItems 1
 * @maxItems 20
 */
export type PetsArray = Pet[];

export interface PetsNestedArray {
  data?: Pet[];
}

export type PetCountry = (typeof PetCountry)[keyof typeof PetCountry];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetCountry = {
  "People's_Republic_of_China": "People's Republic of China",
  Uruguay: 'Uruguay',
} as const;

export type PetCallingCode =
  (typeof PetCallingCode)[keyof typeof PetCallingCode];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetCallingCode = {
  '+33': '+33',
  '+420': '+420',
} as const;

export interface Pet {
  /**
   * @minimum 0
   * @maximum 30
   * @exclusiveMinimum
   * @exclusiveMaximum
   */
  age?: number;
  callingCode?: PetCallingCode;
  country?: PetCountry;
  email?: string;
  id: number;
  /**
   * Name of pet
   * @minLength 40
   * @maxLength 0
   */
  name: string;
  /**
   * @nullable
   * @pattern ^\\d{3}-\\d{2}-\\d{4}$
   */
  tag?: string | null;
}

/**
 * @summary List all pets
 */
export const listPets = <TData = AxiosResponse<PetsArray>>(
  params?: ListPetsParams,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.get(`/pets`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

/**
 * @summary Create a pet
 */
export const createPets = <TData = AxiosResponse<void>>(
  createPetsBody: CreatePetsBody,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.post(`/pets`, createPetsBody, options);
};

/**
 * @summary List all pets as nested array
 */
export const listPetsNestedArray = <TData = AxiosResponse<PetsNestedArray>>(
  params?: ListPetsNestedArrayParams,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.get(`/pets-nested-array`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = <TData = AxiosResponse<Pet>>(
  petId: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.get(`/pets/${petId}`, options);
};

export type ListPetsResult = AxiosResponse<PetsArray>;
export type CreatePetsResult = AxiosResponse<void>;
export type ListPetsNestedArrayResult = AxiosResponse<PetsNestedArray>;
export type ShowPetByIdResult = AxiosResponse<Pet>;
