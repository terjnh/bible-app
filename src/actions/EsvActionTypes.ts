export const ESV_LOADING = "ESV_LOADING";
export const ESV_FAIL = "ESV_FAIL";
export const ESV_SUCCESS = "ESV_SUCCESS";

export type EsvType = {
  query: string;
  canonical: string;
  passage_meta: PassageMeta[];
  passages: string[];
};

export type PassageMeta = {
  canonical: string;
  chapter_start: number[];
  chapter_end: number[];
};

export interface EsvLoading {
  type: typeof ESV_LOADING;
}

export interface EsvFail {
  type: typeof ESV_FAIL;
}

export interface EsvSuccess {
  type: typeof ESV_SUCCESS;
  payload: {
    query: string;
    canonical: string;
    passage_meta: PassageMeta[];
    passages: string[];
  };
}

export type EsvDispatchTypes = EsvLoading | EsvFail | EsvSuccess;
