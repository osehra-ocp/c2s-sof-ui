/*
 *
 * Context constants
 *
 */

/**
 *  Context action types
 *  @type {string}
 */
export const INITIALIZE_CONTEXT = 'c2s/Context/INITIALIZE_CONTEXT';
export const SET_PATIENT = 'c2s/Context/SET_PATIENT';
export const SET_USER = 'c2s/Context/SET_USER';
export const SET_ORGANIZATION = 'c2s/Context/SET_ORGANIZATION';
export const CLEAR_PATIENT = 'c2s/Context/CLEAR_PATIENT';
export const CLEAR_USER = 'c2s/Context/CLEAR_USER';
export const CLEAR_ORGANIZATION = 'c2s/Context/CLEAR_ORGANIZATION';
export const CLEAR_ALL = 'c2s/Context/CLEAR_ALL';
export const REFRESH_PATIENT = 'c2s/Context/REFRESH_PATIENT';
export const REFRESH_ORGANIZATION = 'c2s/Context/REFRESH_ORGANIZATION';
export const GET_PATIENT = 'c2s/Context/GET_PATIENT';
export const GET_PATIENT_ERROR = 'c2s/Context/GET_PATIENT_ERROR';
export const GET_ORGANIZATION = 'c2s/Context/GET_ORGANIZATION';
export const GET_ORGANIZATION_ERROR = 'c2s/Context/GET_ORGANIZATION_ERROR';
export const GET_USER_CONTEXT_ERROR = 'c2s/Context/GET_USER_CONTEXT_ERROR';

/**
 *  Constants to hold the FHIR resource types
 * @type {string}
 */
export const PRACTITIONER = 'c2s/Context/PRACTITIONER';
export const PATIENT = 'c2s/Context/PATIENT';
export const RESOURCE_TYPE = {
  PRACTITIONER,
  PATIENT,
};

/**
 *  Other constants
 *
 */
